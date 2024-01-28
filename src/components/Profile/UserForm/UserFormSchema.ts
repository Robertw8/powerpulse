import { date, number, object, string } from 'yup';

interface FormValues {
  name: string;
  height: string | number;
  currentWeight: string | number;
  desiredWeight: string | number;
  birthday: string;
  blood: 1 | 2 | 3 | 4 | number;
  sex: 'male' | 'female' | string;
  levelActivity: 1 | 2 | 3 | 4 | 5 | string;
}

const schema = object({
  name: string().required('Required field'),
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

export { schema };
export type { FormValues };
