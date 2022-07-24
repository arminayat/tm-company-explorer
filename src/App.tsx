import React from 'react';
import 'antd/dist/antd.css';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './services/queryClient';
import Routes from './routes/Routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
