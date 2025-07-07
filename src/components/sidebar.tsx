import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: '100vh',
        borderRight: '1px solid #ddd',
        backgroundColor: '#fff',
        pt: 2,
      }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <WhatshotIcon />
          </ListItemIcon>
          <ListItemText primary="Trending" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SubscriptionsIcon />
          </ListItemIcon>
          <ListItemText primary="Subscriptions" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
