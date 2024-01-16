import { NavList, LinkStyled } from './UserNav.styled';
// import { useDispatch } from 'react-redux';

// import { useState } from 'react';

export const UserNav: React.FC = () => {
  //   const dispatch = useDispatch();
  //   const [isActivePage, setIsActivePage] = useState<string>('diary');
  return (
    <NavList>
      <li>
        <LinkStyled to="/diary">Diary</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/products">Products</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/exercises">Exercises</LinkStyled>
      </li>
    </NavList>
  );
};
