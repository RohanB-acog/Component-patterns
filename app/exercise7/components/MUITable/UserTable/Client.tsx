// app/exercise5/components/MUITable/UserTable/client.tsx
'use client';
import { createClientComponent } from '../../../lib/hoc/createClientComponent';
import { MUIUserTableAdapter } from '../MUIUserTable/MUIUserTableAdaptor';
import { User } from '../../../types';

// Create client-side version
export const ClientMUIUserTable = createClientComponent<User>(MUIUserTableAdapter, 'users');