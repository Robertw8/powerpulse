import { ModalProps } from 'antd';
import { Icon, PrimaryButton } from '../..';
import {
  StyledModal,
  ButtonWrapper,
  Calories,
  ContentWrapper,
  ModalTitle,
  StyledLink,
  Value,
} from '../../Products/ProductAddedModal/ProductAddedModal.styled';
import thumb from '../../../assets/images/Exercises/thumb.png';

interface ExerciseAddedModalProps extends ModalProps {
  // handleClose: () => void;
  // calories: number;
  handleClose: () => void;
  time: number;
  burnedCalories: number;
}

const ExerciseAddedModal: React.FC<ExerciseAddedModalProps> = ({
  open,
  handleClose,
  time,
  burnedCalories,
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
        <div style={{ marginBottom: 30 }}>
          <img src={thumb} alt="well done" />
        </div>
        <ModalTitle>Well done</ModalTitle>
        <Calories>
          Your time: <Value>{time} minutes</Value>
        </Calories>
        <Calories>
          Burned calories: <Value>{burnedCalories}</Value>
        </Calories>
        <ButtonWrapper>
          <PrimaryButton
            text="Next exercise"
            type="primary"
            sizes="small"
            htmlType="button"
            onclick={handleClose}
          />
        </ButtonWrapper>
        <StyledLink to="/diary">
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

export default ExerciseAddedModal;
