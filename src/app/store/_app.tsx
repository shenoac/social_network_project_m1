// src/app/store/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../../app/store/index';
<<<<<<< Updated upstream
import RootLayout from '../../app/layout';  
=======
 
>>>>>>> Stashed changes



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
