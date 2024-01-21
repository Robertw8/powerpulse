import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  TitleWelcomePage,
  ContainerWelcomePage,
  BlockTitleBtn,
  BlockBtns,
  IconContainer,
  BtnSignInWelcome,
} from './WelcomeStyle.styled';
import { BtnSignUp } from '../SignUp/SignUp.styled';

import { Icon } from '../Icon';
import { WelcomeImg } from './WelcomeImg';

import Loader from '../Loader/Loader';

// Statistics
import {
  getStatistics,
  selectStatistics,
  selectIsLoading,
  selectError,
} from '../../redux/statistics';

const Welcome: React.FC = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(selectStatistics);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  return (
    <ContainerWelcomePage>
      <BlockTitleBtn>
        <TitleWelcomePage>
          Transforming your body shape with Power Pulse
          <IconContainer>
            <Icon
              name="line"
              iconWidth={{ mobile: '98px', tablet: '200px' }}
              iconHeight={{ mobile: '35px', tablet: '70px' }}
            />
          </IconContainer>
        </TitleWelcomePage>
        <BlockBtns>
          <NavLink to="/signup">
            <BtnSignUp type="primary">Sign Up</BtnSignUp>
          </NavLink>
          <NavLink to="/signin">
            <BtnSignInWelcome ghost className="btn-sing-ui">
              Sign In
            </BtnSignInWelcome>
          </NavLink>
        </BlockBtns>
      </BlockTitleBtn>
      <WelcomeImg />
      {isLoading && !error && <Loader />}
    </ContainerWelcomePage>
  );
};

export default Welcome;
