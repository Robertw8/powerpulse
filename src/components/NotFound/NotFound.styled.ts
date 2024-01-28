import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import imgForWelcomePage from '../../assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';
import imgForWelcomePage2 from '../../assets/images/ImgForWelcomePage/imgForWelcomePage@2.jpg';
import imgForWelcomePageTab from '../../assets/images/ImgForWelcomePage/imgWelcomePageTablet.png';
import imgForWelcomePageTab2 from '../../assets/images/ImgForWelcomePage/imgWelcomePageTablet@2.jpg';
import imgForWelcomePageMob from '../../assets/images/ImgForWelcomePage/ImgForWelcomePageMob.webp';
import imgForWelcomePageMob2 from '../../assets/images/ImgForWelcomePage/ImgForWelcomePageMob@2.jpg';

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: minmax(240px, 45vw) 1fr;
`;

const InfoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #e6533c;

  @media screen and (min-width: 768px) {
    padding: 20px 50px;
  }
`;

const LinkLogo = styled(Link)`
  margin-right: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  color: rgba(239, 237, 232, 1);
  text-decoration: none;
  background-color: transparent;

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
  margin: 0 0 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin: 20px 0 40px;
  }
`;

const Img = styled.div`
  background-size: auto;
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
    background-size: contain;
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

export {
  Container,
  LinkLogo,
  InfoContainer,
  Title,
  TextContainer,
  Description,
  Img,
};
