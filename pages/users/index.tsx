import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import List from '../../components/List';
import Pagination from '../../components/Pagination';
import { TextInput } from '../../components/SearchBox';
import { ALL_USERS_QUERY } from '../../graphql/queries/user';
import { LIMIT } from '../../utils/helper';

const UsersPage = () => {
  const { query } = useRouter();
  const page = parseInt(query.page as string) || 1;
  const { data, error, loading } = useQuery(ALL_USERS_QUERY, {
    variables: {
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
    },
  });

  return (
    <Wrapper>
      <TextInput placeholder="Search..." />
      <h1>Space X Users 🚀 + Date of account creation</h1>
      <Pagination page={page} />
      <List loading={loading} error={error} data={data} />
      <Pagination page={page} />
    </Wrapper>
  );
};

export default UsersPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
