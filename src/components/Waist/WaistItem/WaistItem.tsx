import {
  BtnLabel,
  BtnWrapper,
  CardLabel,
  ExercisesTitleBox,
  List,
  ListItem,
  ListItemValue,
  SpanExerciseRun,
  SvgExercise,
  SvgExerciseRun,
  Title,
  WaistItemLi,
} from './WaistItem.styled';
import sprite from '../../../assets/images/sprite.svg';

interface List {
  [key: string]: string;
}

interface Texts {
  cardLabel: string;
  btnLabel: string;
  list: List;
}

const texts: Texts = {
  cardLabel: 'Workout',
  btnLabel: 'Start',
  list: {
    burnedCalories: 'Burned calories:',
    bodyPart: 'Body part:',
    target: 'Target:',
  },
};
const WaistItem = () => {
  return (
    <>
      <WaistItemLi>
        <BtnWrapper>
          <CardLabel>{texts.cardLabel}</CardLabel>
          <BtnLabel type="button">
            {texts.btnLabel}
            <span>
              <SvgExercise>
                <use href={`${sprite}#icon-arrow-right`}></use>
              </SvgExercise>
            </span>
          </BtnLabel>
        </BtnWrapper>
        <ExercisesTitleBox>
          <SpanExerciseRun>
            <SvgExerciseRun width={24} height={24}>
              <use href={`${sprite}#icon-running`}></use>
              <use href={`${sprite}#icon-running-figure`}></use>
            </SvgExerciseRun>
          </SpanExerciseRun>
          <Title> Air bike</Title>
        </ExercisesTitleBox>

        <List>
          {Object.keys(texts.list).map(e => (
            <ListItem key={e}>
              {texts.list[e]}
              <ListItemValue>Data</ListItemValue>
            </ListItem>
          ))}
        </List>
      </WaistItemLi>
    </>
  );
};

export default WaistItem;

