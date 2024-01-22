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
}

const ExerciseAddedModal: React.FC<ExerciseAddedModalProps> = () => {
  return (
    <StyledModal
      open={true}
      closeIcon={
        <Icon
          name="x"
          iconWidth={{ mobile: '22px', tablet: '26px' }}
          iconHeight={{ mobile: '22px', tablet: '26px' }}
        />
      }
      // onCancel={handleClose}
      // onOk={handleClose}
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
          Your time: <Value>3 minutes</Value>
        </Calories>
        <Calories>
          Burned calories: <Value>150</Value>
        </Calories>
        <ButtonWrapper>
          <PrimaryButton
            text="Next exercise"
            type="primary"
            sizes="small"
            htmlType="button"
            onclick={() => ''}
          />
        </ButtonWrapper>
        <StyledLink
          to="/diary"
          // onClick={() => dispatch(setCalculatedCalories(0))}
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

export default ExerciseAddedModal;
