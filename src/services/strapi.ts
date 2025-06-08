// Strapi API configuration and service functions
const STRAPI_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface NewsArticle {
  id: number;
  attributes: {
    title: string;
    excerpt: string;
    content: string;
    publishedAt: string;
    category: string;
    featuredImage?: {
      data?: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
  };
}

interface Program {
  id: number;
  attributes: {
    title: string;
    description: string;
    features: string[];
    icon: string;
    color: string;
  };
}

interface AboutContent {
  id: number;
  attributes: {
    mission: string;
    description: string;
    values: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

// Generic fetch function for Strapi API
async function fetchFromStrapi<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching from Strapi: ${endpoint}`, error);
    throw error;
  }
}

// Fetch news articles
export async function getNewsArticles(): Promise<NewsArticle[]> {
  try {
    const response = await fetchFromStrapi<StrapiResponse<NewsArticle[]>>(
      'news-articles?populate=featuredImage&sort=publishedAt:desc'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching news articles:', error);
    return [];
  }
}

// Fetch programs
export async function getPrograms(): Promise<Program[]> {
  try {
    const response = await fetchFromStrapi<StrapiResponse<Program[]>>(
      'programs?sort=createdAt:asc'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}

// Fetch about content
export async function getAboutContent(): Promise<AboutContent | null> {
  try {
    const response = await fetchFromStrapi<StrapiResponse<AboutContent[]>>(
      'about-contents'
    );
    return response.data[0] || null;
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}

// Submit contact form
export async function submitContactForm(formData: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/contact-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: formData
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return false;
  }
}

// Helper function to get full image URL from Strapi
export function getStrapiImageUrl(imageData: any): string {
  if (!imageData?.data?.attributes?.url) {
    return '';
  }
  
  const url = imageData.data.attributes.url;
  
  // If URL is already absolute, return as is
  if (url.startsWith('http')) {
    return url;
  }
  
  // Otherwise, prepend Strapi URL
  return `${STRAPI_URL}${url}`;
}