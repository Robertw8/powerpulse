
import WelcomeStyle from "./WelcomeStyle.styled";
import imgForWelcomePage from "..//../assets/images/ImgForWelcomePage/imgForWelcomePage.jpg";
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
  
      <WelcomeStyle>
             <NavLink to="/signup" >
           <Button type="primary" >Sing Up</Button>
            </NavLink>
             <NavLink to="/signin" >
                <Button ghost className="btn-sing-ui">Sing in</Button>
            </NavLink>

    <img src={imgForWelcomePage} alt="" width={670} height={900}/>
</WelcomeStyle>
  );
};

export default Welcome;