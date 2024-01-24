import React from 'react';

import { Icon } from '../../Icon';
import { Products } from '../../../redux/diary/types';
import { AppDispatch } from '../../../redux';
import {
  Status,
  StatusRound,
} from '../../Products/ProductsItem/ProductsItem.styled';
import {
  TitleCol,
  ValueCol,
  Row,
  MobileRow,
  MiniValueCol,
  IconWrap,
  MiniTitleCol,
  Product,
  TopRow,
} from './ProductsItem.styled';
import { deleteDiaryProduct } from '../../../redux/diary';
import { useDispatch } from 'react-redux';
import { Button, Popconfirm } from 'antd';

interface ProductsItemProps {
  product: Products;
  id: string;
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
          <ValueCol>
            <p>{product.title}</p>
          </ValueCol>
        </Row>
        <Row>
          <TitleCol>Category</TitleCol>
          <ValueCol>
            <p>{product.category}</p>
          </ValueCol>
        </Row>
      </TopRow>

      <MobileRow>
        <MiniTitleCol>Calories</MiniTitleCol>
        <MiniTitleCol>Weight</MiniTitleCol>
        <MiniTitleCol>Recommend</MiniTitleCol>
      </MobileRow>
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
        <IconWrap>
          <Popconfirm
            title="Delete an exercise"
            description="Are you sure to delete this exercise?"
            onConfirm={handleProductDelete}
          >
            <Button type="text">
              <Icon
                name="delete"
                iconWidth={{ mobile: '20px', tablet: '20px' }}
                stroke="#EF8964"
              />
            </Button>
          </Popconfirm>
        </IconWrap>
      </MobileRow>
    </Product>
  );
};

export default ProductsItem;
