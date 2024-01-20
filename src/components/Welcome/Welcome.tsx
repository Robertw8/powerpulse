import { NavLink } from 'react-router-dom';

import {TitleWelcomePage, ContainerWelcomePage, BlockTitleBtn, BlockBtns, IconContainer, BtnSignInWelcome} from "./WelcomeStyle.styled";
import { BtnSignUp } from "../SignUp/SignUp.styled";

import { Icon } from "../Icon";
import {WelcomeImg} from './WelcomeImg';


const Welcome: React.FC = () => {
  return (
    <ContainerWelcomePage>
      <BlockTitleBtn>
        <TitleWelcomePage>Transforming your body shape with Power Pulse
           <IconContainer>
         <Icon
              name="line"
              iconWidth={{ mobile: '98px', tablet: '200px' }}
              iconHeight={{ mobile: '35px', tablet: '70px' }}
              />
          </IconContainer>
          </TitleWelcomePage>
        <BlockBtns>
             <NavLink to="/signup" >
           <BtnSignUp type="primary" >Sign Up</BtnSignUp>
            </NavLink>
             <NavLink to="/signin" >
                <BtnSignInWelcome ghost className="btn-sing-ui">Sign In</BtnSignInWelcome>
          </NavLink>
          </BlockBtns>
      </BlockTitleBtn>
      <WelcomeImg/>
      </ContainerWelcomePage>
  );
};

export default Welcome;