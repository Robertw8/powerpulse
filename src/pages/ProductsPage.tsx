import { Filters } from '../components/Products/Filters';
import { ProductsItem } from '../components/';
import { Container } from '../components';

const ProductsPage: React.FC = () => {
  return (
    <Container>
      <Filters />
      <div style={{ marginTop: 50 }}>
        <ProductsItem recommended={false} />
      </div>
    </Container>
  );
};

export default ProductsPage;
