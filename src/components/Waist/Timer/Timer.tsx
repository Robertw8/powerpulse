import {
  TimerWrapper,
  TimeRemaining,
  TimerButton,
  TimerTitle,
  BurnedCalories,
  Value,
} from './Timer.styled';
import { Icon } from '../..';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { callToast, formatTime } from '../../../helpers';
import type { Exercise } from '../../../redux/exercises';

interface TimerProps {
  exercise: Exercise;
  isStarted: boolean;
  handleChange: () => void;
  handleStart: () => void;
  burnedCalories: number;
}

const Timer: React.FC<TimerProps> = ({
  exercise,
  isStarted,
  handleChange,
  handleStart,
  burnedCalories,
}) => {
  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      <CountdownCircleTimer
        colors="#E6533C"
        isPlaying={isStarted}
        duration={exercise.time * 60}
        strokeWidth={4}
        trailColor="#EFEDE81A"
        trailStrokeWidth={2}
        rotation="counterclockwise"
        onUpdate={handleChange}
        onComplete={() =>
          callToast(
            'success',
            `You've finished exercise with ${burnedCalories} calories burned. Great work!`,
            10000
          )
        }
      >
        {({ remainingTime }) => (
          <TimeRemaining>{formatTime(remainingTime)}</TimeRemaining>
        )}
      </CountdownCircleTimer>
      <TimerButton type="primary" onClick={handleStart}>
        {!isStarted ? (
          <Icon
            iconWidth={{ mobile: '16px', tablet: '16px' }}
            iconHeight={{
              mobile: '16px',
              tablet: '16px',
            }}
            name="play"
          />
        ) : (
          <Icon
            iconWidth={{ mobile: '16px', tablet: '16px' }}
            iconHeight={{ mobile: '16px', tablet: '16px' }}
            name="pause"
          />
        )}
      </TimerButton>
      <BurnedCalories>
        Burned calories:
        <Value>{burnedCalories}</Value>
      </BurnedCalories>
    </TimerWrapper>
  );
};

export default Timer;
