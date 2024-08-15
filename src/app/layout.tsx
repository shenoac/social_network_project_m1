<<<<<<< Updated upstream
// src/app/layout.tsx
"use client";
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../src/app/store/index';
import StateViewer from '@/components/StateViewer'; // Import the StateViewer component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
=======
"use client"

import Link from 'next/link';
import { Provider } from 'react-redux';
import store from './store';

export default function RootLayout({ children }: { children: React.ReactNode }) {
>>>>>>> Stashed changes
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
          <StateViewer /> {/* Add the StateViewer component here */}
        </Provider>
      </body>
    </html>
  );
}
