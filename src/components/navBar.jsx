import { AppBar, Toolbar, IconButton, Box, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';

const NavBar = () => {
    return (
      <AppBar position="static" elevation="0">
        <Container maxWidth="lg">
          <Toolbar>
            <box width="40px" height="40px">
              <img 
                src="../milk.png" 
                alt="Logo"
                width="40px" 
                height="40px" 
              />
            </box>
            {/* <Typography
              variant="h6" component="div" sx={{ flexGrow: 1 }}
            >
              Shopping Guide
            </Typography> */}
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <HelpIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
  export default NavBar;