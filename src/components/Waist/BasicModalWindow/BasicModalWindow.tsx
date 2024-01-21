import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

import {
  Modal,
  MadalContent,
  Image,
  Timer,
  BurnedCal,
  BurnedInformName,
  Ul,
  Li,
  Span,
  P,
  Button,
  Div,
  Btn,
} from './BasicModalWindow.styled';
import { Icon } from '../..';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

let time = 10;

const BasicModalWindow: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  Burned: number;
  Body: string;
  Target: string;
}> = ({ isOpen, onClose, Burned, Body, Target }) => {
  const [pause, setPause] = useState(true);
  const [burned, setBurned] = useState(0);

  // const onWrapperClick = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   if (event.target.classList.contains('modal-wrapper')) onClose();
  // };

  useEffect(() => {
    let intervalId: ReturnType<typeof setTimeout>;

    if (isOpen && pause && burned < Burned) {
      if (burned > Burned) {
        // clearInterval(intervalId);
        return;
      }
      intervalId = setInterval(() => {
        setBurned(() => {
          const coloriy = (time * Burned) / 180;
          const roundedNumber = Math.round(coloriy);
          return roundedNumber;
        });
        time += 10;
      }, 10000);
    }

    return () => clearInterval(intervalId as ReturnType<typeof setTimeout>);
  }, [isOpen, pause, burned, setBurned]);

  useEffect(() => {
    const onKeydownEsc = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeydownEsc);
    return () => {
      window.removeEventListener('keydown', onKeydownEsc);
    };
  }, [onClose]);

  const startPauseTimer = () => {
    setPause(prevPause => !prevPause);
  };

  const namber = 180;

  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        <Modal className="modal-wrapper">
          <MadalContent className="modal-content">
            <Icon
              name="x"
              iconWidth={{ mobile: '22px', tablet: '26px' }}
              iconHeight={{ mobile: '22px', tablet: '26px' }}
            />
            <Div>
              <Image></Image>
              <Timer>
                <CountdownCircleTimer
                  isPlaying={pause}
                  duration={namber}
                  colors={'#E6533C'}
                  // colorsTime={0}
                  size={124}
                  strokeWidth={4}
                  trailColor={'rgba(239, 237, 232, 0.10)'}
                  isGrowing={true}
                  rotation={'counterclockwise'}
                  strokeLinecap={'square'}
                  children={({ remainingTime }) => (
                    <div className="countdown-timer">
                      {`${Math.floor(remainingTime / 60)}:${
                        remainingTime % 60
                      }`}
                    </div>
                  )}
                ></CountdownCircleTimer>
                <Btn type="button" onClick={startPauseTimer}>
                  {pause ? (
                    <Icon
                      iconWidth={{ mobile: '32px', tablet: '32px' }}
                      iconHeight={{ mobile: '32px', tablet: '32px' }}
                      name="play"
                    />
                  ) : (
                    <Icon
                      iconWidth={{ mobile: '32px', tablet: '32px' }}
                      iconHeight={{ mobile: '32px', tablet: '32px' }}
                      name="pause"
                    />
                  )}
                </Btn>
              </Timer>
              <BurnedCal>
                Burned calories: <BurnedInformName>{burned}</BurnedInformName>
              </BurnedCal>
            </Div>
            <Ul>
              <Li>
                <Span>Name</Span>
                <P>{Body}</P>
              </Li>
              <Li>
                <Span>Target</Span>
                <P>{Target}</P>
              </Li>
              <Button type="button">Add to diary</Button>
            </Ul>
          </MadalContent>
        </Modal>
      </Transition>
    </>
  );
};

export default BasicModalWindow;
