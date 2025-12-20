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
    // Query Contentful for all entries of type "blogPost"
    // Ordered by creation date (newest first)
    const entries = await client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
    });

    // Transform Contentful entries into a simpler format
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
      // Create a URL-friendly slug from the title for routing
      slug: item.fields.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, ''),
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
    // Query Contentful for blog posts
    const entries = await client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
    });

    // Find the blog post that matches the slug
    const matchedEntry = entries.items.find((item) => {
      // Generate slug from the title to match against the URL slug
      const itemSlug = item.fields.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      return itemSlug === slug;
    });

    // Return null if no matching post found
    if (!matchedEntry) {
      return null;
    }

    // Transform the matched entry into the format expected by ArticleDetails
    return {
      id: matchedEntry.sys.id,
      title: matchedEntry.fields.title,
      excerpt: matchedEntry.fields.excerpt,
      author: matchedEntry.fields.author,
      // Format the date as a readable string
      date: new Date(matchedEntry.fields.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      category: matchedEntry.fields.category,
      featured: matchedEntry.fields.featured || false,
      image: matchedEntry.fields.image?.fields?.file?.url
        ? `https:${matchedEntry.fields.image.fields.file.url}`
        : null,
      // Content is stored as an array of content blocks in Contentful
      // Each block has a type (heading, paragraph) and text
      content: matchedEntry.fields.content || [],
      // Calculate estimated read time based on content length
      // Assumes average reading speed of 200 words per minute
      readTime: matchedEntry.fields.content
        ? `${Math.ceil(
            matchedEntry.fields.content.reduce(
              (total, block) => total + block.text.split(' ').length,
              0
            ) / 200
          )} min read`
        : '5 min read',
    };
  } catch (error) {
    console.error('Error fetching blog post by slug from Contentful:', error);
    return null;
  }
}
