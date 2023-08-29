// my-nextjs-project/pages/redirect.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to another page
    router.push('/read-cookie');
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
};

export default RedirectPage;
