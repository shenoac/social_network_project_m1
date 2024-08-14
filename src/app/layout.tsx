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
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
          <StateViewer /> {/* Add the StateViewer component here */}
        </Provider>
      </body>
    </html>
  );
}
