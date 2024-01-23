import styled from '@emotion/styled';

const ProductsWrapper = styled.div``;

const BackgroundImage = styled.div`
  @media screen and (max-width: 1439px) {
    display: none;
  }

  position: absolute;
  top: 11%;
  right: 0;
  z-index: -9999;

  width: 35%;
  height: 100%;
`;

const ProductsTitleRow = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

export { ProductsWrapper, BackgroundImage, ProductsTitleRow };
