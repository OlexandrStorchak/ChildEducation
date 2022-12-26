import type { AppProps } from 'next/app';
import Navigation from '../components/navigation';
import Head from 'next/head';
import { AuthProvider } from '../context/AuthContext';
import '../styles/style.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Head>
          <title>Child Education</title>
          <meta name='description' content='App' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <nav>
          <Navigation />
        </nav>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
