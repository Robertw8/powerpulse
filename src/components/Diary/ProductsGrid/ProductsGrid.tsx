import React from 'react';
import { Col, Row } from 'antd';

import { Icon } from '../../Icon';
import { Products } from '../../../redux/diary/types';
import { useAuth } from '../../../hooks';
import { AppDispatch } from '../../../redux';
import {
  Status,
  StatusRound,
} from '../../Products/ProductsItem/ProductsItem.styled';
import { TitleCol,ValueCol } from './ProductsGrid.styles';
import { deleteDiaryProduct } from '../../../redux/diary';
import { useDispatch } from 'react-redux';

interface ProductsItemProps {
  product: Products;
  id:string
}

const ProductsGrid: React.FC<ProductsItemProps> = ({ product,id }) => {

  const { groupBloodNotAllowed } = product;
  const { user } = useAuth();

  const userBloodGroup = user.settings.blood;
  const isRecommended = userBloodGroup
    ? groupBloodNotAllowed[userBloodGroup]
    : undefined;
    const dispatch = useDispatch<AppDispatch>();
    const handleProductDelete=() => {
  
      dispatch(
       deleteDiaryProduct(id)
      );
    };
  return (
    <>
      <Row>
        <TitleCol>Title</TitleCol>
        <ValueCol >{product.title}</ValueCol>
      </Row>
      <Row>
        <TitleCol>Category</TitleCol>
        <ValueCol>{product.category}</ValueCol>
      </Row>

      <Row justify="start" gutter={40}>
        <TitleCol>Calories</TitleCol>
        <TitleCol>Weight</TitleCol>
        <TitleCol>Recommend</TitleCol>
      </Row>
      <Row justify="start" gutter={[50, 0]}>
        <ValueCol>{product.calories}</ValueCol>
        <ValueCol>{product.amount}</ValueCol>
        <ValueCol>
          <Status>
            <StatusRound recommended={isRecommended || false}></StatusRound>
            {isRecommended ? 'Yes' : 'No'}
          </Status>
        </ValueCol>
        <Col onClick={handleProductDelete}>
          <Icon
            name="delete"
            iconWidth={{ mobile: '40px', tablet: '40px' }}
            fill="#EFEDE8"
            stroke="#EFEDE8"
          />
        </Col>
      </Row>
    </>
  );
};

export default ProductsGrid;
