import { Product } from "../../types";
import { BaseDataFetcher } from "./BaseDataFetcher";

// app/exercise5/lib/data-fetchers/ProductDataFetcher.ts
export class ProductDataFetcher extends BaseDataFetcher<Product> {
  protected getEndpoint(): string {
    return '/api/products';
  }

  protected transformData(data: unknown): Product[] {
    if (!data || typeof data !== 'object' || !('products' in data)) {
      throw new Error('Invalid data format');
    }
    return (data as { products: Product[] }).products;
  }
}