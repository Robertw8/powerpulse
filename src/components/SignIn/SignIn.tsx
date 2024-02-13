import { useFormik } from 'formik';
import { useAuth } from '../../hooks';
import { useDispatch } from 'react-redux';

import {
  BlockSignUp,
  ContainerSignUp,
  FormContainer,
  BtnSignUp,
  LinkAuth,
  InputPassword,
  ColorErrorInput,
} from '../SignUp/SignUp.styled';
import {
  BlockInput,
  ParagraphAfterBtnUp,
  ParagraphSignIn,
  TitleSignIn,
  StatisticsWrapper,
} from './SignIn.styled';
import { InputPrimary } from '..';
import { AuthImg } from '../Welcome/WelcomeImg';
import { Statistics } from '../Statistics';

import SignInSchema from './SignInSchema';
import { loginUser } from '../../redux/auth';
import type { SignInArgs } from '../../services';
import type { AppDispatch } from '../../redux';

const SignIn: React.FC = () => {
  const { isLoading } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values: SignInArgs) => {
      await dispatch(loginUser(values));
    },
  });

  return (
    <ContainerSignUp>
      <BlockSignUp>
        <TitleSignIn>Sign In</TitleSignIn>
        <ParagraphSignIn>
          Welcome! Please enter your credentials to login to the platform:
        </ParagraphSignIn>
        <FormContainer onSubmit={formik.handleSubmit}>
          <BlockInput>
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
            {formik.errors.email && formik.touched.email && (
              <ColorErrorInput>{formik.errors.email}</ColorErrorInput>
            )}
            <InputPassword
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
            {formik.errors.password && formik.touched.password && (
              <ColorErrorInput>{formik.errors.password}</ColorErrorInput>
            )}
          </BlockInput>

          <BtnSignUp htmlType="submit" type="primary" loading={isLoading}>
            Sign In
          </BtnSignUp>
          <ParagraphAfterBtnUp>
            Don’t have an account? <LinkAuth to="/signup">Sign Up</LinkAuth>
          </ParagraphAfterBtnUp>
        </FormContainer>
      </BlockSignUp>
      <AuthImg />
      <StatisticsWrapper>
        <Statistics />
      </StatisticsWrapper>
    </ContainerSignUp>
  );
};

export default SignIn;
