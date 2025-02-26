// app/exercise5/lib/hocs/createServerComponent.tsx
import { ComponentType } from 'react';
import { BaseEntity, WithFetchingProps } from '../../types';
import { FetcherRegistry } from '../registry/FetcherRegistery';
import { initRegistry } from '../registry/initRegitry';

// Ensure registry is initialized on the server side
initRegistry();

export function createServerComponent<T extends BaseEntity>(
  WrappedComponent: ComponentType<WithFetchingProps<T>>,
  fetcherKey: string
) {
  async function ServerComponent() {
    const registry = FetcherRegistry.getInstance();
    const FetcherClass = registry.getFetcher<T>(fetcherKey);
    
    try {
      const fetcher = new FetcherClass();
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

  return ServerComponent;
}