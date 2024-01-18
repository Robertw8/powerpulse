import { date, number, object, string } from 'yup';

interface FormValues {
  name: string;
  height: string | number;
  currentWeight: string | number;
  desiredWeight: string | number;
  birthday: string;
  blood: 1 | 2 | 3 | 4 | string | null; // От це треба переробити якось бо в UserForm TS сварився що невідома строка не може бути присвоєна типу 1 | 2 | 3 | 4 | null, тепер помилок нема але і 1 | 2 | 3 | 4 тепер марний
  sex: '' | 'male' | 'female' | string; // Тут те ж саме
  levelActivity: 1 | 2 | 3 | 4 | 5 | string | null; // І тут те ж саме
}

//yup validation
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
