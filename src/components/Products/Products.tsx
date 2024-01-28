import { Container, Filters, PageTitle, ProductsList } from '..';
import {
  BackgroundImage,
  ProductsTitleRow,
  ProductsWrapper,
} from './Products.styled';

import bg from '../../assets/images/Products/bg@3x.jpg';

const Products: React.FC = () => {
  return (
    <ProductsWrapper>
      <Container>
        <ProductsTitleRow>
          <PageTitle text="Products" />
          <Filters />
        </ProductsTitleRow>
        <ProductsList />
      </Container>
      <BackgroundImage>
        <img src={bg} alt="woman" loading="lazy" />
      </BackgroundImage>
    </ProductsWrapper>
  );
};

export default Products;
