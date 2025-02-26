// app/exercise5/components/FruitList/server.tsx
import { Fruit, WithFetchingProps } from '../../types';
import { createServerComponent } from '../../lib/hoc/createServerComponent';
import { ClientFruitListRenderer } from './ClientRenderer';

function FruitListComponent(props: WithFetchingProps<Fruit>) {
  return <ClientFruitListRenderer {...props} />;
}

export const ServerFruitList = createServerComponent<Fruit>(FruitListComponent, 'fruits');

