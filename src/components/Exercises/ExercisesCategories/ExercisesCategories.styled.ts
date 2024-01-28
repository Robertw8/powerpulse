import styled from '@emotion/styled';

const CategoryList = styled.div`
  display: flex;
  gap: 28px;

  & .ant-tabs {
    color: #efede8;
  }
  .ant-tabs-nav {
    margin-bottom: 0px;
  }
  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs .ant-tabs-tab {
    color: rgba(239, 237, 232, 0.3);
    padding: 8px 0;
  }
  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #efede8;
  }
  .ant-tabs .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 0 0 28px;
  }
  .ant-tabs .ant-tabs-ink-bar {
    height: 4px;
    border-radius: 50px;
  }
  div.ant-tabs-content-holder {
    display: none;
  }
`;

export { CategoryList };
