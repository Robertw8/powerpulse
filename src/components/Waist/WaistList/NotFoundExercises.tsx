import { Message, OrangeText } from './WaistList.styled';

const NotFoundExercises: React.FC = () => {
  return (
    <>
      <Message>
        There is <OrangeText> not exercises </OrangeText> downloaded else,
        plaese try choose this categorie later
      </Message>
    </>
  );
};

export default NotFoundExercises;
