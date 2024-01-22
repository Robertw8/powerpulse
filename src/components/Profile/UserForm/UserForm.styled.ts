import styled from '@emotion/styled';

//ProfilePage style
const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1441px) {
    flex-direction: row-reverse;
    gap: 48px;
  }
`;

const WrapForm = styled.div`
  @media screen and (min-width: 1441px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding: 0 54px 0;
  }
`;

export { Wrap, WrapForm };
