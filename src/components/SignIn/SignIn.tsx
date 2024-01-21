import { useFormik } from 'formik';
import { useAuth } from '../../hooks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  BlockSignUp,
  ContainerSignUp,
  FormContainer,
  ImgSignUp,
  TitleSignUp,
  BtnSignUp,
  WidthInput,
  ParagraphAuth,
  ParagraphAfterBtn,
  LinkAuth
} from '../SignUp/SignUp.styled';
import { InputPrimary } from '../InputPrimary';

import SignInSchema from './SignInSchema';
import imgForWelcomePage from '..//..//assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';
import { loginUser } from '../../redux/auth/operations';
import { AppDispatch } from '../../redux';
import { SignInArgs } from '../../services/apiRequest';

const SignInForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values: SignInArgs, { resetForm }) => {
      await dispatch(loginUser(values));

      const response = await dispatch(loginUser(values));
      const token = (response.payload as { data?: { token: string } })?.data
        ?.token;

      if (token) {
        return navigate('/profile');
      }

      resetForm();
    },
  });

  return (
    <ContainerSignUp>
      <BlockSignUp>
        <TitleSignUp>Sign In</TitleSignUp>
        <ParagraphAuth>Welcome! Please enter your credentials to login to the platform:</ParagraphAuth>
        <FormContainer onSubmit={formik.handleSubmit}>
          <WidthInput>
            <InputPrimary
              bordercolor={
                formik.errors.email && formik.touched.email
                  ? 'error'
                  : 'default'
              }
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </WidthInput>
          {formik.errors.email && formik.touched.email && (
            <div>{formik.errors.email}</div>
          )}
          <WidthInput>
            <InputPrimary
              bordercolor={
                formik.errors.password && formik.touched.password
                  ? 'error'
                  : 'default'
              }
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </WidthInput>
          {formik.errors.password && formik.touched.password && (
            <div>{formik.errors.password}</div>
          )}

          <BtnSignUp htmlType="submit" type="primary" loading={isLoading}>
            Sign In
          </BtnSignUp>
          <ParagraphAfterBtn>Don’t have an account? <LinkAuth to="/signup">Sign Up</LinkAuth></ParagraphAfterBtn>
        </FormContainer>
      </BlockSignUp>
      <ImgSignUp
        src={imgForWelcomePage}
        alt="The girl shows an example of a forward leg kick"
      />
    </ContainerSignUp>
  );
};

export default SignInForm;