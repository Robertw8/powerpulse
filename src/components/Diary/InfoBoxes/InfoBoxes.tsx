import { useLocation,Link } from 'react-router-dom';

import { DiaryNotFoundItems } from '../DiaryNotFoundItems';
import {
  GrayBlockTitle,
  RedBlockTitle,
  TopRow,
  InfoBoxWrap,
InfoBox,StyledIcon
} from './InfoBoxes.styled';
import { ProductsList } from '../ProductsList';






const InfoBoxes: React.FC = () => {
  const location = useLocation();

  return (    <InfoBoxWrap> 
    <InfoBox>
    <TopRow>
    <GrayBlockTitle>Products</GrayBlockTitle>
    <Link to={`/products`} state={{ from: location }}>
    <RedBlockTitle>
      Add product
      <StyledIcon
        name="arrow-right"
        iconWidth={{ mobile: '16px', tablet: '16px' }}
        iconHeight={{ mobile: '16px', tablet: '16px' }}
        fill='#E6533C'
        stroke='#E6533C'
      />
    </RedBlockTitle>
</Link>
  </TopRow>
  <ProductsList></ProductsList>

  </InfoBox>
  <InfoBox>
  <TopRow>
    <GrayBlockTitle>Exercises</GrayBlockTitle>
    <Link to={`/exercises`} state={{ from: location }}>
    <RedBlockTitle>
      Add exercise
      <StyledIcon
        name="arrow-right"
        iconWidth={{ mobile: '16px', tablet: '16px' }}
        iconHeight={{ mobile: '16px', tablet: '16px' }}
        fill='#E6533C'
        stroke='#E6533C'
      />
    </RedBlockTitle>
    </Link>
  </TopRow>
  <DiaryNotFoundItems items="exercises" />
  </InfoBox>
  </InfoBoxWrap>
  
  );
};

export default InfoBoxes;




         