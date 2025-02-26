// app/lib/fetchers/ProductFetcher.ts
import { BaseFetcher } from '../BaseFetcher';

export interface Product {
  id: number;
  name: string;
  price: number;
}

export class ProductFetcher extends BaseFetcher<Product[]> {
  constructor() {
    super('/api/products');
  }

  protected transformData(data: any): Product[] {
    return data.products;
  }
}