import { useRouter } from 'next/router';
import UserDetails from '../../components/ListDetail';

export default function UserDetailsPage() {
  const { query } = useRouter();
  return <UserDetails id={query.id as string} />;
}
