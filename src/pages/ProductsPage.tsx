import { Container, Filters, ProductsList, PrimaryButton } from '../components';

const ProductsPage: React.FC = () => {
  return (
    <Container>
      <Filters />
      <ProductsList />
      <PrimaryButton type="primary" text="Button" sizes="large" />
    </Container>
  );
};

export default ProductsPage;
