import { ModalProps } from 'antd';
import { Icon, PrimaryButton } from '../..';
import {
  StyledModal,
  GifWrapper,
  TimerWrapper,
  TimerTitle,
  InfoWrapper,
  ButtonWrapper,
  TimeRemaining,
  TimerButton,
  BurnedCalories,
  Value,
  InfoList,
  InfoItem,
  ItemName,
  ItemValue,
  TimerColumn,
  InfoColumn,
} from './AddExerciseModal.styled';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { formatTime } from '../../../helpers';

interface AddExerciseModalProps extends ModalProps {
  handleCancel: () => void;
  exercise: unknown;
}

const AddExerciseModal: React.FC<AddExerciseModalProps> = ({
  open,
  handleCancel,
  exercise,
}) => {
  return (
    <StyledModal
      open={false}
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
      <TimerColumn>
        <GifWrapper>
          <img src="#" alt="exercise" />
        </GifWrapper>
        <TimerWrapper>
          <TimerTitle>Time</TimerTitle>
          <CountdownCircleTimer
            colors={'#E6533C'}
            isPlaying={false}
            duration={120}
            strokeWidth={4}
            trailColor="#EFEDE81A"
            trailStrokeWidth={2}
            rotation="counterclockwise"
          >
            {({ remainingTime }) => (
              <TimeRemaining>{formatTime(remainingTime)}</TimeRemaining>
            )}
          </CountdownCircleTimer>
          <TimerButton type="primary">
            <Icon
              iconWidth={{ mobile: '16px', tablet: '16px' }}
              iconHeight={{ mobile: '16px', tablet: '16px' }}
              name="pause"
            />
          </TimerButton>
          <BurnedCalories>
            Burned calories:<Value>150</Value>
          </BurnedCalories>
        </TimerWrapper>
      </TimerColumn>
      <InfoColumn>
        <InfoWrapper>
          <InfoList>
            <InfoItem>
              <ItemName>Name</ItemName>
              <ItemValue>Air bike</ItemValue>
            </InfoItem>
            <InfoItem>
              <ItemName>Name</ItemName>
              <ItemValue>Air bike</ItemValue>
            </InfoItem>
            <InfoItem>
              <ItemName>Name</ItemName>
              <ItemValue>Air bike</ItemValue>
            </InfoItem>
            <InfoItem>
              <ItemName>Name</ItemName>
              <ItemValue>Air bike</ItemValue>
            </InfoItem>
          </InfoList>
        </InfoWrapper>
        <ButtonWrapper>
          <PrimaryButton text="Add to diary" sizes="small" type="primary" />
        </ButtonWrapper>
      </InfoColumn>
    </StyledModal>
  );
};

export default AddExerciseModal;
