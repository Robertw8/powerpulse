import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks';

import { UserFormInput } from './UserFormInput';
import { UserFormRadio } from './UserFormRadio';
import { WrapForm } from './UserForm.styled';

import { AppDispatch } from '../../../redux';
import { FormValues, schema } from './UserFormSchema';
import { getCurrentUser, getUserValue } from '../../../redux/auth';

const UserForm: React.FC = () => {
  const { user } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: FormValues = {
    name: user?.name || '',
    height: user?.settings?.height || 0,
    currentWeight: user?.settings?.currentWeight || 0,
    desiredWeight: user?.settings?.desiredWeight || 0,
    birthday: user?.settings?.birthday.split('T')[0] || '1990-01-01',
    blood: user?.settings?.blood || 0,
    sex: user?.settings?.sex || '',
    levelActivity: user?.settings?.levelActivity || '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: async values => {
      const userData = {
        name: values.name,
        height: values.height,
        currentWeight: values.currentWeight,
        desiredWeight: values.desiredWeight,
        birthday: values.birthday,
        blood: values.blood,
        sex: values.sex,
        levelActivity: values.levelActivity,
      };
      await dispatch(getUserValue(userData));
      await dispatch(getCurrentUser({}));
    },
  });

  return (
    <>
      <WrapForm>
        <form onSubmit={formik.handleSubmit}>
          <UserFormInput formik={formik} user={user} />
          <UserFormRadio formik={formik} />
        </form>
      </WrapForm>
    </>
  );
};

export default UserForm;
