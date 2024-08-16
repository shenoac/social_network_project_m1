// src/app/store/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../../app/store/index';
import RootLayout from '../../app/layout';  
import 'bootstrap/dist/css/bootstrap.min.css';




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
