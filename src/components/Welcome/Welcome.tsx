import { useNavigate } from 'react-router-dom';

import {
  TitleWelcomePage,
  ContainerWelcomePage,
  BlockTitleBtn,
  BlockBtns,
  IconContainer,
  BtnSignInWelcome,
} from './Welcome.styled';
import { BtnSignUp } from '../SignUp/SignUp.styled';
import { Icon } from '../Icon';
import { WelcomeImg } from './WelcomeImg';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

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
          <BtnSignUp type="primary" onClick={() => navigate('/signup')}>
            Sign Up
          </BtnSignUp>

          <BtnSignInWelcome ghost onClick={() => navigate('/signin')}>
            Sign In
          </BtnSignInWelcome>
        </BlockBtns>
      </BlockTitleBtn>
      <WelcomeImg />
    </ContainerWelcomePage>
  );
};

export default Welcome;
