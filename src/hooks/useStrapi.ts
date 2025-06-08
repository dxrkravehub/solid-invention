import { useState, useEffect } from 'react';
import { getNewsArticles, getPrograms, getAboutContent } from '../services/strapi';

// Hook for fetching news articles
export function useNewsArticles() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const data = await getNewsArticles();
        setArticles(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch news articles');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return { articles, loading, error };
}

// Hook for fetching programs
export function usePrograms() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        setLoading(true);
        const data = await getPrograms();
        setPrograms(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch programs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrograms();
  }, []);

  return { programs, loading, error };
}

// Hook for fetching about content
export function useAboutContent() {
  const [aboutContent, setAboutContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAboutContent() {
      try {
        setLoading(true);
        const data = await getAboutContent();
        setAboutContent(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch about content');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAboutContent();
  }, []);

  return { aboutContent, loading, error };
}