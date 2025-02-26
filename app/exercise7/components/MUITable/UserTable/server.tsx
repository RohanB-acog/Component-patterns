// app/exercise5/components/MUITable/UserTable/server.tsx
import { createServerComponent } from '../../../lib/hoc/createServerComponent';
import { MUIUserTableAdapter } from '../MUIUserTable/MUIUserTableAdaptor';
import { User, WithFetchingProps } from '../../../types';

// Create server-side version
function ServerUserTableComponent(props: WithFetchingProps<User>) {
  return <MUIUserTableAdapter {...props} />;
}

export const ServerMUIUserTable = createServerComponent<User>(ServerUserTableComponent, 'users');