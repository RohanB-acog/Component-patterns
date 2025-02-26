import { ComponentType } from 'react';
import { BaseDataFetcher } from '../../components/data-fetchers/BaseDataFetcher';
import { WithFetchingProps } from '../../types';

export function withServerFetching<T>(
  WrappedComponent: ComponentType<WithFetchingProps<T>>,
  DataFetcher: new (baseUrl?: string) => BaseDataFetcher<T>
) {
  async function ServerFetchingComponent() {
    try {
      // Pass base URL for server-side fetching
      const fetcher = new DataFetcher(process.env.NEXT_PUBLIC_API_URL);
      const data = await fetcher.fetchData();
      return <WrappedComponent data={data} loading={false} error={null} />;
    } catch (error) {
      return (
        <WrappedComponent 
          data={[]} 
          loading={false} 
          error={error instanceof Error ? error : new Error('Unknown error')} 
        />
      );
    }
  }

  return ServerFetchingComponent;
}