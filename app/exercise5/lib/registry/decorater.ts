// // app/exercise5/lib/registry/decorators.ts
// import { BaseDataFetcher } from '../data-fetchers/BaseDataFetcher';
// import { BaseEntity } from '../../types';
// import { FetcherRegistry } from './FetcherRegistery';

// export function RegisterFetcher(key: string) {
//   return function <T extends new (...args: any[]) => BaseDataFetcher<BaseEntity>>(
//     constructor: T
//   ) {
//     const registry = FetcherRegistry.getInstance();
//     registry.register(key, constructor);
//     return constructor;
//   };
// }