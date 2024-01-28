import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { DrawerStyled, Appeal } from '../MobileMenu/MobileMenu.styled';
import { NavMenu, NavLinkStyled, CloseBtn, Logout } from './MobileMenu.styled';
import Icon from '../../Icon/Icon';

import { logOutUser } from '../../../redux/auth/operations';
import { selectUser } from '../../../redux/auth/selectors';
import { AppDispatch } from '../../../redux';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);
  const [drawerWidth, setDrawerWidth] = useState('200px');

  useEffect(() => {
    const updateDrawerWidth = () => {
      const isTablet = window.matchMedia('(min-width: 768px)').matches;
      setDrawerWidth(isTablet ? '350px' : '200px');
    };

    updateDrawerWidth();
    window.addEventListener('resize', updateDrawerWidth);

    return () => {
      window.removeEventListener('resize', updateDrawerWidth);
    };
  }, []);

  if (!user) {
    return null;
  }

  const areSomeSettingsPresent = Object.values(user.settings || {}).some(
    setting => setting
  );

  const handleLogOut = (): void => {
    toggleMenu();
    dispatch(logOutUser({}));
  };

  return (
    <>
      <DrawerStyled
        placement="right"
        onClose={toggleMenu}
        open={isOpen}
        width={drawerWidth}
      >
        <CloseBtn onClick={toggleMenu}>
          <Icon
            name="x"
            iconWidth={{ mobile: '24px', tablet: '32px' }}
            iconHeight={{ mobile: '24px', tablet: '32px' }}
            stroke="#ffffff"
          />
        </CloseBtn>
        {areSomeSettingsPresent ? (
          <NavMenu>
            <NavLinkStyled to="/diary" onClick={toggleMenu}>
              Diary
            </NavLinkStyled>
            <NavLinkStyled to="/products" onClick={toggleMenu}>
              Products
            </NavLinkStyled>
            <NavLinkStyled to="/exercises" onClick={toggleMenu}>
              Exercises
            </NavLinkStyled>
          </NavMenu>
        ) : (
          <Appeal>
            Dear {user.name}, please complete your profile settings to continue
            enjoying our app.
            <p>We appreciate your choice to use our application!</p>
          </Appeal>
        )}
        <Logout type="button" onClick={handleLogOut}>
          <span>Logout</span>
          <Icon
            name="logout"
            iconWidth={{ mobile: '20px', tablet: '20px' }}
            iconHeight={{ mobile: '20px', tablet: '20px' }}
            stroke="#fff"
          />
        </Logout>
      </DrawerStyled>
    </>
  );
};

export default MobileMenu;
