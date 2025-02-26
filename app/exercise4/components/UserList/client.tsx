// app/exercise4/components/UserList/client.tsx
'use client';
import { User } from '../../types';
import { UserDataFetcher } from '../data-fetchers/UserDataFetcher';
import { withClientFetching } from '../../lib/hocs/withClientFetching';
import { UserListWrapper } from './ClientWrapper';

export const ClientUserList = withClientFetching(UserListWrapper, UserDataFetcher);