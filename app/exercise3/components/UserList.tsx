// app/exercise3/components/UserList.tsx
'use client';
import { UserDataFetcher } from '../data-fetchers/UserDataFetcher';
import { useDataFetcher } from '../hooks/useFetcher';
import { ListRenderer } from './renderers/ListRenderer';
import { LoadingRenderer } from './renderers/LoadingRenderer';
import { ErrorRenderer } from './renderers/ErrorRenderer';
import { User } from '../types';

export default function UserList() {
  const { data, loading, error } = useDataFetcher(UserDataFetcher); // Pass the class, not an instance

  if (loading) return <LoadingRenderer resource="users" />;
  if (error) return <ErrorRenderer error={error} />;
  if (!data) return null;

  return (
    <ListRenderer<User>
      title="Users"
      items={data}
      renderItem={(user) => (
        <span>
          {user.name} - <span className="text-gray-500">{user.email}</span>
        </span>
      )}
    />
  );
}