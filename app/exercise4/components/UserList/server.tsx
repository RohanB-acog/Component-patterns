// app/exercise4/components/UserList/server.tsx
import { User } from '../../types';
import { UserDataFetcher } from '../data-fetchers/UserDataFetcher';
import { withServerFetching } from '../../lib/hocs/withServerFetching';
import { UserListWrapper } from './ClientWrapper';

export const ServerUserList = withServerFetching(UserListWrapper, UserDataFetcher);

