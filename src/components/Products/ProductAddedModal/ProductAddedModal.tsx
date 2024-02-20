import { useDispatch } from 'react-redux';

import { Icon, PrimaryButton } from '../..';
import {
  StyledModal,
  ButtonWrapper,
  Calories,
  ContentWrapper,
  ModalTitle,
  StyledLink,
  Value,
} from './ProductAddedModal.styled';

import { setCalculatedCalories } from '../../../redux/products';
import avocado from '../../../assets/images/Products/avocado.png';

import type { ModalProps } from 'antd';
import type { AppDispatch } from '../../../redux';

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
          <img src={avocado} alt="avocado" width={125} height={100} />
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
            onClick={handleClose}
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
