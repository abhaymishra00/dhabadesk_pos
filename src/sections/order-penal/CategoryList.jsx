import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Iconify from 'src/components/iconify';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function CategoryList() {
  const theme = useTheme();
  return (
    <List
      sx={{
        // selected and (selected + hover) states
        '&& .Mui-selected, && .Mui-selected:hover': {
          bgcolor: '#fff',
          '&, & .MuiListItemIcon-root': {
            color: theme.palette.primary.main,
          },
        },
        // hover states
        '& .MuiListItemButton-root:hover': {
          bgcolor: '#fff',
          '&, & .MuiListItemIcon-root': {
            color: theme.palette.primary.main,
          },
        },
      }}
    >
      <ListItem disablePadding>
        <ListItemButton selected>
          <ListItemIcon>
            <Iconify icon="lets-icons:star-duotone" />
          </ListItemIcon>
          <ListItemText primary="Favourite" />
        </ListItemButton>
      </ListItem>

      {[...Array(15)].map((item, index) => {
        return (
          <ListItem disablePadding>
            <ListItemButton sx={{ color: '#fff' }} component="a" href="#simple-list">
              <ListItemText primary={`Category ${index + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
