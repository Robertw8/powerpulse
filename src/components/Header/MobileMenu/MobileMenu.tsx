// import { useState, useEffect, FC } from 'react';
// import { useDispatch } from 'react-redux';
// // import { logOut } from '../operation';
// import {
//   MenuWrapper,
//   Overlay,
//   CloseButton,
//   Logout,
//   NavMenu,
//   NavMenuLink,
// } from './MobileMenu.styled';
// import Icon from '../../Icon/Icon';

// interface MobileMenuProps {
//   isOpen: boolean;
// }

// const MobileMenu: FC<MobileMenuProps> = ({ isOpen }) => {
//   const [menuIsOpen, setMenuIsOpen] = useState(isOpen);
//   const dispatch = useDispatch();

//   const closeMenu = () => {
//     setMenuIsOpen(false);
//   };

//   const handleEscKey = (event: KeyboardEvent) => {
//     if (event.key === 'Escape') {
//       closeMenu();
//     }
//   };

//   const handleBackdropClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     if (event.target === event.currentTarget) {
//       closeMenu();
//     }
//   };

//   useEffect(() => {
//     if (menuIsOpen) {
//       window.addEventListener('keydown', handleEscKey);
//     }

//   //   return () => {
//   //     window.removeEventListener('keydown', handleEscKey);
//   //   };
//   // }, [menuIsOpen]);

//   useEffect(() => {
//     setMenuIsOpen(isOpen);
//   }, [isOpen]);

//   const handleLogOut = () => {
//     closeMenu();
//     // dispatch(logOut());
//   };

//   return (
//     <>
//       {menuIsOpen && <Overlay onClick={closeMenu}></Overlay>}
//       <MenuWrapper
//         className={menuIsOpen ? 'shown' : 'hidden'}
//         onClick={handleBackdropClick}
//       >
//         <CloseButton onClick={closeMenu}>
//           <Icon
//             name="x"
//             iconWidth={{ mobile: '24px', tablet: '32px' }}
//             iconHeight={{ mobile: '24px', tablet: '32px' }}
//             stroke="#ffffff"
//           />
//         </CloseButton>
//         <NavMenu>
//           <NavMenuLink to="/diary" onClick={closeMenu}>
//             Diary
//           </NavMenuLink>
//           <NavMenuLink to="/products" onClick={closeMenu}>
//             Products
//           </NavMenuLink>
//           <NavMenuLink to="/exercises" onClick={closeMenu}>
//             Exercises
//           </NavMenuLink>
//         </NavMenu>
//         <Logout type="button" onClick={handleLogOut}>
//           <span>Logout</span>
//           <Icon
//             name="logout"
//             iconWidth={{ mobile: '20px', tablet: '20px' }}
//             iconHeight={{ mobile: '20px', tablet: '20px' }}
//             stroke="#fff"
//           />
//         </Logout>
//       </MenuWrapper>
//     </>
//   );
// };

// export default MobileMenu;
