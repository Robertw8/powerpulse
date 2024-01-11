import { Container } from "..";
import WelcomeStyle from "./WelcomeStyle.styled";
import imgForWelcomePage from "..//../assets/images/ImgForWelcomePage/imgForWelcomePage.jpg";
import { Button, ConfigProvider } from 'antd';
import { NavLink } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <Container>
      <WelcomeStyle>
         <ConfigProvider
    theme={{
      token: {
      colorPrimary: '#E6533C',
        borderRadius: 5,
         colorTextBase: '#ffffff',
      
      },
    }}
           >
             <NavLink to="/signup" >
           <Button type="primary">Sing Up</Button>
            </NavLink>
             <NavLink to="/signin" >
                <Button ghost>Sing in</Button>
            </NavLink>
  </ConfigProvider>
    <img src={imgForWelcomePage} alt="" width={670} height={900} className='photo-welcome-page'/>
</WelcomeStyle>
      </Container>
      
  );
};

export default Welcome;