// src/app/layout.tsx
"use client";
import { Provider } from 'react-redux';
import store from '../../src/app/store/index';
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
        </Provider>
      </body>
    </html>
  );
}