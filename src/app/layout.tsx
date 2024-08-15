"use client"

import Link from 'next/link';
import { Provider } from 'react-redux';
import store from './store';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
          <nav>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
            <Link href="/profile">Profile</Link>
          </nav>
          {children}
        
        </Provider>
      </body>
    </html>
  );
}
