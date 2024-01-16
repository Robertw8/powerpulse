import { List, ListWrapper } from './ProductsList.styled';
import { ProductsItem } from '..';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../../redux/products';
import { AppDispatch } from '../../../redux';

const ProductsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts({}));
  }, [dispatch]);

  return (
    <ListWrapper>
      (
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
      )
    </ListWrapper>
  );
};
export default ProductsList;
