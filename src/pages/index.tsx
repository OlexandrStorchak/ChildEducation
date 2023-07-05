import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Home({ token }: any) {
  return (
    <Box className='index-box-title'>
      <Typography variant='h1' color='whitesmoke'>
        Початкова сторінка
      </Typography>
      <Typography variant='h1' color='whitesmoke'>
        {token}
      </Typography>
    </Box>
  );
}
