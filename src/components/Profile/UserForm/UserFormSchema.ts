import { date, number, object, string } from 'yup';

interface FormValues {
  // name: string;
  height: number;
  currentWeight: number;
  desiredWeight: number;
  birthday: string;
  blood: null | 1 | 2 | 3 | 4;
  sex: '' | 'male' | 'female';
  levelActivity: null | 1 | 2 | 3 | 4 | 5;
}
//formik initialValues
const initialValues: FormValues = {
  // name: '',
  height: 0,
  currentWeight: 0,
  desiredWeight: 0,
  birthday: '',
  blood: null,
  sex: '',
  levelActivity: null,
};

//yup validation
const schema = object({
  // name: string().required('Required field'),
  height: number().min(150, 'minimum 150(cm)').required('Required field'),
  currentWeight: number().min(35, 'minimum 35(kg)').required('Required field'),
  desiredWeight: number().min(35, 'minimum 35(kg)').required('Required field'),
  birthday: date()
    .max(new Date(Date.now() - 567648000000), 'You must be older than 18 years')
    .required('Required field'),
  blood: number().required('Required field'),
  sex: string().required('Required field'),
  levelActivity: number().required('Required field'),
});

export { initialValues, schema };
