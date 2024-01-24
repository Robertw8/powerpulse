import { TourProps, Tour } from 'antd';
import { useEffect, useState } from 'react';

interface UserTourProps extends TourProps {}

const UserTour: React.FC<UserTourProps> = ({ open, steps, onClose }) => {
  const [shouldRender, setShouldRender] = useState<boolean>(true);

  useEffect(() => {
    if (window.innerWidth < 660) setShouldRender(false);
  }, []);

  return (
    shouldRender && (
      <Tour open={open} type="default" steps={steps} onClose={onClose} />
    )
  );
};

export default UserTour;
