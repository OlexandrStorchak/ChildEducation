import { Button, CircularProgress, Paper, Popover } from '@mui/material';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const UserMenu = () => {
  const { login, logout, user, profile, showSpiner } = useContext(AuthContext);
  const [open, setOpen] = useState<boolean>(false);
  const anchorEl = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <>
      {showSpiner ? (
        <div className='nav-user-menu'>
          <CircularProgress className='nav-user-menu-user-name' />
        </div>
      ) : (
        <>
          {user ? (
            <>
              {profile && (
                <div
                  className='nav-user-menu'
                  ref={anchorEl}
                  onClick={handleOpen}
                >
                  <span className='nav-user-menu-user-name'>
                    {profile.name}
                  </span>
                  <img src={profile.picture} alt='user image' />
                </div>
              )}
              <>
                <Popover
                  id='user-menu-popover'
                  open={open}
                  anchorEl={anchorEl.current}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <Paper className='nav-user-menu-button'>
                    <Button onClick={handleLogout}>Вийти</Button>
                  </Paper>
                </Popover>
              </>
            </>
          ) : (
            <div className='nav-user-menu-button'>
              <Button onClick={login}>Увійти</Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UserMenu;
