import { useEffect, useState } from 'react';
import { useAuth, useProducts } from '../../../hooks';
import { useDispatch } from 'react-redux';

import {
  Item,
  TopRow,
  Badge,
  Status,
  StatusRound,
  AddButton,
  BottomRow,
  NameRow,
  Name,
  NameIconWrapper,
  SpecificationsList,
  SpecificationsItem,
  SpecificationName,
  SpecificationValue,
} from './ProductsItem.styled';
import { Icon } from '../../Icon';
import { Product } from '../../../redux/products/types';
import { AddProductModal, ProductAddedModal } from '..';

import { AppDispatch } from '../../../redux';
import { setCalculatedCalories } from '../../../redux/products';

interface ProductsItemProps {
  product: Product;
}

const ProductsItem: React.FC<ProductsItemProps> = ({ product }) => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { groupBloodNotAllowed } = product;
  const { calculatedCalories } = useProducts();
  const { user } = useAuth();
  const userBloodGroup = user.settings.blood;

  const isRecommended = userBloodGroup
    ? groupBloodNotAllowed[userBloodGroup]
    : undefined;

  useEffect(() => {
    if (calculatedCalories && isFirstModalOpen) {
      setIsFirstModalOpen(false);
      setIsSecondModalOpen(true);
    }
  }, [calculatedCalories, isFirstModalOpen]);

  const handleSecondModalClose = () => {
    setIsSecondModalOpen(false);
    dispatch(setCalculatedCalories(0));
  };

  return (
    <>
      <Item>
        <TopRow>
          <Badge>DIET</Badge>
          <Status>
            <StatusRound recommended={isRecommended || false}></StatusRound>
            {isRecommended ? 'Recommended' : 'Not recommended'}
          </Status>
          <AddButton type="text" onClick={() => setIsFirstModalOpen(true)}>
            Add
            <Icon
              name="arrow-secondary"
              iconWidth={{ mobile: '16px', tablet: '16px' }}
              stroke={'#e6533c'}
            />
          </AddButton>
        </TopRow>
        <BottomRow>
          <NameRow>
            <NameIconWrapper>
              <Icon
                name="running"
                iconWidth={{ mobile: '16px', tablet: '16px' }}
                fill="#EFEDE8"
                stroke="#EFEDE8"
              />
            </NameIconWrapper>
            <Name>{product.title}</Name>
          </NameRow>
          <SpecificationsList>
            <SpecificationsItem>
              <SpecificationName>Calories:</SpecificationName>
              <SpecificationValue>{product.calories}</SpecificationValue>
            </SpecificationsItem>
            <SpecificationsItem>
              <SpecificationName>Category:</SpecificationName>
              <SpecificationValue>{product.category}</SpecificationValue>
            </SpecificationsItem>
            <SpecificationsItem>
              <SpecificationName>Weight:</SpecificationName>
              <SpecificationValue>{product.weight}</SpecificationValue>
            </SpecificationsItem>
          </SpecificationsList>
        </BottomRow>
      </Item>
      <AddProductModal
        handleCancel={() => setIsFirstModalOpen(false)}
        open={isFirstModalOpen}
        product={product}
      />
      <ProductAddedModal
        open={isSecondModalOpen}
        handleClose={handleSecondModalClose}
        calories={calculatedCalories}
      />
    </>
  );
};

export default ProductsItem;
