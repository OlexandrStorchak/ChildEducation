import type { AppProps } from 'next/app';
import Navigation from '../components/navigation';
import Head from 'next/head';
import { AuthProvider } from '../context/AuthContext';
import '../styles/style.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getMessaging, getToken, firebaseApp } from '../utils/firebase';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {

  const [data, setData] = useState('null data')

  useEffect(() => {
    console.log('useEffect in app')
    window.addEventListener('offline', offline, { passive: true })
    window.addEventListener('online', online, { passive: true })
    registerServiceWorker()
  }, [data]);

  const registerServiceWorker = () => {
    const messaging = getMessaging(firebaseApp)

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            getToken(messaging, { serviceWorkerRegistration: registration }).then((token) => {
              console.log('token -', token)
              localStorage.setItem('fcm_token', token)
              localStorage.setItem('device', navigator.userAgent)
              setData(token)
              console.log('token - ', token)
            })
          } else {
            console.log('Unable to get permission to notify.')
          }
        })

      }).catch(error => {

      });
    }
  }

  const offline = () => {
    Router.push('/offline.html')
  }

  const online = () => {
    Router.push('/')
  }

  return (
    <>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID!}>
        <AuthProvider>
          <Head>
            <title>Child Education</title>
            <meta name='referrer' content='no-referrer-when-downgrade' />
            <meta name='description' content='App' />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />

            <link rel='icon' href='/favicon.ico' />
          </Head>
          <nav>
            <Navigation />
          </nav>
          <Button onClick={() => navigator.clipboard.writeText(data)}>
            {data}
          </Button>
          <Component {...pageProps} />
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  );
}
