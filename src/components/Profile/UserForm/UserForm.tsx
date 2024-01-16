// import { PrimaryButton } from '../..';
import {
  RadioWrap,
  Btn,
  Label,
  TextRadio,
  Input,
  CheckRadio,
  LableRadio,
  BlockWrapRadio,
  BlockWrapInput,
  LabelWrap,
  LabelWrapBlock,
  ErrorText,
  RadioWrapBlock,
} from './UserForm.styled';
import { initialValues, schema } from './UserFormSchema';
import { useFormik } from 'formik';
import { StyledInput } from '../../InputPrimary/InputPrimary.styled';
import { apiService } from '../../../services';

const UserForm = () => {
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

      try {
        const { data } = await apiService({
          method: 'patch',
          url: '/users',
          data: userData,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <BlockWrapInput>
            <LabelWrap>
              <Label htmlFor="name">Name</Label>
              <StyledInput
                id="name"
                name="name"
                type="text"
                placeholder="name"
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
                placeholder="email"
                bordercolor="default"
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
                  placeholder="0"
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
                  placeholder="0"
                  onChange={formik.handleChange}
                  value={formik.values.currentWeight}
                />
                {formik.errors.currentWeight &&
                  formik.touched.currentWeight && (
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
                  placeholder="0"
                  onChange={formik.handleChange}
                  value={formik.values.desiredWeight}
                />
                {formik.errors.desiredWeight &&
                  formik.touched.desiredWeight && (
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
                  placeholder="0"
                  onChange={formik.handleChange}
                  value={formik.values.birthday}
                />
                {formik.errors.birthday && formik.touched.birthday && (
                  <ErrorText>{formik.errors.birthday}</ErrorText>
                )}
              </LabelWrap>
            </LabelWrapBlock>
          </BlockWrapInput>

          <Label>Blood</Label>
          <BlockWrapRadio>
            <RadioWrap>
              <RadioWrapBlock>
                <LableRadio>
                  <Input
                    name="blood"
                    type="radio"
                    onChange={() => formik.setFieldValue('blood', 1)}
                    // checked={formik.values.blood === 1}
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
                    // checked={formik.values.blood === 2}
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
                    // checked={formik.values.blood === 3}
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
                    // checked={formik.values.blood === 4}
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

          {/* <PrimaryButton type="primary" text="Save" sizes="extraSmall" /> */}
          <Btn htmlType="submit" type="primary">
            Save
          </Btn>
        </form>
      </div>
    </>
  );
};

export default UserForm;
