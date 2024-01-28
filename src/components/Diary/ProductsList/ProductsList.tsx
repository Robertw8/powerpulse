import { useDiary } from '../../../hooks';

import {
  List,
  DesktopTitleWrap,
  DesktopTitle,
  DesktopCategory,
  DesktopStyled,
} from './ProductsList.styled';
import { ProductsItem } from '../ProductsItem';
import { DiaryNotFoundItems } from '../DiaryNotFoundItems';

const ProductsList: React.FC = () => {
  const { diaryProducts } = useDiary();

  return diaryProducts.length ? (
    <List className="scrollbar-inner">
      <DesktopTitleWrap>
        <DesktopTitle>
          <p>Title</p>
        </DesktopTitle>
        <DesktopCategory>
          <p>Category</p>
        </DesktopCategory>
        <DesktopStyled>
          <p>Calories</p>
        </DesktopStyled>
        <DesktopStyled>
          <p>Weight</p>
        </DesktopStyled>
        <DesktopStyled>
          <p>Recommended</p>
        </DesktopStyled>
      </DesktopTitleWrap>
      {diaryProducts.map((product, index) => (
        <ProductsItem product={product} key={index} id={product._id} />
      ))}
    </List>
  ) : (
    <DiaryNotFoundItems items="products" />
  );
};
export default ProductsList;
