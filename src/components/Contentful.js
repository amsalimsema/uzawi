import { createClient } from 'contentful';

// Create Contentful client for browser use
// This initializes the Contentful SDK with your space credentials
export function getContentfulClient() {
  return createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID, // Your Contentful space ID from .env
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN, // Your Content Delivery API token from .env
  });
}

// Fetch all research items from Contentful
// Returns an array of research items with all necessary fields
export async function fetchResearchItems() {
  const client = getContentfulClient();

  try {
    // Query Contentful for all entries of type "researchItem"
    // Ordered by creation date (newest first)
    const entries = await client.getEntries({
      content_type: 'researchItem',
      order: '-sys.createdAt',
    });

    // Transform Contentful entries into a simpler format for the app
    return entries.items.map((item) => ({
      id: item.sys.id, // Unique system ID from Contentful
      title: item.fields.title,
      description: item.fields.description,
      // Add "https:" prefix to Contentful asset URLs (they come without protocol)
      image: item.fields.image?.fields?.file?.url
        ? `https:${item.fields.image.fields.file.url}`
        : null,
      borderColor: item.fields.borderColor || '#00CAFF',
      pdfUrl: item.fields.pdf?.fields?.file?.url
        ? `https:${item.fields.pdf.fields.file.url}`
        : null,
      category: item.fields.category,
    }));
  } catch (error) {
    console.error('Error fetching research items from Contentful:', error);
    return []; // Return empty array on error
  }
}

// Fetch unique categories from all research items
// Returns ["All", ...unique categories]
export async function fetchResearchCategories() {
  const client = getContentfulClient();

  try {
    // Query only the category field to minimize data transfer
    const entries = await client.getEntries({
      content_type: 'researchItem',
      select: 'fields.category',
    });

    // Extract unique categories using Set to remove duplicates
    const categories = [
      ...new Set(entries.items.map((item) => item.fields.category)),
    ];
    // Always include "All" as the first option
    return ['All', ...categories.filter(Boolean)];
  } catch (error) {
    console.error('Error fetching categories from Contentful:', error);
    return ['All'];
  }
}

// Fetch all blog posts from Contentful
// Returns an array of blog posts with all fields needed for the blog listing
export async function fetchBlogPosts() {
  const client = getContentfulClient();

  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
    });

    return entries.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      excerpt: item.fields.excerpt,
      author: item.fields.author,
      date: item.fields.date,
      category: item.fields.category,
      featured: item.fields.featured || false,
      image: item.fields.image?.fields?.file?.url
        ? `https:${item.fields.image.fields.file.url}`
        : null,
      slug: item.fields.slug, // Use slug field directly from Contentful
    }));
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    return [];
  }
}

// Fetch a single blog post by its slug
// The slug is generated from the blog post title
// Returns the full blog post with content for the article details page
export async function fetchBlogPostBySlug(slug) {
  const client = getContentfulClient();

  try {
    // Query Contentful for the blog post with matching slug
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug, // Query by slug field directly
      limit: 1,
    });

    if (entries.items.length === 0) {
      return null;
    }

    const entry = entries.items[0];

    // Parse Rich Text content from Contentful
    let content = [];
    if (entry.fields.body && entry.fields.body.nodeType === 'document') {
      // Process Rich Text document content
      content = entry.fields.body.content
        .map((node) => {
          // Handle different node types
          if (
            node.nodeType === 'heading-1' ||
            node.nodeType === 'heading-2' ||
            node.nodeType === 'heading-3'
          ) {
            const text = node.content?.map((c) => c.value).join('') || '';
            return text ? { type: 'heading', text } : null;
          }
          if (node.nodeType === 'paragraph') {
            const text = node.content?.map((c) => c.value).join('') || '';
            return text ? { type: 'paragraph', text } : null;
          }
          return null;
        })
        .filter(Boolean);
    }

    return {
      id: entry.sys.id,
      title: entry.fields.title,
      excerpt: entry.fields.excerpt,
      author: entry.fields.author,
      date: new Date(entry.fields.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      category: entry.fields.category,
      featured: entry.fields.featured || false,
      image: entry.fields.image?.fields?.file?.url
        ? `https:${entry.fields.image.fields.file.url}`
        : null,
      content: content,
    };
  } catch (error) {
    console.error('Error fetching blog post by slug from Contentful:', error);
    return null;
  }
}
