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
  SvgPlay,
  SvgPause,
  Btn,
  Svg,
} from './BasicModalWindow.styled';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import sprite from '../../../assets/images/sprite.svg';

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

  const onWrapperClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target.classList.contains('modal-wrapper')) onClose();
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isOpen && pause && burned < Burned) {
      if (burned > Burned) {
        clearInterval(intervalId as NodeJS.Timeout);
        return;
      }
      intervalId = setInterval(() => {
        setBurned(prevBurned => {
          const coloriy = (time * Burned) / 180;
          const roundedNumber = Math.round(coloriy);
          return roundedNumber;
        });
        time += 10;
      }, 10000);
    }

    return () => clearInterval(intervalId as NodeJS.Timeout);
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
          <Modal
            className='modal-wrapper'
            onClick={onWrapperClick}
          >
              <MadalContent className="modal-content">
                <Svg onClick={() => onClose()}>
                  <use href={`${sprite}#icon-x`}></use>
                </Svg>
                <Div>
                  <Image></Image>
                  <Timer>
                    <CountdownCircleTimer
                      isPlaying={pause}
                      duration={namber}
                      colors={'#E6533C'}
                      colorsTime={0}
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
                        <SvgPlay>
                          <use href={`${sprite}#icon-play`}></use>
                        </SvgPlay>
                      ) : (
                        <SvgPause>
                          <use href={`${sprite}#icon-pause`}></use>
                        </SvgPause>
                      )}
                    </Btn>
                  </Timer>
                  <BurnedCal>
                    Burned calories:{' '}
                    <BurnedInformName>{burned}</BurnedInformName>
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
