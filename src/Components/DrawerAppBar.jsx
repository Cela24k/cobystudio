import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Main from './Main';

const drawerWidth = 240;
const navItems = ['Home', 'Services', 'Contacts', '3D Portfolio'];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [moved, setMoved] = React.useState(1);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleTabClick = (e) => {
    switch (e.target.tabIndex) {
      case 0:
        handleHomeButton();
        break;
      case 1:
        handleServicesButton();
        break;
      case 2:
        handleContactButton();
        break;
      case 3:
        handleContactButton();
        break;
      default:
        break;
    }
  };

  // lo so è orribile avere ste due funzioni che fanno la stessa cosa ma con il parametro diverso, se funzionasse il tabIndex sul drawer non ce ne sarebbe bisogno
  const handleDrawerTabClick = (e) => {
    const tabname = e.target.innerHTML;
    console.log(tabname);
  
    // Chiudi il drawer
    handleDrawerToggle();
  
    setTimeout(() => {
      switch (navItems.indexOf(tabname)) {
        case 0:
          handleHomeButton();
          break;
        case 1:
          handleServicesButton();
          break;
        case 2:
          handleContactButton();
          break;
        case 3:
          handleContactButton();
          break;
        default:
          console.log(tabname + "Non è un nome di tab valido");
      }
    }, 250); // Ritardo di 250 millisecondi (0.25 secondi) prima dello scorrimento, purtroppo sembra non esserci un modo per fare la subscribe all evento di scroll
  };

  const handleHomeButton = ()=>{
    document.querySelector('#my-model-logo').scrollIntoView({ behavior: 'smooth' });
  }

  const handleContactButton = () => {
    document.getElementById(6).scrollIntoView({ behavior: 'smooth' });
  }

  const handleServicesButton = () => {
    document.getElementById(2).scrollIntoView({ behavior: 'smooth' });
  }
  
  const drawer = (
    <Box sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src='./images/logo2.svg' alt='' width={'180px'} height={'60px'} style={{ marginRight: '24px', verticalAlign: 'bottom' }}></img>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,i) => (
          <ListItem key={i} tabIndex={i} disablePadding onClick={handleDrawerTabClick}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ bgcolor: "#fdfde6", color: 'black', boxShadow: 0, fontWeight: 'bolder' }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img onClick={handleHomeButton} src='./images/logo2.svg' alt='' width={'180px'} height={'60px'} style={{ marginRight: '24px', verticalAlign: 'bottom', cursor:'pointer' }}></img>
          <Typography
            variant="inherit"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {/*might be text here*/}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item,i) => (
              <Button key={i} tabIndex={i} onClick={handleTabClick} sx={{ color: 'inherit', textTransform: 'none', fontWeight: 'bolder' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Main />
      </Box>
    </Box>
  );
}
