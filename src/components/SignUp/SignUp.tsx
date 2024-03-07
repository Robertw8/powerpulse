import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';

import {
  BlockSignUp,
  ContainerSignUp,
  FormContainer,
  ParagraphAuth,
  TitleSignUp,
  BtnSignPage,
  WidthInput,
  ParagraphAfterBtn,
  LinkAuth,
  InputAuth,
  InputPassword,
  ColorErrorInput,
  StatisticsWrapper,
  ImgSignUp,
} from './SignUp.styled';
import { Statistics } from '../Statistics';

import SignUpSchema from './SignUpSchema';
import { registerUser } from '../../redux/auth';
import routes from '../../routes';

import type { AppDispatch } from '../../redux';
import type { SignUpArgs } from '../../services';

const SignUp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values: SignUpArgs) => {
      const response = await dispatch(registerUser(values));
      if (response) {
        navigate(routes.PROFILE);
      }
    },
  });

  return (
    <ContainerSignUp>
      <BlockSignUp>
        <TitleSignUp>Sign Up</TitleSignUp>
        <ParagraphAuth>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </ParagraphAuth>
        <FormContainer onSubmit={formik.handleSubmit}>
          <WidthInput>
            <InputAuth
              bordercolor={
                formik.errors.name && formik.touched.name ? 'error' : 'default'
              }
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && (
              <ColorErrorInput>{formik.errors.name}</ColorErrorInput>
            )}
            <InputAuth
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

            {formik.errors.email && formik.touched.email && (
              <ColorErrorInput>{formik.errors.email}</ColorErrorInput>
            )}

            <InputPassword
              bordercolor={
                formik.errors.email && formik.touched.email
                  ? 'error'
                  : 'default'
              }
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <ColorErrorInput>{formik.errors.password}</ColorErrorInput>
            )}
          </WidthInput>
          <BtnSignPage htmlType="submit" type="primary" loading={isLoading}>
            Sign Up
          </BtnSignPage>
        </FormContainer>
        <ParagraphAfterBtn>
          Already have an account? <LinkAuth to="/signin">Sign In</LinkAuth>
        </ParagraphAfterBtn>
      </BlockSignUp>
      <ImgSignUp>
      <StatisticsWrapper>
        <Statistics />
      </StatisticsWrapper>
        </ImgSignUp>
    </ContainerSignUp>
  );
};

export default SignUp;
