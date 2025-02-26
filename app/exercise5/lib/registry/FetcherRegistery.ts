import { BaseEntity } from "../../types";
import { BaseDataFetcher } from "../data-fetchers/BaseDataFetcher";

// app/exercise5/lib/registry/FetcherRegistry.ts
export class FetcherRegistry {
  private static instance: FetcherRegistry;
  private fetchers: Map<string, new () => BaseDataFetcher<any>>;

  private constructor() {
    this.fetchers = new Map();
  }

  static getInstance(): FetcherRegistry {
    if (!FetcherRegistry.instance) {
      FetcherRegistry.instance = new FetcherRegistry();
    }
    return FetcherRegistry.instance;
  }

  register<T extends BaseEntity>(
    key: string,
    FetcherClass: new () => BaseDataFetcher<T>
  ): void {
    if (this.fetchers.has(key)) {
      console.warn(`Fetcher with key '${key}' already registered`);
      return;
    }
    this.fetchers.set(key, FetcherClass);
  }

  getFetcher<T extends BaseEntity>(key: string): new () => BaseDataFetcher<T> {
    const FetcherClass = this.fetchers.get(key);
    if (!FetcherClass) {
      console.error('Available fetchers:', Array.from(this.fetchers.keys()));
      throw new Error(`No fetcher registered for key '${key}'`);
    }
    return FetcherClass as new () => BaseDataFetcher<T>;
  }
}