import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { List, ListWrapper } from './ProductsList.styled';
import { Loader } from '../..';
import {selectProducts ,selectIsLoading} from '../../../redux/diary';
import { ProductsGrid } from '../ProductsGrid';
// import { ProductsItem } from '../ProductsItem';


const ProductsList: React.FC = () => {

  const products= useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);


 


  useEffect(() => {
    if (!products.length && !isLoading) {
      const timeoutId = setTimeout(() => {
       
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    } 
  }, [products, isLoading]);

  return (
    <ListWrapper>
     
      <List className="scrollbar-outer" >
        {products.map((product,index) => (
          <ProductsGrid
          product={product} key={index} id={product._id} />
        ))}
        {isLoading && <Loader />}
      </List>
    </ListWrapper>
  );
};
export default ProductsList;
