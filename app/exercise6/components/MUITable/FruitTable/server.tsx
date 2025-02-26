//app/exercise5/components/MUITable/FruitTable/server.tsx
import { createServerComponent } from '../../../lib/hoc/createServerComponent';
import { MUIFruitTableAdapter } from './MUIFruitTableAdapter';
import { Fruit, WithFetchingProps } from '../../../types';

function ServerFruitTableComponent(props: WithFetchingProps<Fruit>) {
  return <MUIFruitTableAdapter {...props} />;
}

export const ServerMUIFruitTable = createServerComponent<Fruit>(ServerFruitTableComponent, 'fruits');
