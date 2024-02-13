import styled from '@emotion/styled';
import { palette } from '../../styles';

const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;

  color: ${palette.colors.white};
  text-decoration: none;
  font-size: 14px;
  line-height: 18px;

  background-color: transparent;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &.desktop {
    @media screen and (max-width: 1440px) {
      display: none;
    }
  }
`;
const Text = styled.span`
  margin-right: 8px;
  color: ${palette.colors.white};
`;

export { LogoutBtn, Text };
