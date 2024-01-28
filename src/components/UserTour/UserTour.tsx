import { useEffect, useState } from 'react';

import { TourProps, Tour } from 'antd';
import { Icon } from '..';

interface UserTourProps extends TourProps {}

const UserTour: React.FC<UserTourProps> = ({ open, steps, onClose }) => {
  const [shouldRender, setShouldRender] = useState<boolean>(true);

  useEffect(() => {
    if (window.innerWidth < 550) setShouldRender(false);
  }, []);

  return (
    shouldRender && (
      <Tour
        open={open}
        type="default"
        steps={steps}
        onClose={onClose}
        placement="top"
        closeIcon={
          <Icon
            name="x"
            iconWidth={{ mobile: '22px', tablet: '26px' }}
            iconHeight={{ mobile: '22px', tablet: '26px' }}
          />
        }
      />
    )
  );
};

export default UserTour;
