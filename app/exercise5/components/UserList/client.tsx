// app/exercise5/components/UserList/client.tsx
'use client';
import { User, WithFetchingProps } from '../../types';
import { createClientComponent } from '../../lib/hoc/createClientComponent';
import { ClientUserListRenderer } from './ClientRenderer';

export const ClientUserList = createClientComponent<User>(ClientUserListRenderer, 'users');