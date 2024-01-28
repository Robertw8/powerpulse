import { useAuth } from '../../../../hooks';

import {
  RadioWrap,
  BtnWrap,
  Label,
  TextRadio,
  Input,
  CheckRadio,
  LableRadio,
  BlockWrapRadio,
  ErrorText,
  RadioWrapBlock,
} from './UserFormRadio.styled';
import { PrimaryButton } from '../../..';

import { FormikValues } from 'formik';

const bloodUser = [1, 2, 3, 4];
const sexUser = ['Male', 'Female'];
const levelActivityUser = [
  'Sedentary lifestyle (little or no physical activity)',
  'Light activity (light exercises/sports 1-3 days per week)',
  'Moderately active (moderate exercises/sports 3-5 days per week)',
  'Very active (intense exercises/sports 6-7 days per week)',
  'Extremely active (very strenuous exercises/sports and physical work)',
];

const UserFormRadio: React.FC<FormikValues> = ({ formik }) => {
  const { isLoading } = useAuth();

  return (
    <>
      <Label>Blood</Label>
      <BlockWrapRadio>
        <RadioWrap>
          <RadioWrapBlock>
            {bloodUser.map((itm, idx) => (
              <LableRadio key={idx}>
                <Input
                  name="blood"
                  type="radio"
                  onChange={() => formik.setFieldValue('blood', itm)}
                  checked={formik.values.blood === itm}
                  value={itm}
                />
                <CheckRadio />
                <TextRadio>{itm}</TextRadio>
              </LableRadio>
            ))}
          </RadioWrapBlock>
          {formik.errors.blood && formik.touched.blood && (
            <ErrorText>{formik.errors.blood}</ErrorText>
          )}
        </RadioWrap>

        <RadioWrap>
          <RadioWrapBlock>
            {sexUser.map((itm, idx) => (
              <LableRadio key={idx}>
                <Input
                  name="sex"
                  type="radio"
                  onChange={formik.handleChange}
                  checked={formik.values.sex === itm.toLowerCase()}
                  value={itm.toLowerCase()}
                />
                <CheckRadio />
                <TextRadio>{itm}</TextRadio>
              </LableRadio>
            ))}
          </RadioWrapBlock>
          {formik.errors.sex && formik.touched.sex && (
            <ErrorText>{formik.errors.sex}</ErrorText>
          )}
        </RadioWrap>
      </BlockWrapRadio>

      <div>
        {levelActivityUser.map((itm, idx) => (
          <LableRadio key={idx}>
            <Input
              name="levelActivity"
              type="radio"
              onChange={() => formik.setFieldValue('levelActivity', idx + 1)}
              checked={formik.values.levelActivity === idx + 1}
              value={idx + 1}
            />
            <CheckRadio />
            <TextRadio>{itm}</TextRadio>
          </LableRadio>
        ))}
      </div>
      {formik.errors.levelActivity && formik.touched.levelActivity && (
        <ErrorText>{formik.errors.levelActivity}</ErrorText>
      )}

      <BtnWrap>
        <PrimaryButton
          htmlType="submit"
          type="primary"
          text="Save"
          sizes="extraSmall"
          disabled={!formik.dirty}
          loading={isLoading}
        />
      </BtnWrap>
    </>
  );
};

export default UserFormRadio;
