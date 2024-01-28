import { useAuth } from '../hooks';
import { useEffect } from 'react';

import {
  Container,
  PageTitle,
  Diary,
  CustomDatePicker,
  DiaryWrapper,
} from '../components';
import { callToast } from '../helpers';

const DiaryPage: React.FC = () => {
  const { isRefreshing } = useAuth();

  useEffect(() => {
    if (isRefreshing) {
      const timeout = setTimeout(() => {
        callToast(
          'loading',
          'If you are experiencing a long load time, please wait, our servers go into hibernation when not in use for a long time and need time to get up and running.'
        );
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isRefreshing]);

  return (
    <Container>
      <DiaryWrapper>
        <PageTitle text="Diary" />
        <CustomDatePicker />
      </DiaryWrapper>
      <Diary />
    </Container>
  );
};

export default DiaryPage;
