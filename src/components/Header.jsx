import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuDrawer from './MenuDrawer';
import { Button, Stack } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { PATH_DASHBOARD } from 'src/routes/paths';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [menuOpenState, setMenuOpenState] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setMenuOpenState((pre) => !pre)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="a"
            href={PATH_DASHBOARD.root}
            sx={{ fontFamily: "'Fugaz One',sans-serif", textDecoration: 'none', color: '#fff' }}
          >
            DhabaDesk POS
          </Typography>

          <Stack sx={{ flexGrow: 1, marginLeft: 2 }}>
            <Button
              component="a"
              href={PATH_DASHBOARD.order}
              variant="contained"
              color="warning"
              sx={{ width: '120px' }}
            >
              New Order
            </Button>
          </Stack>

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ fontSize: 35 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <MenuDrawer
        open={menuOpenState}
        onClose={() => setMenuOpenState(false)}
        onOpen={() => console.log('hello menu drawer open')}
      />
    </>
  );
}
