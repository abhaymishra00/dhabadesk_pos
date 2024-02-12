import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Iconify from './iconify';
import { PATH_DASHBOARD } from 'src/routes/paths';
import { useNavigate } from 'react-router-dom';

export default function MenuDrawer({ open, onOpen, onClose }) {
  const navigate = useNavigate();
  const list = [
    {
      icon: 'ion:fast-food-outline',
      label: 'Orders',
      path: PATH_DASHBOARD.root,
    },
    {
      icon: 'ph:users-three-duotone',
      label: 'Customers',
      path: PATH_DASHBOARD.customers,
    },
    {
      icon: 'iconoir:reports-solid',
      label: 'Reports',
      path: PATH_DASHBOARD.reports,
    },
  ];

  return (
    <div>
      <SwipeableDrawer anchor="left" open={open} onClose={onClose} onOpen={onOpen}>
        {menuList()}
      </SwipeableDrawer>
    </div>
  );

  function menuList() {
    return (
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {list.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  onClose();
                  navigate(item.path);
                }}
              >
                <ListItemIcon>
                  <Iconify icon={item.icon} />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }
}
