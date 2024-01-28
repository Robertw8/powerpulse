import styled from '@emotion/styled';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import { palette } from '../../../styles';

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 48px 24px;
    background-color: ${palette.colors.bg} !important;
    border: 1px solid ${palette.colors.white20};

    @media screen and (min-width: 768px) {
      padding: 64px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.div`
  margin-top: 5px;

  color: ${palette.colors.white};
  font-weight: 700;
  font-size: 24px;
  line-height: calc(32 / 24);
  text-align: center;
`;

const Calories = styled.p`
  margin-top: 15px;
  color: ${palette.colors.white30};
  font-size: 14px;
  line-height: calc(18 / 14);
`;

const Value = styled.span`
  color: ${palette.colors.orange};
`;

const ButtonWrapper = styled.div`
  margin-top: 25px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;

  font-weight: 'Roboto', sans-serif;
  color: ${palette.colors.white30};
  font-size: 14px;
  line-height: calc(18 / 14);

  &:hover,
  :focus {
    color: ${palette.colors.orange};

    svg {
      stroke: ${palette.colors.orange};
    }
  }
`;

export {
  StyledModal,
  ContentWrapper,
  ModalTitle,
  Calories,
  Value,
  ButtonWrapper,
  StyledLink,
};
