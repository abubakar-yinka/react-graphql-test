import { useQuery } from '@apollo/client';
import * as React from 'react';
import { SINGLE_USER_QUERY } from '../graphql/queries/user';

type ListDetailProps = {
  id: string;
};

const ListDetail = ({ id }: ListDetailProps) => {
  const { data, loading, error } = useQuery(SINGLE_USER_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error.message}</<p>;
  const user = data.users_by_pk;

  return (
    <div>
      <h1>Detail for {user.name}</h1>
      <p>ID: {user.id}</p>
      <p>Rocket: {user.rocket}</p>
      <p>Date Created: {new Date(user.timestamp).getDate()}</p>
      <p>Twitter: @{user.twitter ?? '___'}</p>
    </div>
  );
};

export default ListDetail;
