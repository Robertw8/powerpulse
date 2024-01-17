import { Transition } from 'react-transition-group';
import {
  Modal,
  MadalWrapper,
  MadalContent,
  Image,
  Timer,
  BurnedCal,
  BurnedInformName,
} from './BasicModalWindow.styled';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export const BasicModalWindow = ({
  isOpen,
  onClose,
  //   bodyPart,
  burnedCalories,
  //   target,
}) => {
  const onWrapperClick = event => {
    if (event.target.classList.contains('modal-wrapper')) onClose();
  };
  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {state => (
          <Modal className={`modal--${state}`}>
            <MadalWrapper className="modal-wrapper" onClick={onWrapperClick}>
              <MadalContent className="modal-content">
                <Image></Image>
                <Timer>
                  <CountdownCircleTimer
                    isPlaying
                    duration={50}
                    colors={'#E6533C'}
                    // colorsTime={0}
                    size={124}
                    strokeWidth={4}
                    trailColor={'rgba(239, 237, 232, 0.10)'}
                    children={({ remainingTime }) => (
                      <div className="countdown-timer">
                        {`${Math.floor(remainingTime / 60)}:${
                          remainingTime % 60
                        }`}
                      </div>
                    )}
                  ></CountdownCircleTimer>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M4.5 10.4C4.5 8.15979 4.5 7.03969 4.93597 6.18404C5.31947 5.43139 5.93139 4.81947 6.68404 4.43597C7.53969 4 8.65979 4 10.9 4H22.1C24.3402 4 25.4603 4 26.316 4.43597C27.0686 4.81947 27.6805 5.43139 28.064 6.18404C28.5 7.03969 28.5 8.15979 28.5 10.4V21.6C28.5 23.8402 28.5 24.9603 28.064 25.816C27.6805 26.5686 27.0686 27.1805 26.316 27.564C25.4603 28 24.3402 28 22.1 28H10.9C8.65979 28 7.53969 28 6.68404 27.564C5.93139 27.1805 5.31947 26.5686 4.93597 25.816C4.5 24.9603 4.5 23.8402 4.5 21.6V10.4Z"
                      fill="#E6533C"
                      stroke="#E6533C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.168 20V12M19.8346 20V12"
                      stroke="#EFEDE8"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Timer>
                <BurnedCal>
                  Burned calories:{' '}
                  <BurnedInformName>{burnedCalories}</BurnedInformName>
                </BurnedCal>
              </MadalContent>
            </MadalWrapper>
          </Modal>
        )}
      </Transition>
    </>
  );
};
