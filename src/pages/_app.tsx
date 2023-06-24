import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Layout from '@/compnents/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isLoginPage =
    router.pathname === '/login' || router.pathname === '/register';

  return (
    <Layout isLoginPage={isLoginPage}>
      <Component {...pageProps} />
    </Layout>
  );
}
