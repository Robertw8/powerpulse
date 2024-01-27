import styled from '@emotion/styled';
import { Modal } from 'antd';

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 64px 12px 48px 12px;
    background-color: #10100f !important;
    border: 1px solid #efede833;

    @media screen and (min-width: 375px) {
      padding: 64px 24px 48px 24px;
    }

    @media screen and (min-width: 768px) {
      padding: 64px 32px 48px 32px;
    }
  }
`;

const FormWrapper = styled.div``;

export { StyledModal, FormWrapper };
