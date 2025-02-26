// app/exercise4/components/UserList/ClientWrapper.tsx
'use client';
import { User } from '../../types';
import { ListRenderer } from '../renderers/ListRenderer';
import { WithFetchingProps } from '../../types';
import { UserItemRenderer } from '../renderers/ListItemRenderers';

export function UserListWrapper(props: WithFetchingProps<User>) {
  return (
    <ListRenderer<User>
      {...props}
      title="Users"
      renderItem={UserItemRenderer}
    />
  );
}