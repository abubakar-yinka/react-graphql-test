import { gql } from 'graphql-tag';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    users_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;
