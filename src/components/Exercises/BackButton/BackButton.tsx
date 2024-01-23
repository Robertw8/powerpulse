import { selectFilters, setFilters } from '../../../redux/exercises';
import { AppDispatch } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';

import { Icon } from "../../Icon";
import { useNavigate } from "react-router-dom";

import { BackBtn } from "./BackButton.styled";

const BackButton:React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const filters = useSelector(selectFilters);
    
  const onClick = () => {
      dispatch(setFilters(filters.filter, ""))
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
    )
}

export default BackButton;