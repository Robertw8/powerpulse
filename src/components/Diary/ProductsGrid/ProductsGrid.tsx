import React from 'react';
import { Col, Row } from 'antd';
import { Icon } from '../../Icon';
import { Products } from '../../../redux/diary/types';
import { useAuth } from '../../../hooks';
import {
  Status,
  StatusRound,
} from '../../Products/ProductsItem/ProductsItem.styled';

interface ProductsItemProps {
  product: Products;
}

const ProductsGrid: React.FC<ProductsItemProps> = ({ product }) => {
  const { groupBloodNotAllowed } = product;
  const { user } = useAuth();

  const userBloodGroup = user.settings.blood;
  const isRecommended = userBloodGroup
    ? groupBloodNotAllowed[userBloodGroup]
    : undefined;

  return (
    <>
      <Row>
        <Col>Title</Col>
      </Row>
      <Row>
        <Col>{product.title}</Col>
      </Row>
      <Row>
        <Col>Category</Col>
      </Row>
      <Row>
        <Col>{product.category}</Col>
      </Row>

      <Row justify="start" gutter={40}>
        <Col>Calories</Col>
        <Col>Weight</Col>
        <Col>Recommend</Col>
      </Row>
      <Row justify="start" gutter={[80, 40]}>
        <Col>{product.calories}</Col>
        <Col>{product.amount}</Col>
        <Col>
          {' '}
          <Status>
            <StatusRound recommended={isRecommended || false}></StatusRound>
            {isRecommended ? 'Yes' : 'No'}
          </Status>
        </Col>
        <Col flex={'auto'}>
          {' '}
          <Icon
            name="running"
            iconWidth={{ mobile: '40px', tablet: '40px' }}
            fill="#EFEDE8"
            stroke="#EFEDE8"
          />
        </Col>
      </Row>

      <Row>
        <Col flex="1 1 200px">1 1 200px</Col>
        <Col flex="0 1 300px">0 1 300px</Col>
      </Row>
    </>
  );
};

export default ProductsGrid;
