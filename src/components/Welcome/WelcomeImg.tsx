import { ImgWelcomePage, StatisticsWrapper } from './Welcome.styled';
import { ImgSignUp } from '../SignUp/SignUp.styled';

import imgForWelcomePage from '../../assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';
import ImgForWelcomePageMob from '../../assets/images/ImgForWelcomePage/ImgForWelcomePageMob.webp';
import imgForWelcomePageTablet from '../../assets/images/ImgForWelcomePage/imgWelcomePageTablet.png';
import imgAuthPageMob from '../../assets/images/ImgForWelcomePage/imgAuthPageMob.webp';

import { Statistics } from '../Statistics';

const WelcomeImg: React.FC = () => {
  return (
    <>
      <picture>
        <source media="(max-width: 768px)" srcSet={ImgForWelcomePageMob} />
        <source
          media="((min-width: 769px) and (max-width: 1439px))"
          srcSet={imgForWelcomePageTablet}
        />
        <source media="(min-width: 1440px)" srcSet={imgForWelcomePage} />
        <ImgWelcomePage
          alt="Example of a lunge forward on the leg"
          loading="lazy"
        />
      </picture>
      <StatisticsWrapper>
        <Statistics />
      </StatisticsWrapper>
    </>
  );
};

const AuthImg: React.FC = () => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={imgAuthPageMob} />
      <source
        media="((min-width: 769px) and (max-width: 1439px))"
        srcSet={imgForWelcomePageTablet}
      />
      <source media="(min-width: 1440px)" srcSet={imgForWelcomePage} />

      <ImgSignUp alt="Example of a lunge forward on the leg" loading="lazy" />
    </picture>
  );
};

export { WelcomeImg, AuthImg };
