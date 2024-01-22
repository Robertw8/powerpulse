import React, { useEffect, useState } from 'react'; 
import { Transition } from 'react-transition-group'; 
import {  
  Modale, 
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
import sprite from '../../assets/images/sprite.svg'; 
import { CountdownCircleTimer } from 'react-countdown-circle-timer'; 
 
interface BasicModalWindowProps { 
  isOpen: boolean; 
  onClose: () => void; 
  onOpen: () => void; 
  Burned: number; 
  Body: string; 
  Target: string; 
  burned: number; 
  setBurned: React.Dispatch<React.SetStateAction<number>>; 
} 
 
let time = 10; 
 
const BasicModalWindow: React.FC<BasicModalWindowProps> = ({ 
  isOpen, 
  onClose, 
  onOpen, 
  Burned, 
  Body, 
  Target, 
  burned, 
  setBurned, 
}) => { 
  const [pause, setPause] = useState(true); 
 
  const onWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => { 
    if ((event.target as HTMLElement).classList.contains('modal-wrapper')) onClose(); 
  }; 
 
  useEffect(() => { 
    let intervalId: NodeJS.Timeout | null = null; 
 
    if (isOpen && pause && burned < Burned) { 
      intervalId = setInterval(() => { 
        setBurned((prevBurned) => { 
          const coloriy = (time * Burned) / 180; 
          const roundedNumber = Math.round(coloriy); 
          return roundedNumber; 
        }); 
        time += 10; 
      }, 10000); 
    } 
 
    return () => clearInterval(intervalId!); 
  }, [isOpen, pause, burned, setBurned, Burned]); 
 
  useEffect(() => { 
    const onKeydownEsc = (e: KeyboardEvent) => { 
      if (e.code === 'Escape') onClose(); 
    }; 
    window.addEventListener('keydown', onKeydownEsc); 
    return () => { 
      window.removeEventListener('keydown', onKeydownEsc); 
    }; 
  }, [onClose]); 
 
  const startPauseTimer = () => { 
    setPause((prevPause) => !prevPause); 
  }; 
 
  const openModal = () => { 
    onOpen(); 
    onClose(); 
  }; 
 
  const namber = 180; 
 
  return ( 
    <> 
      {/* <StyledModal> */} 
      <Transition in={isOpen} timeout={350} unmountOnExit={true}> 
        <Modale className="modal-wrapper" onClick={onWrapperClick}> 
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
                      {`${Math.floor(remainingTime / 60)}:${remainingTime % 60}`} 
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
                Burned calories: <BurnedInformName>{burned}</BurnedInformName> 
              </BurnedCal> 
            </Div> 
            <Ul> 
              <Li> 
                <Span>Name</Span> 
                <P>Air bike</P> 
              </Li> 
              <Li> 
                <Span>Target</Span> 
                <P>{Target}</P> 
              </Li> 
              <Li>
                <Span>Body Part</Span> 
                <P>{Body}</P> 
              </Li> 
              <Li> 
                <Span>Equipment</Span> 
                <P>Body weight</P> 
              </Li> 
              <Button type="button" onClick={openModal}> 
                Add to diary 
              </Button> 
              {/* <AddExerciseSuccess 
                isOpen={modalOpen} 
                onClose={()=> setModalOpen(false)} 
                calories={burned} 
              /> */} 
            </Ul> 
          </MadalContent> 
        </Modale> 
      </Transition> 
      {/* </StyledModal> */} 
    </> 
  ); 
}; 
 
export default BasicModalWindow;