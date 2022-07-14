import { FunctionComponent } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import { useApollo } from '../lib/apolloClient';
import '../components/styles/nprogress.css';

import 'normalize.css/normalize.css';
import Layout from '../components/Layout';

// Show progress bar when page is loading.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const TypedComponent = Component as FunctionComponent;
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout title="Home | Next.js + TypeScript + Graphql">
        <TypedComponent {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default App;
