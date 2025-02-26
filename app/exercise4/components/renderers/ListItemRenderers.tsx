// app/exercise4/components/renderers/ListItemRenderers.tsx
'use client';
import { User, Product } from '../../types';

export const UserItemRenderer = (user: User) => (
  <span>{user.name} - {user.email}</span>
);

export const ProductItemRenderer = (product: Product) => (
  <span>{product.name} - ${product.price}</span>
);