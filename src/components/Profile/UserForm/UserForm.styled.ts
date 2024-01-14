import styled from '@emotion/styled';
import { Button } from 'antd';

const Label = styled.label`
  color: rgba(239, 237, 232, 0.5);
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  margin: 0 0 5px;
`;

const TextRadio = styled.span`
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 0 8px;
`;

// const Input = styled.input`
//   display: flex;
//   flex-direction: column;
//   width: 18px;
//   height: 18px;
//   border-radius: 10px;
//   border: 2px solid #636366;

//   &:checked {
//     background: red;
//   }
// `;

const BloodWrap = styled.div`
  display: flex;
  gap: 8px;
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

export { Btn, Label, TextRadio, BloodWrap, Input };
