import { gql } from 'graphql-tag';

export const SEARCH_USERS_QUERY = gql`
  query SEARCH_USERS_QUERY($searchTerm: String!) {
    queriedUsers: users(
      where: { name: { _ilike: $searchTerm } }
    ) {
      id
      name
      rocket
      timestamp
      twitter
    }
  }
`;
