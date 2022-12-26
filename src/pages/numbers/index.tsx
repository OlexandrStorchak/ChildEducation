import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NumberItem from '../../components/numbers/NumberItem';
import { numbers } from '../../constants';

const Numbers = () => {
  return (
    <>
      <Box>
        <Grid container justifyContent='center'>
          {numbers.map((number) => {
            return (
              <Grid
                key={number}
                item
                lg={3}
                xs={3}
                justifyContent='center'
                sx={{ display: 'flex', margin: '2rem' }}
              >
                <NumberItem number={number} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Numbers;
