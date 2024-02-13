import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNotFoundTimeout, useProducts } from '../../../hooks';

import { List, ListWrapper } from './ProductsList.styled';
import { NotFoundMessage, ProductsItem } from '..';
import { Loader } from '../..';

import { getProducts, getProductsByPage } from '../../../redux/products';
import throttle from 'lodash.throttle';
import type { AppDispatch } from '../../../redux';

const ProductsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading, filters } = useProducts();
  const productsListRef = useRef<HTMLUListElement>(null);
  const pageRef = useRef<number>(1);

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

  const filteredProducts = products.filter(({ title }) =>
    filters.search
      ? title.toLowerCase().includes(filters.search.toLowerCase())
      : products
  );

  const notFound = useNotFoundTimeout(filteredProducts, isLoading);

  return (
    <ListWrapper>
      {notFound && <NotFoundMessage />}
      <List className="scrollbar-outer" ref={productsListRef}>
        {filteredProducts.map(product => (
          <ProductsItem product={product} key={product._id} />
        ))}
        {isLoading && <Loader />}
      </List>
    </ListWrapper>
  );
};

export default ProductsList;
