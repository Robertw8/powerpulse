import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
 
  email: Yup.string().email().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format').required(),
  password: Yup.string()
    .min(6, 'password is too short - should be 6 characters minimum.')
    .required('Required'),
});

export default SignInSchema ;