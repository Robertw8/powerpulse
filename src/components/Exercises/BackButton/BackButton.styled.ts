import styled from '@emotion/styled';

const BackBtn = styled.button`
  position: absolute;
  top: 0;
  z-index: 1;
  padding: 10px 0 16px;
  border: none;

  display: flex;
  gap: 8px;
  align-items: center;

  background-color: transparent;
  color: rgba(239, 237, 232, 0.4);
  transition-duration: 300ms;

  @media screen and (min-width: 768px) {
    padding: 32px 0 16px;
  }

  & {
    svg {
      transform: rotate(180deg);
    }
  }

  :hover {
    color: #e6533c;
    & svg {
      stroke: #e6533c;
    }
  }
`;
export { BackBtn };
