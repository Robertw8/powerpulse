

import imgForWelcomePage from "..//../assets/images/ImgForWelcomePage/imgForWelcomePage.jpg";
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import {TitleWelcomePage, ContainerWelcomePage, ImgWelcomePage, BlockTitleBtn, BlockBtns} from "./WelcomeStyle.styled";

const Welcome: React.FC = () => {
  return (
    <ContainerWelcomePage>
      <BlockTitleBtn>
        <TitleWelcomePage>Transforming your body shape with Power Pulse</TitleWelcomePage>
        <BlockBtns>
             <NavLink to="/signup" >
           <Button type="primary" >Sing Up</Button>
            </NavLink>
             <NavLink to="/signin" >
                <Button ghost className="btn-sing-ui">Sing in</Button>
          </NavLink>
          </BlockBtns>
</BlockTitleBtn>
    <ImgWelcomePage src={imgForWelcomePage} alt="The girl shows an example of a forward leg kick" />
      </ContainerWelcomePage>
  );
};

export default Welcome;