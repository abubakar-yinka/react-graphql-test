import * as React from 'react';
import ListItem from './ListItem';
import { User } from '../interfaces';
import styled from 'styled-components';
import DateCard from './DateCard';

interface UserResponse {
  users: User[];
}

type Props = {
  data: UserResponse;
  loading: boolean;
  error: any;
};

const ListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

const Wrapper = styled.div`
  display: block;
`;

const List = ({ data, loading, error }: Props) => {
  const getDay = (date: string) => date.substr(8, 2);
  const getMonth = (date: string) => Number(date.substr(5, 2)) - 1;
  const getYear = (date: string) => date.substr(0, 4);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ListStyles>
      {data.users.map((item) => (
        <Wrapper key={item.id}>
          <DateCard
            day={getDay(item.timestamp)}
            month={getMonth(item.timestamp)}
            year={getYear(item.timestamp)}
          />
          <ListItem data={item} />
        </Wrapper>
      ))}
    </ListStyles>
  );
};

export default List;
