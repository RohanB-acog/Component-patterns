// app/exercise5/components/FruitList/client.tsx
'use client';
import { Fruit } from '../../types';
import { createClientComponent } from '../../lib/hoc/createClientComponent';
import { ClientFruitListRenderer } from './ClientRenderer';

export const ClientFruitList = createClientComponent<Fruit>(ClientFruitListRenderer, 'fruits');