import { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
  [x: string]: any;
}

// This component only renders its children in the browser and not on the server.
// To avoid issues, we need to ensure that the rehydrated app matches the original HTML,
// when Using Apollo Client for client-side data.
const ClientOnly: React.FC<ClientOnlyProps> = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
};
export default ClientOnly;
