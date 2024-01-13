import { List, ListWrapper } from './ProductsList.styled';
import { NotFoundMessage, ProductsItem } from '..';

const ProductsList: React.FC = () => {
  const test = false;

  return (
    <ListWrapper>
      {test ? (
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
      ) : (
        <NotFoundMessage />
      )}
    </ListWrapper>
  );
};

export default ProductsList;
