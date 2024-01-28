import { useEffect, useState, useRef } from 'react';

import {
  Container,
  PageTitle,
  UserCard,
  UserForm,
  UserTour,
  Wrap,
} from '../components';
import { useAuth } from '../hooks';

const ProfilePage: React.FC = () => {
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);
  const { isLoggedIn, isRefreshing, userSettings } = useAuth();
  1;
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    if (isLoggedIn && !isRefreshing && !userSettings) setIsTourOpen(true);
  }, [isLoggedIn, isRefreshing, userSettings]);

  const steps = [
    {
      title: 'Step 1',
      description:
        'Fill all the fields to unblock diary, products, and exercises pages',
      target: () => ref1.current,
    },
    {
      title: 'Step 2',
      description: 'Get your references and track your progress',
      target: () => ref2.current,
    },
  ];

  return (
    <div ref={ref3}>
      <Container>
        <PageTitle text="Profile Settings" />
        <Wrap>
          <div ref={ref2}>
            <UserCard />
          </div>
          <div ref={ref1}>
            <UserForm />
          </div>
        </Wrap>
        <UserTour
          steps={steps}
          open={isTourOpen}
          onClose={() => setIsTourOpen(false)}
        />
      </Container>
    </div>
  );
};

export default ProfilePage;
