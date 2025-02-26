// // app/exercise5/lib/registry/registerFetchers.ts
// import { FetcherRegistry } from './FetcherRegistery';
// import { UserDataFetcher } from '../data-fetchers/UserDataFetcher';
// import { ProductDataFetcher } from '../data-fetchers/ProductDataFetcher';

// let isRegistered = false;

// export function registerFetchers(): void {
//   if (isRegistered) return;
  
//   const registry = FetcherRegistry.getInstance();
//   registry.register('users', UserDataFetcher);
//   registry.register('products', ProductDataFetcher);
  
//   isRegistered = true;
// }