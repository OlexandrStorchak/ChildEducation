import NavLink from './NavLink';
import { NUMBERS_PAGE, ROOT_PATH } from '../../constants';
import UserMenu from '../userMenu';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <NavLink lable={'Початкова'} link={ROOT_PATH} />
      <NavLink lable={'Цифри'} link={NUMBERS_PAGE} />
      <div className='user-menu'>
        <UserMenu />
      </div>
    </>
  );
};
export default Navigation;
