import NavStyles from './styles/NavStyles';
import Link from 'next/link';

const Nav = () => {
  return (
    <NavStyles>
      <Link href="/launches">Launches</Link>
      <Link href="/rockets">Rockets</Link>
      <Link href="/missions">Missions</Link>
      <Link href="/ships">Ships</Link>
    </NavStyles>
  );
};

export default Nav;
