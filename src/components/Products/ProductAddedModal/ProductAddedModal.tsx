import { Icon } from '../../Icon';
import { PrimaryButton } from '../..';
import {
  StyledModal,
  ButtonWrapper,
  Calories,
  ContentWrapper,
  ModalTitle,
  StyledLink,
  Value,
} from './ProductAddedModal.styled';

import { useDispatch } from 'react-redux';
import { ModalProps } from 'antd';
import { AppDispatch } from '../../../redux';
import { setCalculatedCalories } from '../../../redux/products';

interface ProductAddedModalProps extends ModalProps {
  handleClose: () => void;
  calories: number;
}

const ProductAddedModal: React.FC<ProductAddedModalProps> = ({
  open,
  handleClose,
  calories,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <StyledModal
      open={open}
      closeIcon={
        <Icon
          name="x"
          iconWidth={{ mobile: '22px', tablet: '26px' }}
          iconHeight={{ mobile: '22px', tablet: '26px' }}
        />
      }
      onCancel={handleClose}
      onOk={handleClose}
      destroyOnClose
      keyboard
      footer={null}
      maskClosable
    >
      <ContentWrapper>
        <div>
          <img src="src/assets/images/Products/avocado.png" alt="avocado" />
        </div>
        <ModalTitle>Well done</ModalTitle>
        <Calories>
          Calories: <Value>{calories}</Value>
        </Calories>
        <ButtonWrapper>
          <PrimaryButton
            text="Next product"
            type="primary"
            sizes="small"
            htmlType="button"
            onclick={handleClose}
          />
        </ButtonWrapper>
        <StyledLink
          to="/diary"
          onClick={() => dispatch(setCalculatedCalories(0))}
        >
          To the diary
          <span>
            <Icon
              iconWidth={{ mobile: '16px', tablet: '16px' }}
              iconHeight={{ mobile: '12px', tablet: '12px' }}
              name="arrow-right"
              stroke={'#EFEDE84D'}
            />
          </span>
        </StyledLink>
      </ContentWrapper>
    </StyledModal>
  );
};

export default ProductAddedModal;
