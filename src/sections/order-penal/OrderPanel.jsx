import {
  Stack,
  ButtonGroup,
  Button,
  Box,
  Typography,
  Divider,
  TextField,
  Switch,
} from '@mui/material';
import { useRef, useState } from 'react';
import TableBarIcon from '@mui/icons-material/TableBar';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import ItemView from './ItemView';
import { useTheme } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function OrderPanel() {
  const theme = useTheme();
  const accountPanelHeightRef = useRef();

  const [orderType, setOrderType] = useState('dine_in');
  const [accountPanelHeight, setAccountPanelHeight] = useState(0);

  return (
    <Stack sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <Stack sx={{ flexGrow: 0 }}>
        <ButtonGroup
          sx={{ borderRadius: 0 }}
          fullWidth
          variant="contained"
          color="success"
          aria-label=""
        >
          <Button
            variant="contained"
            color={orderType === 'dine_in' ? 'error' : 'success'}
            sx={{ borderRadius: 0 }}
            onClick={() => setOrderType('dine_in')}
          >
            Dine In
          </Button>
          <Button
            color={orderType === 'pick_up' ? 'error' : 'success'}
            onClick={() => setOrderType('pick_up')}
          >
            Pick Up
          </Button>
          <Button
            color={orderType === 'delivery' ? 'error' : 'success'}
            onClick={() => setOrderType('delivery')}
            sx={{ borderRadius: 0 }}
          >
            Delivery
          </Button>
        </ButtonGroup>
        <Stack
          display="flex"
          flexDirection={'row'}
          sx={{
            borderBottom: '1px solid #D8D8D8',
          }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              width: '70px',
              height: '55px',
              paddingTop: 1,
            }}
          >
            <TableBarIcon fontSize="medium" />
            <Typography>4</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '70px',
              height: '55px',
              paddingTop: 1,
              cursor: 'pointer',
            }}
          >
            <PermIdentityTwoToneIcon fontSize="medium" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '70px',
              height: '55px',
              paddingTop: 1,
            }}
          >
            <TableBarIcon fontSize="medium" />
            <Typography>4</Typography>
          </Box>
        </Stack>
        <Stack sx={{ padding: 1 }} spacing={2}>
          <Stack spacing={1}>
            <Stack flexDirection={'row'} gap={1}>
              <TextField
                sx={{ flexGrow: 1 }}
                name="Customer Mobile"
                size="small"
                label="Customer Mobile"
              />
              <TextField sx={{ flexGrow: 1 }} name="Customer" size="small" label="Customer Name" />
            </Stack>
            {orderType === 'delivery' && (
              <>
                <TextField name="Address" size="small" label="Address" />
                <TextField name="Locality" size="small" label="Locality" />
              </>
            )}
          </Stack>
        </Stack>

        <Stack
          sx={{
            flexDirection: 'row',
            padding: '2px',
            paddingLeft: 4,
            paddingRight: 2,
            backgroundColor: theme.palette.primary.main,
            width: '100%',
            color: '#fff',
          }}
        >
          <Typography sx={{ flexGrow: 1 }}>Items</Typography>
          <Typography sx={{ flexGrow: 0, width: '25%' }}>Quantity</Typography>
          <Typography sx={{ flexGrow: 0 }}>Total</Typography>
        </Stack>
      </Stack>
      <Stack overflow={'scroll'} sx={{ maxHeight: '100%', height: '100%' }}>
        <ItemView kot={false} />
      </Stack>

      <Stack sx={{ flexGrow: 0 }}>
        <Stack
          sx={{
            position: 'relative',
            height: `${accountPanelHeight}px`,
            backgroundColor: '#D6D6D6',
          }}
        >
          <Button
            variant="contained"
            sx={{
              maxWidth: '100px',
              padding: 0,
              mx: 'auto',
              position: 'absolute',
              top: '-24px',
              left: '50%',
              transform: 'translate(-50%, 0)',
              zIndex: '0',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: '#C2C2C2',
            }}
            disableElevation
            onClick={() => setAccountPanelHeight((pre) => (pre > 0 ? 0 : 278))}
          >
            {accountPanelHeight == 0 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Button>

          <Stack overflow={'hidden'} ref={accountPanelHeightRef}>
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 1,
                px: 2,
                borderBottom: '1px solid #B3B3B3',
              }}
            >
              <Typography>Items</Typography>
              <Typography variant="h6">12</Typography>
            </Stack>
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 1,
                px: 2,
                borderBottom: '1px solid #B3B3B3',
              }}
            >
              <Typography>Sub Total</Typography>
              <Typography variant="h6">1289</Typography>
            </Stack>
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 1,
                px: 2,
                borderBottom: '1px solid #B3B3B3',
              }}
            >
              <Typography>
                Discount
                <Button sx={{ ml: 2 }} size="small" variant="contained" color="secondary">
                  apply
                </Button>
              </Typography>
              <Typography variant="h6">0</Typography>
            </Stack>
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 1,
                px: 2,
                borderBottom: '1px solid #B3B3B3',
              }}
            >
              <Typography>Container Charge</Typography>
              <input
                style={{
                  background: '#fff',
                  width: '100px',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  border: 'none',
                }}
              />
            </Stack>
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 1,
                px: 2,
                borderBottom: '1px solid #B3B3B3',
              }}
            >
              <Typography>Delivery Charge</Typography>
              <input
                style={{
                  background: '#fff',
                  width: '100px',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  border: 'none',
                }}
              />
            </Stack>

            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 1,
                px: 2,
                borderBottom: '1px solid #B3B3B3',
              }}
            >
              <Typography>
                GST <Switch />
              </Typography>
              <Typography variant="h6">0</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          backgroundColor="#C2C2C2"
          px={2}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <FormControl>
            <RadioGroup row>
              <FormControlLabel value="cash" control={<Radio size="small" />} label="Cash" />
              <FormControlLabel value="card" control={<Radio size="small" />} label="Card" />
              <FormControlLabel value="upi" control={<Radio size="small" />} label="UPI" />
              <FormControlLabel value="order" control={<Radio size="small" />} label="other" />
            </RadioGroup>
          </FormControl>
          <Typography>
            Total: <b>569</b>
          </Typography>
        </Stack>

        <Stack sx={{ backgroundColor: '#F0F0F0' }}>
          <Stack flexDirection={'row'} flexWrap={'wrap'} p={2} gap={1}>
            <Button variant="contained" color="primary" size="small">
              Save
            </Button>
            <Button variant="contained" color="primary" size="small">
              Save & Print
            </Button>

            <Button variant="contained" color="warning" size="small">
              KOT
            </Button>
            <Button variant="contained" color="warning" size="small">
              KOT & Print
            </Button>
            <Button variant="contained" color="info" size="small">
              Hold
            </Button>
            <Button variant="contained" color="error" size="small">
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
