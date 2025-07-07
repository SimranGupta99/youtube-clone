// src/App.tsx

import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './pages/home';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Navbar onSearch={setSearchQuery} />
      <Box display="flex" flex="1">
        <Sidebar />
        <Home searchQuery={searchQuery} />
      </Box>
    </Box>
  );
};

export default App;
