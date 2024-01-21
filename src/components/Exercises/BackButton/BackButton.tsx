import { Icon } from "../../Icon";
import { useSearchParams } from "react-router-dom";
import { useMemo } from 'react';

import { BackBtn } from "./BackButton.styled";

const BackButton = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    
    const params = useMemo(
        () => Object.fromEntries([...searchParams]),
        [searchParams]);
    
    const onClick = () => {
        setSearchParams({ filter: params.filter })
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