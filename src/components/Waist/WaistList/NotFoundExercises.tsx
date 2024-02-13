import { Message, OrangeText } from './WaistList.styled';

const NotFoundExercises: React.FC = () => {
  return (
    <Message>
      There is <OrangeText> not exercises </OrangeText> downloaded else, please
      try choose this category later
    </Message>
  );
};

export default NotFoundExercises;
