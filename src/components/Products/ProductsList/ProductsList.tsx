import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { List, ListWrapper } from './ProductsList.styled';
import { NotFoundMessage, ProductsItem } from '..';

import {
  getProducts,
  getProductsByPage,
  selectFilters,
  selectIsLoading,
  selectProducts,
} from '../../../redux/products';
import { AppDispatch } from '../../../redux';
import throttle from 'lodash.throttle';
import { Loader } from '../..';

const ProductsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const productsListRef = useRef<HTMLUListElement>(null);
  const pageRef = useRef<number>(1);
  const filters = useSelector(selectFilters);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    dispatch(
      getProducts({
        search: filters.search,
        categories: filters.categories,
        type: filters.type,
      })
    );
    pageRef.current = 2;
  }, [dispatch, filters]);

  useEffect(() => {
    const listElement = productsListRef.current;

    const handleScroll = throttle(() => {
      if (isLoading || !listElement) return;

      if (
        listElement.scrollTop + listElement.clientHeight >=
        listElement.scrollHeight
      ) {
        dispatch(
          getProductsByPage({
            page: pageRef.current,
            search: filters.search,
            categories: filters.categories,
            type: filters.type,
            limit: 20,
          })
        );
        pageRef.current = pageRef.current + 1;
      }
    }, 600);

    listElement?.addEventListener('scroll', handleScroll);

    return () => {
      listElement?.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, pageRef, filters]);

  useEffect(() => {
    if (!products.length && !isLoading) {
      const timeoutId = setTimeout(() => {
        setShowNotFound(true);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setShowNotFound(false);
    }
  }, [products, isLoading]);

  return (
    <ListWrapper>
      {showNotFound && <NotFoundMessage />}
      <List className="scrollbar-outer" ref={productsListRef}>
        {products.map((product, index) => (
          <ProductsItem product={product} key={index} />
        ))}
        {isLoading && <Loader />}
      </List>
    </ListWrapper>
  );
};
export default ProductsList;
