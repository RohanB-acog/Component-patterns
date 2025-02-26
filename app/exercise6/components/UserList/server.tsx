// app/exercise5/components/UserList/server.tsx
import { User, WithFetchingProps } from '../../types';
import { createServerComponent } from '../../lib/hoc/createServerComponent';
import { ClientUserListRenderer } from './ClientRenderer';

function UserListComponent(props: WithFetchingProps<User>) {
  return <ClientUserListRenderer {...props} />;
}

export const ServerUserList = createServerComponent<User>(UserListComponent, 'users');