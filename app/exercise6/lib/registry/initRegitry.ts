// Step 3: Register the fetcher in the registry
// Update app/exercise5/lib/registry/initRegistry.ts
import { FetcherRegistry } from './FetcherRegistery';
import { UserDataFetcher } from '../data-fetchers/UserDataFetcher';
import { ProductDataFetcher } from '../data-fetchers/ProductDataFetcher';
import { FruitDataFetcher } from '../data-fetchers/FruitDataFetcher';

let initialized = false;

export function initRegistry() {
  if (initialized) return;

  const registry = FetcherRegistry.getInstance();
  
  // Register all fetchers
  registry.register('users', UserDataFetcher);
  registry.register('products', ProductDataFetcher);
  registry.register('fruits', FruitDataFetcher);  // Added fruit fetcher
  
  initialized = true;
}
