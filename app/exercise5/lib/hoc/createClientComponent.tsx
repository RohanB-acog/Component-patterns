'use client';
import { ComponentType, useEffect, useState } from 'react';
import { BaseEntity, WithFetchingProps } from '../../types';
import { FetcherRegistry } from '../registry/FetcherRegistery';
import { initRegistry } from '../registry/initRegitry';

// Ensure registry is initialized on the client side
initRegistry();

export function createClientComponent<T extends BaseEntity>(
  WrappedComponent: ComponentType<WithFetchingProps<T>>,
  fetcherKey: string
) {
  return function ClientComponent() {
    const [state, setState] = useState<WithFetchingProps<T>>({
      data: [],
      loading: true,
      error: null
    });

    useEffect(() => {
      const registry = FetcherRegistry.getInstance();
      const FetcherClass = registry.getFetcher<T>(fetcherKey);
      const fetcher = new FetcherClass();
      
      const fetchData = async () => {
        try {
          const data = await fetcher.fetchData();
          setState({ data, loading: false, error: null });
        } catch (error) {
          setState({
            data: [],
            loading: false,
            error: error instanceof Error ? error : new Error('Unknown error')
          });
        }
      };

      fetchData();
    }, []);

    return <WrappedComponent {...state} />;
  };
}
