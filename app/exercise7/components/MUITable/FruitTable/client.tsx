// Step 6: Create client component for fruits table
// app/exercise5/components/MUITable/FruitTable/client.tsx
'use client';
import { createClientComponent } from '../../../lib/hoc/createClientComponent';
import { MUIFruitTableAdapter } from './MUIFruitTableAdapter';
import { Fruit } from '../../../types';

export const ClientMUIFruitTable = createClientComponent<Fruit>(MUIFruitTableAdapter, 'fruits');
