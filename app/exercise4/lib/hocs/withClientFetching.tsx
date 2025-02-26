
  
  // app/exercise4/lib/hocs/withClientFetching.tsx
  'use client';
  import { ComponentType, useEffect, useState } from 'react';
  import { BaseDataFetcher } from '../../components/data-fetchers/BaseDataFetcher';
  import { WithFetchingProps } from '../../types';
  
  export function withClientFetching<T>(
    WrappedComponent: ComponentType<WithFetchingProps<T>>,
    DataFetcher: new () => BaseDataFetcher<T>
  ) {
    function ClientFetchingComponent() {
      const [props, setProps] = useState<WithFetchingProps<T>>({
        loading: true,
        data: [],
        error: null,
      });
  
      useEffect(() => {
        const fetcher = new DataFetcher();
        
        let mounted = true;
  
        const fetchData = async () => {
          try {
            const data = await fetcher.fetchData();
            if (mounted) {
              setProps({ data, loading: false, error: null });
            }
          } catch (error) {
            if (mounted) {
              setProps({
                data: [],
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
  
      return <WrappedComponent {...props} />;
    }
  
    return ClientFetchingComponent;
  }