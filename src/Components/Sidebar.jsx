import React,{useState,useEffect} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
        // To check the width of screen
        const navigate = useNavigate();
        const [position, setPosition] = useState(window.innerWidth < 768 ? 'top' : 'left');

        const [menu, setMenu] = useState({top:false,left:false});
    
        // Add an event listener to update the position when the window is resized
      useEffect(() => {
        const handleResize = () => {
          setPosition(window.innerWidth < 768 ? 'top' : 'left');
        };
    
        window.addEventListener('resize', handleResize);
         // Remove the event listener when the component unmounts
         return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        const toggleDrawer = (anchor, open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
            setMenu({ ...menu, [anchor]: open });
        };
        const list = (anchor) => (
            <Box
              sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                {['Dashboard', 'List', 'Category', 'Subcategory', 'Supplier'].map((text, index) => (
                  <ListItem key={text} sx={true} disablePadding>
                    <ListItemButton onClick={()=>navigate(`/${text.toLocaleLowerCase()}`)}>
                      <ListItemIcon >
                       
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['Profile', 'Logout'].map((text, index) => (
                  <ListItem key={text} disablePadding >
                    <ListItemButton onClick={()=>navigate(`/${text.toLocaleLowerCase()}`)}>
                      <ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          );
        
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon onClick={toggleDrawer(position, true)}/>

    <Drawer
      anchor={position}
      open={menu[position]}
      onClose={toggleDrawer(position, false)}
    >
      {list(position)}
    </Drawer>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  

 
</div>
  )
}

export default Sidebar