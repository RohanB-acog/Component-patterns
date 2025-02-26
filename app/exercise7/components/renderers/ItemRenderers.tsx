// app/exercise5/components/renderers/ItemRenderers.tsx
'use client';
import { User, Product } from '../../types';

export function UserItemRenderer(user: User) {
  return (
    <span>{user.name} - {user.email}</span>
  );
}

export function ProductItemRenderer(product: Product) {
  return (
    <span>{product.name} - ${product.price}</span>
  );
}