import Head from 'next/head';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;