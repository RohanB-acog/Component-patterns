// app/exercise2/components/UserList.tsx
'use client';
import { UserFetcher, User } from '../../lib/fetchers/UserFetcher';
import GenericList from './GenericList';

export default function Exercise2UserList() {
  return (
    <GenericList<User>
      fetcher={new UserFetcher()}
      title="Users"
      renderItem={(user) => (
        <>{user.name} - {user.email}</>
      )}
    />
  );
}