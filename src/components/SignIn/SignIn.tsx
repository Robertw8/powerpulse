import { useFormik } from 'formik';
import imgForWelcomePage from '..//..//assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';
import { BlockSignUp, ContainerSignUp, FormContainer, ImgSignUp, TitleSignUp, BtnSignUp, WidthInput } from '../SignUp/SignUp.styled';
import SignInSchema from './SignInSchema';
import { StyledInput } from '../InputPrimary/InputPrimary.styled';
import { loginUser } from '..//..//redux/auth/SignUp/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const setToken = (token) => {
    localStorage.setItem('token', token);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await dispatch(loginUser(values));
        const token = response.payload.data.token;
      if (token) {
        setToken(token);
        return navigate('/profile');
       }
        resetForm();
      } catch (error) {
        console.error('Вхід не вдається', error);
      }
    },
  });

  return (
    <ContainerSignUp>
      <BlockSignUp>
        <TitleSignUp>Sign In</TitleSignUp>
        <FormContainer onSubmit={formik.handleSubmit}>
          <WidthInput>
            <StyledInput
              bordercolor={formik.errors.email && formik.touched.email ? 'error' : 'default'}
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </WidthInput>
          {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
          <WidthInput>
            <StyledInput
              bordercolor={formik.errors.password && formik.touched.password ? 'error' : 'default'}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </WidthInput>
          {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}

          <BtnSignUp htmlType="submit" type="primary">
            Sign In
          </BtnSignUp>
        </FormContainer>
      </BlockSignUp>
      <ImgSignUp src={imgForWelcomePage} alt="The girl shows an example of a forward leg kick" />
    </ContainerSignUp>
  );
};

export default SignInForm;
