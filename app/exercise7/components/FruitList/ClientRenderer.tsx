// app/exercise5/components/FruitList/ClientRenderer.tsx
'use client';
import { Fruit, WithFetchingProps } from '../../types';
import { ListRenderer } from '../renderers/ListRenderer';

// Create a fruit item renderer
export function FruitItemRenderer(fruit: Fruit) {
  return (
    <span>{fruit.name} - Rich in {fruit.richIn}</span>
  );
}

export function ClientFruitListRenderer(props: WithFetchingProps<Fruit>) {
  return (
    <ListRenderer<Fruit>
      {...props}
      title="Fruits"
      renderItem={FruitItemRenderer}
    />
  );
}
