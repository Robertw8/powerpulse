import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { List, ListWrapper } from './ProductsList.styled';
import { NotFoundMessage, ProductsItem } from '..';
import { Loader } from '../..';

import { getProducts, getProductsByPage } from '../../../redux/products';
import { AppDispatch } from '../../../redux';
import throttle from 'lodash.throttle';
import { useProducts } from '../../../hooks';

const ProductsList: React.FC = () => {
  const [showNotFound, setShowNotFound] = useState(false);
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

  useEffect(() => {
    if (!products.length && !isLoading) {
      const timeoutId = setTimeout(() => {
        setShowNotFound(true);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setShowNotFound(false);
    }
  }, [products, isLoading]);

  const filteredProducts = products.filter(({ title }) =>
    filters.search
      ? title.toLowerCase().includes(filters.search.toLowerCase())
      : products
  );

  return (
    <ListWrapper>
      {showNotFound && <NotFoundMessage />}
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
