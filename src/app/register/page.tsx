// App.tsx
"use client"

import React from 'react';
import { Provider } from 'react-redux';
import store from '../../app/store/index';
import RegisterUser from '@/components/RegisterUser';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Register a New User</h1>
        <RegisterUser />
      </div>
    </Provider>
  );
}

export default App;
