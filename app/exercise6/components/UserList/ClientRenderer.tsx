// app/exercise5/components/UserList/ClientRenderer.tsx
'use client';
import { User, WithFetchingProps } from '../../types';
import { ListRenderer } from '../renderers/ListRenderer';
import { UserItemRenderer } from '../renderers/ItemRenderers';

export function ClientUserListRenderer(props: WithFetchingProps<User>) {
  return (
    <ListRenderer<User>
      {...props}
      title="Users"
      renderItem={UserItemRenderer}
    />
  );
}