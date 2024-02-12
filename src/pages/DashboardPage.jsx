import {
  Stack,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useState } from 'react';
import OrderTable from 'src/sections/home/OrderTable';
export default function DashboardPage() {
  const [orderType, setOrderType] = useState('all');

  const handleChange = (event) => {
    setOrderType(event.target.value);
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
        <Box>
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ fontFamily: "'Fugaz One',sans-serif" }}
          >
            Order Penal
          </Typography>
          <Typography>Here is your orders list</Typography>
        </Box>
        <Stack>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Order Type</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={orderType}
              label="Order Type"
              onChange={handleChange}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="dine_in">Dine In</MenuItem>
              <MenuItem value="pick_up">Pick Up</MenuItem>
              <MenuItem value="delivery">Delivery</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <OrderTable />
    </Stack>
  );
}
