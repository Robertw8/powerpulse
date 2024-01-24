import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '')
    .required('❌ Must be at least 2, maximum 50 characters!'),
  email: Yup.string().email().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).required('❌ Invalid email format!'),
  password: Yup.string()
    .min(6, '')
    .required('❌ Password is too short - should be 6 characters minimum!'),
});

export default SignUpSchema ;