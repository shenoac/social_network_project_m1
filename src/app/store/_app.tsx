// src/app/store/_app.tsx
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../../app/store/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
