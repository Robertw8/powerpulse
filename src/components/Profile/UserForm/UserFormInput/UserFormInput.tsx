import React from 'react';
import {
  BlockWrapInput,
  Label,
  ErrorText,
  LabelWrap,
  LabelWrapBlock,
} from './UserFormInput.styled';
import { StyledInput } from '../../../InputPrimary/InputPrimary.styled';
import { User } from '../../../../redux/auth/types';
import { FormikValues } from 'formik';
// import { DatePicker } from 'antd';

const UserFormInput: React.FC<{ formik: FormikValues; user: User }> = ({
  formik,
  user,
}) => {
  return (
    <>
      <BlockWrapInput>
        <LabelWrap>
          <Label htmlFor="name">Name</Label>
          <StyledInput
            id="name"
            name="name"
            type="text"
            bordercolor="default"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </LabelWrap>
        <LabelWrap>
          <Label htmlFor="email">Email</Label>
          <StyledInput
            id="email"
            name="email"
            type="text"
            placeholder={user.email}
            bordercolor="default"
            disabled
          />
        </LabelWrap>
      </BlockWrapInput>
      <BlockWrapInput>
        <LabelWrapBlock>
          <LabelWrap>
            <Label htmlFor="height">Height</Label>
            <StyledInput
              bordercolor={
                formik.errors.height && formik.touched.height
                  ? 'error'
                  : 'default'
              }
              id="height"
              name="height"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.height}
            />
            {formik.errors.height && formik.touched.height && (
              <ErrorText>{formik.errors.height}</ErrorText>
            )}
          </LabelWrap>

          <LabelWrap>
            <Label htmlFor="currentWeight">Current Weight</Label>
            <StyledInput
              bordercolor={
                formik.errors.currentWeight && formik.touched.currentWeight
                  ? 'error'
                  : 'default'
              }
              id="currentWeight"
              name="currentWeight"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.currentWeight}
            />
            {formik.errors.currentWeight && formik.touched.currentWeight && (
              <ErrorText>{formik.errors.currentWeight}</ErrorText>
            )}
          </LabelWrap>
        </LabelWrapBlock>
        <LabelWrapBlock>
          <LabelWrap>
            <Label htmlFor="desiredWeight">Desired Weight</Label>
            <StyledInput
              bordercolor={
                formik.errors.desiredWeight && formik.touched.desiredWeight
                  ? 'error'
                  : 'default'
              }
              id="desiredWeight"
              name="desiredWeight"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.desiredWeight}
            />
            {formik.errors.desiredWeight && formik.touched.desiredWeight && (
              <ErrorText>{formik.errors.desiredWeight}</ErrorText>
            )}
          </LabelWrap>
          <LabelWrap>
            <Label htmlFor="birthday">Date of birth</Label>
            <StyledInput
              bordercolor={
                formik.errors.birthday && formik.touched.birthday
                  ? 'error'
                  : 'default'
              }
              id="birthday"
              name="birthday"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.birthday}
            />

            {/* <DatePicker
              id="birthday"
              name="birthday"
              // type="date"
              size="large"
              onChange={formik.handleChange}
              // value={formik.values.birthday}
            /> */}

            {formik.errors.birthday && formik.touched.birthday && (
              <ErrorText>{formik.errors.birthday}</ErrorText>
            )}
          </LabelWrap>
        </LabelWrapBlock>
      </BlockWrapInput>
    </>
  );
};

export default UserFormInput;
