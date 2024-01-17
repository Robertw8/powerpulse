import { useState, useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../../redux/auth/operations';

import {
  MenuWrap,
  Backdrop,
  CloseBtn,
  Logout,
  NavMenu,
  NavLinkStyled,
} from './MobileMenu.styled';
import Icon from '../../Icon/Icon';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpen);
  // const dispatch = useDispatch();

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (menuIsOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [menuIsOpen]);

  useEffect(() => {
    setMenuIsOpen(isOpen);
  }, [isOpen]);

  const dispatch = useDispatch();

  const handleLogOut = (): void => {
    closeMenu();
    dispatch(logOutUser());
  };

  return (
    <>
      {menuIsOpen && <Backdrop onClick={closeMenu} />}
      <MenuWrap
        className={menuIsOpen ? 'shown' : 'hidden'}
        onClick={handleBackdropClick}
      >
        <CloseBtn onClick={closeMenu}>
          <Icon
            name="x"
            iconWidth={{ mobile: '24px', tablet: '32px' }}
            iconHeight={{ mobile: '24px', tablet: '32px' }}
            stroke="#ffffff"
          />
        </CloseBtn>
        <NavMenu>
          <NavLinkStyled to="/diary" onClick={closeMenu}>
            Diary
          </NavLinkStyled>
          <NavLinkStyled to="/products" onClick={closeMenu}>
            Products
          </NavLinkStyled>
          <NavLinkStyled to="/exercises" onClick={closeMenu}>
            Exercises
          </NavLinkStyled>
        </NavMenu>
        <Logout type="button" onClick={handleLogOut}>
          <span>Logout</span>
          <Icon
            name="logout"
            iconWidth={{ mobile: '20px', tablet: '20px' }}
            iconHeight={{ mobile: '20px', tablet: '20px' }}
            stroke="#fff"
          />
        </Logout>
      </MenuWrap>
    </>
  );
};

export default MobileMenu;
