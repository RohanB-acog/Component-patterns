// app/exercise3/hooks/useDataFetcher.ts
'use client';
import { useState, useEffect, useRef } from 'react';
import { BaseDataFetcher } from '../data-fetchers/BaseDataFetcher';
import { FetchState } from '../data-fetchers/BaseDataFetcher';

export function useDataFetcher<T>(
  DataFetcherClass: new () => BaseDataFetcher<T>
): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  // Initialize useRef with a new instance of the DataFetcher
  const fetcherRef = useRef<BaseDataFetcher<T>>(new DataFetcherClass());

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const data = await fetcherRef.current.fetchData();
        if (mounted) {
          setState({ data, loading: false, error: null });
        }
      } catch (error) {
        if (mounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error : new Error('Unknown error'),
          });
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  return state;
}