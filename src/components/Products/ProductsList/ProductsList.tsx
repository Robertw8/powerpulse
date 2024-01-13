import { List } from './ProductsList.styled';
import { ProductsItem } from '..';

const ProductsList: React.FC = () => {
  return (
    <List className="scrollbar-outer">
      <ProductsItem recommended={true} />
      <ProductsItem recommended={false} />
      <ProductsItem recommended={true} />
      <ProductsItem recommended={false} />
      <ProductsItem recommended={true} />
      <ProductsItem recommended={false} />
      <ProductsItem recommended={true} />
      <ProductsItem recommended={false} />
      <ProductsItem recommended={true} />
      <ProductsItem recommended={false} />
      <ProductsItem recommended={true} />
      <ProductsItem recommended={false} />
      <ProductsItem recommended={true} />
      <ProductsItem recommended={false} />
    </List>
  );
};

export default ProductsList;
