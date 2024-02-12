import { Stack, Typography, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ItemView({ kot }) {
  return (
    <>
      {kot && (
        <Stack
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            px: 2,
            justifyContent: 'space-between',
            backgroundColor: '#D8D8D8',
          }}
        >
          <Typography variant="body2">KOT No: 123</Typography>
          <Typography variant="body2">KOT Time: 12/10/2023 12:24 AM</Typography>
        </Stack>
      )}

      {[...Array(10)].map((item, index) => {
        return (
          <Stack
            key={index}
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 1,
              paddingRight: 2,
              width: '100%',
            }}
          >
            <IconButton color="error" size="small">
              <CancelIcon color="error" />
            </IconButton>
            <Stack sx={{ flexGrow: 1, ml: 1 }}>
              <Typography variant="body2">Item (small)</Typography>
              <Typography variant="caption" display="block">
                $ 120
              </Typography>
            </Stack>
            <Stack
              sx={{ flexGrow: 0, width: '25%', mx: 1 }}
              flexDirection={'row'}
              alignItems={'center'}
              columnGap={1}
            >
              <IconButton color="success" size="small">
                <AddIcon fontSize="small" />
              </IconButton>
              <Typography>2</Typography>
              <IconButton color="error" size="small">
                <RemoveIcon fontSize="small" />
              </IconButton>
            </Stack>
            <Stack sx={{ flexGrow: 0 }} textAlign={'end'}>
              <Typography variant="body2">$ 240</Typography>
              <Typography variant="caption" display="block">
                $ 120
              </Typography>
            </Stack>
          </Stack>
        );
      })}
    </>
  );
}
