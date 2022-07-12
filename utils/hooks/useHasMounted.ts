import { useEffect, useState } from 'react';

// Custom hook for client side rendering to know when the component has mounted
// when Using Apollo Client for client-side data.
// To make sure we only request data from the browser, we have to ensure that the components using hooks are only rendered on the client
export function useHasMounted(): Boolean {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}
