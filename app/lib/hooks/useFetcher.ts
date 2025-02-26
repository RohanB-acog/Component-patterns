// app/hooks/useFetcher.ts
'use client';
import { useState, useEffect } from 'react';
import { BaseFetcher } from '../BaseFetcher';

export function useFetcher<T>(fetcher: BaseFetcher<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetcher.fetchData();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetcher]);

  return { data, loading, error };
}