'use client';
import { ProductFetcher, Product } from '../../lib/fetchers/ProductFetcher';
import GenericList from './GenericList';

export default function Exercise2ProductList() {
  return (
    <GenericList<Product>
      fetcher={new ProductFetcher()}
      title="Products"
      renderItem={(product) => (
        <>{product.name} - ${product.price}</>
      )}
    />
  );
}