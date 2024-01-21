import React from 'react';
import { useFormik } from 'formik';
import { FormValues, schema } from './UserFormSchema';
import { apiService } from '../../../services';
import useAuth from '../../../hooks/useAuth';
import { callToast } from '../../../helpers';
import { UserFormInput } from './UserFormInput';
import { PrimaryButton } from '../..';

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
  WrapForm,
} from './UserForm.styled';

const UserForm: React.FC = () => {
  const { user } = useAuth();
  // const currentUser = useSelector((state: RootState) => state.auth.user);

  const initialValues: FormValues = {
    name: user?.name || '',
    height: user?.settings?.height || 0,
    currentWeight: user?.settings?.currentWeight || 0,
    desiredWeight: user?.settings?.desiredWeight || 0,
    birthday: user?.settings?.birthday.split('T')[0] || '',
    blood: user?.settings?.blood || null,
    sex: user?.settings?.sex || '',
    levelActivity: user?.settings?.levelActivity || null,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: async values => {
      const userData = {
        name: values.name,
        height: values.height,
        currentWeight: values.currentWeight,
        desiredWeight: values.desiredWeight,
        birthday: values.birthday,
        blood: values.blood,
        sex: values.sex,
        levelActivity: values.levelActivity,
      };

      await apiService(
        {
          method: 'patch',
          url: '/users',
          data: userData,
        },
        error => {
          callToast('error', 'Request error, try again');
          console.log(error);
          return '';
        }
      );
    },
  });

  return (
    <>
      <WrapForm>
        <form onSubmit={formik.handleSubmit}>
          <UserFormInput formik={formik} user={user} />

          <Label>Blood</Label>
          <BlockWrapRadio>
            <RadioWrap>
              <RadioWrapBlock>
                <LableRadio>
                  <Input
                    name="blood"
                    type="radio"
                    onChange={() => formik.setFieldValue('blood', 1)}
                    checked={formik.values.blood === 1}
                    value={1}
                  />
                  <CheckRadio />
                  <TextRadio>1</TextRadio>
                </LableRadio>
                <LableRadio>
                  <Input
                    name="blood"
                    type="radio"
                    onChange={() => formik.setFieldValue('blood', 2)}
                    checked={formik.values.blood === 2}
                    value={2}
                  />
                  <CheckRadio />
                  <TextRadio>2</TextRadio>
                </LableRadio>
                <LableRadio>
                  <Input
                    name="blood"
                    type="radio"
                    onChange={() => formik.setFieldValue('blood', 3)}
                    checked={formik.values.blood === 3}
                    value={3}
                  />
                  <CheckRadio />
                  <TextRadio>3</TextRadio>
                </LableRadio>
                <LableRadio>
                  <Input
                    name="blood"
                    type="radio"
                    onChange={() => formik.setFieldValue('blood', 4)}
                    checked={formik.values.blood === 4}
                    value={4}
                  />
                  <CheckRadio />
                  <TextRadio>4</TextRadio>
                </LableRadio>
              </RadioWrapBlock>
              {formik.errors.blood && formik.touched.blood && (
                <ErrorText>{formik.errors.blood}</ErrorText>
              )}
            </RadioWrap>

            <RadioWrap>
              <RadioWrapBlock>
                <LableRadio>
                  <Input
                    name="sex"
                    type="radio"
                    onChange={formik.handleChange}
                    checked={formik.values.sex === 'male'}
                    value="male"
                  />
                  <CheckRadio />
                  <TextRadio>Male</TextRadio>
                </LableRadio>
                <LableRadio>
                  <Input
                    name="sex"
                    type="radio"
                    onChange={formik.handleChange}
                    checked={formik.values.sex === 'female'}
                    value="female"
                  />
                  <CheckRadio />
                  <TextRadio>Female</TextRadio>
                </LableRadio>
              </RadioWrapBlock>
              {formik.errors.sex && formik.touched.sex && (
                <ErrorText>{formik.errors.sex}</ErrorText>
              )}
            </RadioWrap>
          </BlockWrapRadio>

          <div>
            <div>
              <LableRadio>
                <Input
                  name="levelActivity"
                  type="radio"
                  onChange={() => formik.setFieldValue('levelActivity', 1)}
                  checked={formik.values.levelActivity === 1}
                  value={1}
                />
                <CheckRadio />
                <TextRadio>
                  Sedentary lifestyle (little or no physical activity)
                </TextRadio>
              </LableRadio>
            </div>
            <div>
              <LableRadio>
                <Input
                  name="levelActivity"
                  type="radio"
                  onChange={() => formik.setFieldValue('levelActivity', 2)}
                  checked={formik.values.levelActivity === 2}
                  value={2}
                />
                <CheckRadio />
                <TextRadio>
                  Light activity (light exercises/sports 1-3 days per week)
                </TextRadio>
              </LableRadio>
            </div>
            <div>
              <LableRadio>
                <Input
                  name="levelActivity"
                  type="radio"
                  onChange={() => formik.setFieldValue('levelActivity', 3)}
                  checked={formik.values.levelActivity === 3}
                  value={3}
                />
                <CheckRadio />
                <TextRadio>
                  Moderately active (moderate exercises/sports 3-5 days per
                  week)
                </TextRadio>
              </LableRadio>
            </div>
            <div>
              <LableRadio>
                <Input
                  name="levelActivity"
                  type="radio"
                  onChange={() => formik.setFieldValue('levelActivity', 4)}
                  checked={formik.values.levelActivity === 4}
                  value={4}
                />
                <CheckRadio />
                <TextRadio>
                  Very active (intense exercises/sports 6-7 days per week)
                </TextRadio>
              </LableRadio>
            </div>
            <div>
              <LableRadio>
                <Input
                  name="levelActivity"
                  type="radio"
                  onChange={() => formik.setFieldValue('levelActivity', 5)}
                  value={5}
                />
                <CheckRadio />
                <TextRadio>
                  Extremely active (very strenuous exercises/sports and physical
                  work)
                </TextRadio>
              </LableRadio>
            </div>
            {formik.errors.levelActivity && formik.touched.levelActivity && (
              <ErrorText>{formik.errors.levelActivity}</ErrorText>
            )}
          </div>
          <BtnWrap>
            <PrimaryButton
              htmlType="submit"
              type="primary"
              text="Save"
              sizes="extraSmall"
              disabled={!formik.dirty} // disabled={!(formik.isValid && formik.dirty)}
            />
          </BtnWrap>
        </form>
      </WrapForm>
    </>
  );
};

export default UserForm;
