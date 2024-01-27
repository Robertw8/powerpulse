import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required('❌ Invalid email format'),
  password: Yup.string()
    .min(6)
    .required('❌ Password is too short - should be 6 characters minimum'),
});

export default SignInSchema;
