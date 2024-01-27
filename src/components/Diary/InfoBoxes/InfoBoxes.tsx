import { useLocation, useNavigate } from 'react-router-dom';

import {
  GrayBlockTitle,
  TopRow,
  InfoBoxWrap,
  InfoBox,
} from './InfoBoxes.styled';
import { AddButton } from '../../Products/ProductsItem/ProductsItem.styled';
import { ProductsList } from '../ProductsList';
import { ExercisesList } from '../ExercisesList';
import { Icon } from '../..';

const InfoBoxes: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <InfoBoxWrap>
      <InfoBox>
        <TopRow>
          <GrayBlockTitle>Products</GrayBlockTitle>
          <AddButton
            type="text"
            onClick={() => navigate('/products', { state: { from: location } })}
          >
            <span>Add product</span>
            <Icon
              name="arrow-right"
              iconWidth={{ mobile: '16px', tablet: '16px' }}
              iconHeight={{ mobile: '16px', tablet: '16px' }}
              stroke="#E6533C"
            />
          </AddButton>
        </TopRow>
        <ProductsList />
      </InfoBox>
      <InfoBox>
        <TopRow>
          <GrayBlockTitle>Exercises</GrayBlockTitle>
          <AddButton
            type="text"
            onClick={() =>
              navigate('/exercises', { state: { from: location } })
            }
          >
            <span>Add exercise</span>
            <Icon
              name="arrow-right"
              iconWidth={{ mobile: '16px', tablet: '16px' }}
              iconHeight={{ mobile: '16px', tablet: '16px' }}
              stroke="#E6533C"
            />
          </AddButton>
        </TopRow>
        <ExercisesList />
      </InfoBox>
    </InfoBoxWrap>
  );
};

export default InfoBoxes;
