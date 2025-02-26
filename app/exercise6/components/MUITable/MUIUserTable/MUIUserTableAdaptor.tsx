// app/exercise5/components/MUITable/UserTable/MUIUserTableAdapter.tsx
'use client';
import React from 'react';
import { User, WithFetchingProps } from '../../../types';
import { MUITable } from '../MUITable';

// Define columns for the user table
const userColumns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
];

export function MUIUserTableAdapter({ data = [], loading, error }: WithFetchingProps<User>) {
  if (loading) return <div>Loading users table...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <MUITable<User>
      data={data}
      columns={userColumns}
      title="Users (Material UI)"
    />
  );
}