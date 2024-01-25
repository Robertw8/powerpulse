import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { List,
  DesktopTitleWrap,
  DesktopTitle,
  DesktopCategory,
  DesktopStyled
} from './ProductsList.styled';
import { Loader } from '../..';
import {selectProducts ,selectIsLoading} from '../../../redux/diary';
import { ProductsItem } from '../ProductsItem';

const ProductsList: React.FC = () => {

  const products= useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!products.length && !isLoading) {
      const timeoutId = setTimeout(() => {
       
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    } 
  }, [products, isLoading]);

  return (

      <List   className='scrollbar-inner ' >
          <DesktopTitleWrap>
  <DesktopTitle><p>Title</p></DesktopTitle>
  <DesktopCategory><p>Category</p></DesktopCategory>
  <  DesktopStyled><p>Calories</p></  DesktopStyled>
  <  DesktopStyled><p>Weight</p></  DesktopStyled>
  <  DesktopStyled><p>Recommended</p></  DesktopStyled>
  </DesktopTitleWrap>
        {products.map((product,index) => (
          <ProductsItem
          product={product} key={index} id={product._id} />
        ))}
        {isLoading && <Loader />}
      </List>
  );
};
export default ProductsList;
