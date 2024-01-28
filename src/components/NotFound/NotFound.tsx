import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import routes from '../../routes.ts';

import {
  Container,
  TextContainer,
  InfoContainer,
  LinkLogo,
  Title,
  Description,
  Img,
} from './NotFound.styled.ts';
import Icon from '../../components/Icon/Icon.tsx';
import { PrimaryButton } from '../../components';

const NotFound: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const homeLink = !isLoggedIn && !isRefreshing ? routes.WELCOME : routes.DIARY;
  const navigate = useNavigate();

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

export default NotFound;
