import React from 'react';

import { Icon } from '../../Icon';
import { Products } from '../../../redux/diary/types';
import { AppDispatch } from '../../../redux';

import {
  TitleCol,
  ValueCol,
  ValueColTitle,
  Row,
  MobileRow,
  MobileTitleRow,
  MiniValueCol,
  IconWrap,
  MiniTitleCol,
  Product,
  TopRow,
  BottomRow,
  Status,
  StatusRound,
} from './ProductsItem.styled';
import { deleteDiaryProduct } from '../../../redux/diary';
import { useDispatch } from 'react-redux';
// import { Popconfirm, Button } from 'antd';

interface ProductsItemProps {
  product: Products;
  id: string;
}
const ucFirst=(str)=> {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}


const ProductsItem: React.FC<ProductsItemProps> = ({ product, id }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleProductDelete = () => {
    dispatch(deleteDiaryProduct(id));
  };
  return (

    <Product>
     
      <TopRow>
        {' '}
        <Row>
          <TitleCol>Title</TitleCol>
          <ValueColTitle>
            <p >{ucFirst(product.title)}</p>
          </ValueColTitle>
        </Row>
        <Row>
          <TitleCol>Category</TitleCol>
          <ValueCol>
            <p>{ucFirst(product.category)}</p>
          </ValueCol>
        </Row>
      </TopRow>
<BottomRow >
      <MobileTitleRow>
        <MiniTitleCol>Calories</MiniTitleCol>
        <MiniTitleCol>Weight</MiniTitleCol>
        <MiniTitleCol>Recommend</MiniTitleCol>
      </MobileTitleRow>
      <MobileRow>
        <MiniValueCol>
          <p>{product.calories}</p>
        </MiniValueCol>
        <MiniValueCol>
          <p>{product.amount}</p>
        </MiniValueCol>
        <MiniValueCol>
          <Status>
            <StatusRound recommended={product.recommend || false}></StatusRound>
            {product.recommend ? 'Yes' : 'No'}
          </Status>
        </MiniValueCol>
        <IconWrap onClick={handleProductDelete}>
          {/* <Popconfirm
            title="Delete an exercise"
            description="Are you sure to delete this exercise?"
            
          >
            <Button type="text" > */}
              <Icon 
                name="delete"
                iconWidth={{ mobile: '20px', tablet: '20px' }}
                iconHeight={{ mobile: '20px', tablet: '20px' }}
                stroke="#EF8964"
              />
            {/* </Button>
          </Popconfirm> */}
        </IconWrap>
      </MobileRow>
      </BottomRow>
    </Product>
  );
};

export default ProductsItem;
