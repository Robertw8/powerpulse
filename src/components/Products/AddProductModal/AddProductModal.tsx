import { ModalProps } from 'antd';
import { StyledModal, FormWrapper } from './AddProductModal.styled';
import { Icon } from '../../Icon';
import { AddProductForm } from '..';

interface AddProductModalProps extends ModalProps {
  handleCancel: () => void;
  product: { title: string; calories: number; _id: string };
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  open,
  handleCancel,
  product,
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
      keyboard
      footer={null}
      maskClosable
      onCancel={handleCancel}
      focusTriggerAfterClose={false}
    >
      <FormWrapper>
        <AddProductForm product={product} handleCancel={handleCancel} />
      </FormWrapper>
    </StyledModal>
  );
};

export default AddProductModal;
