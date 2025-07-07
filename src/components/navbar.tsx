import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Paper,
  Box,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) onSearch(searchTerm.trim());
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          YouTube
        </Typography>

        {/* Search Bar */}
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '2px 8px',
            width: 500,
            borderRadius: 25,
            backgroundColor: '#f1f1f1',
          }}
        >
          <InputBase
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            sx={{ flex: 1, ml: 1 }}
          />
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Paper>

        {/* Right icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
