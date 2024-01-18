import { Container, Filters, ProductsList } from '../components';

const ProductsPage: React.FC = () => {
  return (
    <Container>
      <Filters />
      <ProductsList />
    </Container>
  );
};

export default ProductsPage;
