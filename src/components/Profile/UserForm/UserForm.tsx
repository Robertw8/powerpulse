// import { PrimaryButton } from '../..';
import { BloodWrap, Btn, Label, TextRadio } from './UserForm.styled';
import { initialValues, schema } from './UserFormSchema';
import { useFormik } from 'formik';
import { StyledInput } from '../../InputPrimary/InputPrimary.styled';

const UserForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values, action) => {
      console.log('yes');
      console.log(values);
      console.log(action);
    },
  });

  return (
    <>
      <div>
        <Label htmlFor="name">Name</Label>
        <StyledInput
          id="name"
          name="name"
          type="text"
          placeholder="name"
          bordercolor="default"
        />
        <Label htmlFor="email">Email</Label>
        <StyledInput
          id="email"
          name="name"
          type="text"
          placeholder="email"
          bordercolor="default"
        />

        <form onSubmit={formik.handleSubmit}>
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
            <div>{formik.errors.height}</div>
          )}

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
          {formik.errors.currentWeight && formik.touched.currentWeight && (
            <div>{formik.errors.currentWeight}</div>
          )}

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
          {formik.errors.desiredWeight && formik.touched.desiredWeight && (
            <div>{formik.errors.desiredWeight}</div>
          )}

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
            <div>{formik.errors.birthday}</div>
          )}

          <Label>Blood</Label>
          <BloodWrap>
            <label>
              <input
                name="blood"
                type="radio"
                onChange={formik.handleChange}
                value={1}
              />
              <TextRadio>1</TextRadio>
            </label>
            <label>
              <input
                name="blood"
                type="radio"
                onChange={formik.handleChange}
                value={2}
              />
              <TextRadio>2</TextRadio>
            </label>
            <label>
              <input
                name="blood"
                type="radio"
                onChange={formik.handleChange}
                value={3}
              />
              <TextRadio>3</TextRadio>
            </label>
            <label>
              <input
                name="blood"
                type="radio"
                onChange={formik.handleChange}
                value={4}
              />
              <TextRadio>4</TextRadio>
            </label>
            {formik.errors.blood && formik.touched.blood && (
              <div>{formik.errors.blood}</div>
            )}
          </BloodWrap>

          <div>
            <label>
              <input
                name="sex"
                type="radio"
                onChange={formik.handleChange}
                value="male"
              />
              <TextRadio>Male</TextRadio>
            </label>
            <label>
              <input
                name="sex"
                type="radio"
                onChange={formik.handleChange}
                value="female"
              />
              <TextRadio>Female</TextRadio>
            </label>
            {formik.errors.sex && formik.touched.sex && (
              <div>{formik.errors.sex}</div>
            )}
          </div>

          <div>
            <div>
              <label>
                <input
                  name="levelActivity"
                  type="radio"
                  onChange={formik.handleChange}
                  value={1}
                />
                Sedentary lifestyle (little or no physical activity)
              </label>
            </div>
            <div>
              <label>
                <input
                  name="levelActivity"
                  type="radio"
                  onChange={formik.handleChange}
                  value={2}
                />
                Light activity (light exercises/sports 1-3 days per week)
              </label>
            </div>
            <div>
              <label>
                <input
                  name="levelActivity"
                  type="radio"
                  onChange={formik.handleChange}
                  value={3}
                />
                Moderately active (moderate exercises/sports 3-5 days per week)
              </label>
            </div>
            <div>
              <label>
                <input
                  name="levelActivity"
                  type="radio"
                  onChange={formik.handleChange}
                  value={4}
                />
                Very active (intense exercises/sports 6-7 days per week)
              </label>
            </div>
            <div>
              <label>
                <input
                  name="levelActivity"
                  type="radio"
                  onChange={formik.handleChange}
                  value={5}
                />
                Extremely active (very strenuous exercises/sports and physical
                work)
              </label>
            </div>
            {formik.errors.levelActivity && formik.touched.levelActivity && (
              <div>{formik.errors.levelActivity}</div>
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
