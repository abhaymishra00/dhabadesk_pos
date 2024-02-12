import {
  Stack,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import CategoryList from '../sections/order-penal/CategoryList';
import OrderPanel from '../sections/order-penal/OrderPanel';
import { useTheme } from '@mui/material/styles';
import Iconify from 'src/components/iconify';

export default function OrderPenalPage() {
  const theme = useTheme();

  return (
    <Stack sx={{ height: 'calc(100vh - 60px)' }} direction={'row'}>
      <Stack
        sx={{
          width: '200px',
          background: theme.palette.primary.main,
          height: '100%',
          overflow: 'scroll',
          paddingRight: 1,
        }}
      >
        <CategoryList />
      </Stack>
      <Stack sx={{ width: 'calc(100vw - calc(200px + 520px))', height: '100%', padding: 2 }}>
        <TextField
          id="search"
          label="Search Item"
          value=""
          // onChange={}
          size="small"
          sx={{ marginBottom: 2 }}
        />

        <Stack
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            margin: '0 auto',
            gap: 2,
            overflow: 'scroll',
            paddingBottom: 2,
          }}
        >
          {[...Array(20)].map((item, index) => {
            return (
              <Paper
                elevation={4}
                sx={{
                  width: '160px',
                  height: '80px',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                  border: `1px solid #fff`,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                  },
                  position: 'relative',
                }}
              >
                <Stack
                  sx={{
                    position: 'absolute',
                    top: '4px',
                    left: '4px',
                    color: 'green',
                  }}
                >
                  <Iconify icon="mdi:lacto-vegetarian" />
                </Stack>
                Item {index + 1}
              </Paper>
            );
          })}
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: '520px',
          background: '#FAFAFA',
          height: '100%',
        }}
      >
        <OrderPanel />
      </Stack>
    </Stack>
  );
}
