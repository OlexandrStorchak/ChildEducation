import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavLink from './NavLink';
import styles from './Navigation.module.css';
import { NUMBERS_PAGE, ROOT_PATH } from '../../constants';

const Navigation = () => {
  return (
    <>
      <Box className={styles.box}>
        <Grid container spacing={2}>
          <Grid item xs={2} sm={2} lg={1}>
          </Grid>
          <Grid item xs={8} sm={8} lg={10}>
            <Box>
              <NavLink lable={'Початкова'} link={ROOT_PATH} />
              <NavLink lable={'Цифри'} link={NUMBERS_PAGE} />
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} lg={1}>
            <Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Navigation;
