import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavLink from './NavLink';
import { NUMBERS_PAGE, ROOT_PATH } from '../../constants';
import UserMenu from '../userMenu';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Box className='navigation-box'>
        <Grid container spacing={2}>
          <Grid item xs={2} sm={2} lg={1}></Grid>
          <Grid item xs={8} sm={8} lg={10}>
            <Box>
              <NavLink lable={'Початкова'} link={ROOT_PATH} />
              {user && <NavLink lable={'Цифри'} link={NUMBERS_PAGE} />}
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} lg={1}>
            <Box height={30}>
              <UserMenu />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Navigation;
