"use client"
// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../app/store/index';
import Login from '@/components/Login';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Login</h1>
        <Login />
      </div>
    </Provider>
  );
}

export default App;
