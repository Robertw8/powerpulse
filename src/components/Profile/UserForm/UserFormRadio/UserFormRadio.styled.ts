import styled from '@emotion/styled';
import { palette } from '../../../../styles';

const Label = styled.label`
  display: inline-block;
  margin: 0 0 5px;

  color: ${palette.colors.white40};
  font-size: ${palette.fontSizes.caption}px;
  line-height: 18px;

  @media screen and (min-width: 769px) {
    font-size: ${palette.fontSizes.tiny}px;
    margin: 0 0 8px;
  }
`;

const BlockWrapRadio = styled.div`
  display: flex;
  gap: 21px;
  margin: 0 0 32px;
`;

const RadioWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioWrapBlock = styled.div`
  position: relative;
  gap: 8px;
  display: flex;
  flex-direction: row;
`;

const LableRadio = styled.label`
  display: flex;
  padding: 3px 0;
  align-items: center;

  @media screen and (min-width: 769px) {
    align-items: normal;
  }
`;

const Input = styled.input`
  position: relative;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + span {
    border: 2px solid ${palette.colors.lightOrange};
  }

  &:checked + span:after {
    opacity: 1;
  }
`;

const CheckRadio = styled.span`
  position: relative;
  top: 2px;
  left: 0px;

  width: 18px;
  height: 18px;
  border: 2px solid ${palette.colors.white40};

  cursor: pointer;
  border-radius: 50%;
  display: flex;

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;

    width: 10px;
    height: 10px;

    background: ${palette.colors.lightOrange};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`;

const ErrorText = styled.div`
  margin: 5px 0 0;
  color: ${palette.colors.red};
  font-size: ${palette.fontSizes.caption}px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12px;
`;

const TextRadio = styled.span`
  margin: 3px 0 0 8px;
  color: ${palette.colors.white};
  font-size: ${palette.fontSizes.tiny}px;
  line-height: 18px;

  @media screen and (min-width: 769px) {
    font-size: ${palette.fontSizes.default}px;
    line-height: 24px;
    margin: 0 0 0 8px;
  }
`;

const BtnWrap = styled.div`
  margin: 38px 0;

  @media screen and (min-width: 769px) {
    margin: 48px 0;
  }
`;

export {
  BtnWrap,
  Label,
  TextRadio,
  RadioWrap,
  Input,
  CheckRadio,
  LableRadio,
  BlockWrapRadio,
  ErrorText,
  RadioWrapBlock,
};
