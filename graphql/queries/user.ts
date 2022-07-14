import gql from 'graphql-tag';

export const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY($limit: Int = 30, $offset: Int = 0) {
    users(limit: $limit, offset: $offset) {
      id
      name
      rocket
      timestamp
      twitter
    }
  }
`;
export const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      rocket
      timestamp
      twitter
    }
  }
`;
