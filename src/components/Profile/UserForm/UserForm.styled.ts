import styled from '@emotion/styled';
import { Button } from 'antd';

const Label = styled.label`
  color: rgba(239, 237, 232, 0.5);
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  margin: 0 0 5px;
`;

const BloodWrap = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  /* height: 30px; */
`;

const LableRadio = styled.label`
  display: flex;
  height: 20px;
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
    border: 2px solid #ef8964;
  }
  &:checked + span:after {
    opacity: 1;
  }
`;

const CheckRadio = styled.span`
  top: 0px;
  left: 0px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 2px solid #9a9a9a;
  border-radius: 50%;
  display: flex;
  position: relative;
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #ef8964;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`;

const TextRadio = styled.span`
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 0 8px;
`;

const Btn = styled(Button)`
  width: 115px;
  height: 42px;
  border: none;
  background-color: #e6533c;
  color: #efede8;
  margin-top: 64px;
  // padding: 12px 40px;

  &:hover,
  &:focus {
    background-color: #ef8964;
  }
`;

export { Btn, Label, TextRadio, BloodWrap, Input, CheckRadio, LableRadio };
