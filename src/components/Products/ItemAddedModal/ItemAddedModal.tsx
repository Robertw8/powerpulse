import { ModalProps } from 'antd';
import { Icon } from '../../Icon';
import {
  StyledModal,
  ButtonWrapper,
  Calories,
  ContentWrapper,
  ModalTitle,
  StyledLink,
  Value,
} from './ItemAddedModal.styled';
import { PrimaryButton } from '../..';

interface ItemAddedModalProps extends ModalProps {
  handleClose: () => void;
}

const ItemAddedModal: React.FC<ItemAddedModalProps> = ({
  open,
  handleClose,
}) => {
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
          Calories: <Value>96***</Value>
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
        <StyledLink to="/diary">To the diary *ICON*</StyledLink>
      </ContentWrapper>
    </StyledModal>
  );
};

export default ItemAddedModal;
