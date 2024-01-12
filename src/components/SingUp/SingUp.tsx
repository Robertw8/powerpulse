
import { useFormik } from 'formik';

import imgForWelcomePage from '..//..//assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';
import { BlockSingUp, ContainerSingUp, FormContainer, ImgSingUp, InputSingUp, ParagraphSignUp, TitleSignUp, BtnSingUp } from './SingUp.styled';
import  SignUpSchema  from './SingUpSchema';


const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <ContainerSingUp>
      <BlockSingUp>
        <TitleSignUp>Sign up</TitleSignUp>
        <ParagraphSignUp>
          Thank you for your interest in our platform. To complete the registration process, please provide us with the
          following information.
        </ParagraphSignUp>
        <FormContainer onSubmit={formik.handleSubmit}>
          <InputSingUp
            bordercolor={formik.errors.name && formik.touched.name ? 'error' : 'default'}
            name="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && <div>{formik.errors.name}</div>}

          <InputSingUp
            bordercolor={formik.errors.email && formik.touched.email ? 'error' : 'default'}
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}

          <InputSingUp
            bordercolor={formik.errors.password && formik.touched.password ? 'error' : 'default'}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}

          <BtnSingUp htmlType="submit" type="primary">
            Sign Up
          </BtnSingUp>
        </FormContainer>
      </BlockSingUp>
      <ImgSingUp src={imgForWelcomePage} alt="The girl shows an example of a forward leg kick" />
    </ContainerSingUp>
  );
};

export default SignUpForm;
