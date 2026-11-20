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

// ---------------------------------------------------------------------------
// Blog helpers
// Every blog field is optional in Contentful, so each one gets a safe fallback.
// ---------------------------------------------------------------------------

// Contentful asset URLs come without a protocol
const assetUrl = (asset) => {
  const url = asset?.fields?.file?.url;
  if (!url) return null;
  return url.startsWith('//') ? `https:${url}` : url;
};

// Returns '' when there is no date, and the original value if it isn't a valid date
const formatDate = (value) => {
  if (!value) return '';
  const d = new Date(value);
  if (isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Turns a Contentful blogPost entry into the shape the Blog and ArticleDetails pages use
function mapBlogPost(item) {
  const f = item.fields || {};
  return {
    id: item.sys.id,
    // No slug? Fall back to the entry ID so the post is still reachable
    slug: f.slug || item.sys.id,
    title: f.title || 'Untitled post',
    excerpt: f.excerpt || '',
    author: f.author || '',
    date: formatDate(f.date),
    category: f.category || '',
    featured: f.featured || false,
    image: assetUrl(f.image),
    imageAlt: f.imageAlt || f.title || '',
    // Raw Rich Text document, rendered by RichTextRenderer
    body: f.body && f.body.nodeType === 'document' ? f.body : null,
  };
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

    return entries.items.map(mapBlogPost);
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    return [];
  }
}

// Fetch a single blog post by its slug
// Returns the full blog post (including the rich text body) for the article details page
export async function fetchBlogPostBySlug(slug) {
  const client = getContentfulClient();

  try {
    // include: 3 resolves linked assets (e.g. images embedded in the body)
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug, // Query by slug field directly
      limit: 1,
      include: 3,
    });

    if (entries.items.length > 0) {
      return mapBlogPost(entries.items[0]);
    }

    // Posts without a slug use their entry ID in the URL
    const entry = await client.getEntry(slug, { include: 3 });
    return entry?.sys?.contentType?.sys?.id === 'blogPost'
      ? mapBlogPost(entry)
      : null;
  } catch (error) {
    console.error('Error fetching blog post by slug from Contentful:', error);
    return null;
  }
}