import { List, ListWrapper } from './ProductsList.styled';
import { ProductsItem } from '..';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import {
  getProducts,
  selectIsLoading,
  selectProducts,
} from '../../../redux/products';
import { AppDispatch } from '../../../redux';
import throttle from 'lodash.throttle';

const ProductsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const productsListRef = useRef<HTMLUListElement>(null);
  const pageRef = useRef<number>(1);

  useEffect(() => {
    dispatch(getProducts(pageRef.current));
    pageRef.current = pageRef.current + 1;
  }, [dispatch]);

  useEffect(() => {
    const listElement = productsListRef.current;

    const handleScroll = throttle(() => {
      if (isLoading || !listElement) return;

      if (
        listElement.scrollTop + listElement.clientHeight >=
        listElement.scrollHeight - 20
      ) {
        dispatch(getProducts(pageRef.current));
        pageRef.current = pageRef.current + 1;
      }
    }, 600);

    listElement?.addEventListener('scroll', handleScroll);

    return () => {
      listElement?.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, pageRef]);

  return (
    <ListWrapper>
      <List className="scrollbar-outer" ref={productsListRef}>
        {products.map((product, index) => (
          <ProductsItem product={product} key={index} />
        ))}
      </List>
    </ListWrapper>
  );
};
export default ProductsList;
