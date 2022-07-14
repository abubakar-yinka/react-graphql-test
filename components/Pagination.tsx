import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { LIMIT } from '../utils/helper';
import { PAGINATION_QUERY } from '../graphql/queries/pagination';

interface PaginationProps {
  page: number;
}

export default function Pagination({ page }: PaginationProps) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const { count } = data.users_aggregate.aggregate;
  const pageCount = Math.ceil(count / LIMIT);
  return (
    <PaginationStyles>
      <Head>
        <title>
          SpaceX - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/users/${page - 1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/users/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next →</a>
      </Link>
    </PaginationStyles>
  );
}
