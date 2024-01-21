// import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import routes from '../routes.ts';
import Icon from '../components/Icon/Icon.tsx';
import { useAuth } from '../hooks';
import { PrimaryButton } from '../components';
import imgForWelcomePage from '../assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';
import imgForWelcomePage2 from '../assets/images/ImgForWelcomePage/imgForWelcomePage@2.jpg';
import imgForWelcomePageTab from '../assets/images/ImgForWelcomePage/imgWelcomePageTablet.png';
import imgForWelcomePageTab2 from '../assets/images/ImgForWelcomePage/imgWelcomePageTablet@2.jpg';
import imgForWelcomePageMob from '../assets/images/ImgForWelcomePage/ImgForWelcomePageMob.png';
import imgForWelcomePageMob2 from '../assets/images/ImgForWelcomePage/ImgForWelcomePageMob@2.jpg';

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: minmax(240px, 45vw) 1fr;
`;
const InfoContainer = styled.div`
  background: #e6533c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding: 20px 50px;
  }
`;
export const LinkLogo = styled(Link)`
  margin-right: auto;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  color: rgba(239, 237, 232, 1);
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
`;
const Title = styled.h3`
  font-size: 66px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.01em;
  @media screen and (min-width: 768px) {
    font-size: 160px;
  }
`;

const TextContainer = styled.div`
  margin: auto 0;
  padding-bottom: 40px;
`;
const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 20px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin: 20px 0 40px;
  }
`;

const Img = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100% 100%;

  background-image: url(${imgForWelcomePageMob});
  background-image: -webkit-image-set(
    url(${imgForWelcomePageMob}) 1x,
    url(${imgForWelcomePageMob2}) 2x
  );
  background-image: image-set(
    url(${imgForWelcomePageMob}) 1x,
    url(${imgForWelcomePageMob2}) 2x
  );

  @media screen and (min-width: 400px) {
    background-image: url(${imgForWelcomePageTab});
    background-image: -webkit-image-set(
      url(${imgForWelcomePageTab}) 1x,
      url(${imgForWelcomePageTab2}) 2x
    );
    background-image: image-set(
      url(${imgForWelcomePageTab}) 1x,
      url(${imgForWelcomePageTab2}) 2x
    );
  }

  @media screen and (min-width: 769px) {
    background-image: url(${imgForWelcomePage});
    background-image: -webkit-image-set(
      url(${imgForWelcomePage}) 1x,
      url(${imgForWelcomePage2}) 2x
    );
    background-image: image-set(
      url(${imgForWelcomePage}) 1x,
      url(${imgForWelcomePage2}) 2x
    );
  }
`;

const NotFoundPage: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const homeLink = !isLoggedIn && !isRefreshing ? routes.WELCOME : routes.DIARY;
  // const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const intervalId = setInterval(() => setCountdown(countdown - 1), 1000);
  //
  //   if (countdown === 0) {
  //     navigate('/');
  //     return () => clearInterval(intervalId);
  //   }
  // }, [countdown, navigate]);

  return (
    <Container>
      <InfoContainer>
        <LinkLogo to={homeLink}>
          <Icon
            name="logoColors"
            iconWidth={{ mobile: '36px', tablet: '44px' }}
            iconHeight={{ mobile: '13px', tablet: '17px' }}
          />
          <span>PowerPulse</span>
        </LinkLogo>
        <TextContainer>
          <Title>404</Title>
          <Description>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </Description>
          <PrimaryButton
            text="Go Home"
            type="default"
            sizes="small"
            htmlType="button"
            onclick={() => {
              navigate(homeLink);
            }}
          />
        </TextContainer>
      </InfoContainer>
      <Img />
    </Container>
  );
};

export default NotFoundPage;
