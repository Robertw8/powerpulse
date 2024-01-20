import styled from '@emotion/styled';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 48px 24px;
    background-color: #10100f !important;
    border: 1px solid #efede833;

    @media screen and (min-width: 769px) {
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
  color: #efede8;
  font-weight: 700;
  font-size: 24px;
  line-height: calc(32 / 24);
  text-align: center;
`;

const Calories = styled.p`
  margin-top: 15px;
  color: #efede84d;
  font-size: 14px;
  line-height: calc(18 / 14);
`;

const Value = styled.span`
  color: #e6533c;
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
  color: #efede84d;
  font-size: 14px;
  line-height: calc(18 / 14);

  &:hover,
  :focus {
    color: #e6533c;
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
