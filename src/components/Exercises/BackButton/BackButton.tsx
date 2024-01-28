import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useExercises } from '../../../hooks';

import { BackBtn } from './BackButton.styled';
import { Icon } from '../../Icon';

import { setFilters } from '../../../redux/exercises';
import { AppDispatch } from '../../../redux';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { exercisesFilters } = useExercises();

  const onClick = () => {
    dispatch(setFilters(exercisesFilters.filter, ''));
    navigate(-1);
  };

  return (
    <BackBtn onClick={onClick}>
      <Icon
        name="next"
        iconWidth={{ mobile: '16px', tablet: '16px' }}
        iconHeight={{ mobile: '16px', tablet: '16px' }}
        stroke="rgba(239, 237, 232, 0.4)"
      />
      Back
    </BackBtn>
  );
};

export default BackButton;
