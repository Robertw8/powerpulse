
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux';

import { loginUser, getCurrentUser } from '../../redux/auth/operations';

const useSignInUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const signInUser = async (values, resetForm) => {
    await dispatch(loginUser(values));

    const response = await dispatch(getCurrentUser({}));
    if (!response.payload.settings) {
      navigate('/profile');
    } else {
      navigate('/diary');
    }
    resetForm();
  };

  return signInUser;
};

export default useSignInUser;
