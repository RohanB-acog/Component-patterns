// app/exercise5/lib/data-fetchers/ProductDataFetcher.ts
import { Product } from "../../types";
import { BaseDataFetcher } from "./BaseDataFetcher";

export class ProductDataFetcher extends BaseDataFetcher<Product> {
  constructor() {
    super('products');
  }

  protected transformData(data: unknown): Product[] {
    if (!data || typeof data !== 'object' || !('products' in data)) {
      throw new Error('Invalid data format');
    }
    return (data as { products: Product[] }).products;
  }
}