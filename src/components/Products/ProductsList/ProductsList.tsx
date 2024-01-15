import { List, ListWrapper } from './ProductsList.styled';
import { ProductsItem } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts, selectProducts } from '../../../redux/products';
import { AppDispatch } from '../../../redux';

const ProductsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts({}));
  }, [dispatch]);

  console.log(products);

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
