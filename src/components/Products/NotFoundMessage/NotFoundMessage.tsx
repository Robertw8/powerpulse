import { Message, OrangeText } from './NotFoundMessage.styled';

const NotFoundMessage: React.FC = () => {
  return (
    <>
      <Message>
        <OrangeText>Sorry, no results were found</OrangeText> for the product
        filters you selected. You may want to consider other search options to
        find the product you want. Our range is wide and you have the
        opportunity to find more options that suit your needs.
      </Message>
      <OrangeText>Try changing the search parameters.</OrangeText>
    </>
  );
};

export default NotFoundMessage;
