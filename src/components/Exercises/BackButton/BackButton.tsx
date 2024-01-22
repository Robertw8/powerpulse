import { Icon } from "../../Icon";
import { useNavigate } from "react-router-dom";

import { BackBtn } from "./BackButton.styled";

const BackButton = ({toggle, filter, setCurrentExercise}) => {

    const navigate = useNavigate();
    
    const onClick = () => {
        if (filter === 'bodyPart') {
            setCurrentExercise('')
            navigate(`/exercises/${filter}`);
            toggle(false);
        } else {
            setCurrentExercise('')
            navigate(-1);
            toggle(false);
        }
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