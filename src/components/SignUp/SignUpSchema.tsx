import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'must be at least 2, maximum 50 characters!')
    .required('Required!'),
  email: Yup.string().email().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format').required(),
  password: Yup.string()
    .min(6, 'password is too short - should be 6 characters minimum.')
    .required('Required'),
});

export default SignUpSchema ;