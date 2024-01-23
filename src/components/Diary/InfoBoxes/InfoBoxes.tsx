import { useLocation, Link } from 'react-router-dom';

// import { DiaryNotFoundItems } from '../DiaryNotFoundItems';
import {
  GrayBlockTitle,
  RedBlockTitle,
  TopRow,
  InfoBoxWrap,
  InfoBox,
  StyledIcon,
} from './InfoBoxes.styled';
import { ProductsList } from '../ProductsList';
import { ExercisesList } from '../ExercisesList';
import { DiaryNotFoundItems } from '../DiaryNotFoundItems';
interface InfoBoxesProps{products:number,exercises:number}

const InfoBoxes: React.FC<InfoBoxesProps> = ({exercises,products}) => {
  const location = useLocation();

  return (
    <InfoBoxWrap>
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
                fill="#E6533C"
                stroke="#E6533C"
              />
            </RedBlockTitle>
          </Link>
        </TopRow>
       {products?<ProductsList/>:<DiaryNotFoundItems items='products'/>}
       
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
                fill="#E6533C"
                stroke="#E6533C"
              />
            </RedBlockTitle>
          </Link>
        </TopRow>
{exercises?<ExercisesList/>:<DiaryNotFoundItems items='exercises'/>}
      </InfoBox>
    </InfoBoxWrap>
  );
};

export default InfoBoxes;
