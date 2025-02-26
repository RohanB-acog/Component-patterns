// app/exercise4/components/ProductList/ClientWrapper.tsx
'use client';
import { Product } from '../../types';
import { ListRenderer } from '../renderers/ListRenderer';
import { WithFetchingProps } from '../../types';
import { ProductItemRenderer } from '../renderers/ListItemRenderers';

export function ProductListWrapper(props: WithFetchingProps<Product>) {
  return (
    <ListRenderer<Product>
      {...props}
      title="Products"
      renderItem={ProductItemRenderer}
    />
  );
}