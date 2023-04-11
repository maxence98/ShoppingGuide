import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
    return (
      <AppBar position="static" elevation="0">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Box>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default NavBar;