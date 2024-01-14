import styled from '@emotion/styled';

const CategoryList = styled.div`
    display: flex;
    gap: 28px;
    & :where(.css-dev-only-do-not-override-j48ix5).ant-tabs {
        color: #EFEDE8;
    }
    & :where(.css-dev-only-do-not-override-j48ix5).ant-tabs-top >.ant-tabs-nav, :where(.css-dev-only-do-not-override-j48ix5).ant-tabs-bottom >.ant-tabs-nav, :where(.css-dev-only-do-not-override-j48ix5).ant-tabs-top >div>.ant-tabs-nav, :where(.css-dev-only-do-not-override-j48ix5).ant-tabs-bottom >div>.ant-tabs-nav {
        margin-bottom: 0px;
    }
    & :where(.css-dev-only-do-not-override-j48ix5).ant-tabs-top >.ant-tabs-nav::before, :where(.css-dev-only-do-not-override-j48ix5).ant-tabs-bottom >.ant-tabs-nav::before, :where(.css-dev-only-do-not-override-j48ix5).ant-tabs-top >div>.ant-tabs-nav::before, :where(.css-dev-only-do-not-override-j48ix5).ant-tabs-bottom >div>.ant-tabs-nav::before {
        border-bottom: none;
    }
    & :where(.css-dev-only-do-not-override-j48ix5).ant-tabs .ant-tabs-tab {
        color: rgba(239, 237, 232, 0.30);
    }
    & :where(.css-dev-only-do-not-override-j48ix5).ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: #EFEDE8;
    }
    & :where(.css-dev-only-do-not-override-j48ix5).ant-tabs .ant-tabs-tab+.ant-tabs-tab {
        margin: 0 0 0 28px;
    }
    & :where(.css-dev-only-do-not-override-j48ix5).ant-tabs .ant-tabs-ink-bar {
        height: 4px;
        border-radius: 50px;
    }
    & :where(.css-dev-only-do-not-override-j48ix5).ant-tabs .ant-tabs-tab {
        padding: 8px 0;
    }
    & div.ant-tabs-content-holder {
        display: none;
    }
`

export { CategoryList }