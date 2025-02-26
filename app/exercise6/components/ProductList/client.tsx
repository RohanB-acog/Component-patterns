
// app/exercise5/components/ProductList/client.tsx
'use client';
import { Product, WithFetchingProps } from '../../types';
import { createClientComponent } from '../../lib/hoc/createClientComponent';
import { ClientProductListRenderer } from './ClientRenderer';

export const ClientProductList = createClientComponent<Product>(ClientProductListRenderer, 'products');
