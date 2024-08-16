"use client"

import Link from 'next/link';
import { Provider } from 'react-redux';
import store from './store';
import StateViewer from '@/components/StateViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript bundle
import '@/app/globals.css';  // Adjust the path as necessary

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand text-dark" href="#">TheSocialNetwork</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/profile">Profile</Link>
                </li>
              </ul>

            </div>
          </nav>
          
          {children}

        </Provider>
      </body>
    </html>
  );
}
