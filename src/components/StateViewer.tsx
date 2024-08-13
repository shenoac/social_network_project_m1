// src/components/StateViewer.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../src/app/store/index'; // Adjust the path to your store

const StateViewer: React.FC = () => {
  const userState = useSelector((state: RootState) => state.user);

  return (
    <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ccc' }}>
      <h3>Current User State:</h3>
      <pre>{JSON.stringify(userState, null, 2)}</pre>
    </div>
  );
};

export default StateViewer;
