import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Space } from 'antd';
const { Meta } = Card;
import {
  PlayCircleOutlined,
  UsergroupAddOutlined,
  DashboardOutlined,
  FireFilled,
} from '@ant-design/icons';
import { Icon } from '../Icon';
import Loader from '../Loader/Loader';

import {
  getStatistics,
  selectStatistics,
  selectIsLoading,
  selectError,
} from '../../redux/statistics';
import { AppDispatch } from '../../redux';

import { StyledCard } from './Statistics.styled';

const Statistics: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const statistics = useSelector(selectStatistics);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  let totalVideo;
  let totalUsersCalories;
  let totalUsers;
  let totalTrainingHoursUsers;
  let totalTrainingUsers;

  if (!statistics.totalVideo) {
    totalVideo = 'Data is coming';
    totalUsersCalories = 'Data is coming';
    totalUsers = 'Data is coming';
    totalTrainingHoursUsers = 'Data is coming';
    totalTrainingUsers = 'Data is coming';
  } else {
    totalVideo = statistics.totalVideo;
    totalUsersCalories = statistics.totalUsersCalories + ' cal';
    totalUsers = statistics.totalUsers + ' users';
    totalTrainingHoursUsers = statistics.totalTrainingHoursUsers + ' hours';
    totalTrainingUsers = statistics.totalTrainingUsers + ' workouts';
  }

  useEffect(() => {
    dispatch(getStatistics({}));
  }, [dispatch]);

  const iconStyle = { fontSize: '30px', color: '#efede8' };

  return (
    <>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <StyledCard
          bordered={false}
          size="default"
          style={{
            width: 215,
            backgroundColor: '#303030',
          }}
        >
          <Meta
            avatar={<PlayCircleOutlined style={iconStyle} />}
            title={totalVideo}
            description="Video tutorial"
          />
        </StyledCard>
        <StyledCard bordered={false} size="default">
          <Meta
            avatar={<FireFilled style={iconStyle} />}
            title={totalUsersCalories}
            description="Calories burned"
          />
        </StyledCard>
        <StyledCard bordered={false} size="default">
          <Meta
            avatar={<UsergroupAddOutlined style={iconStyle} />}
            title={totalUsers}
            description="Registered users"
          />
        </StyledCard>
        <StyledCard bordered={false} size="default">
          <Meta
            avatar={<DashboardOutlined style={iconStyle} />}
            title={totalTrainingHoursUsers}
            description="Total training time"
          />
        </StyledCard>
        <StyledCard bordered={false} size="default">
          <Meta
            avatar={
              <Icon
                name="statistics"
                iconWidth={{ mobile: '30px', tablet: '30px' }}
                iconHeight={{ mobile: '30px', tablet: '30px' }}
              />
            }
            title={totalTrainingUsers}
            description="Number of trainings"
          />
        </StyledCard>
      </Space>
      {isLoading && !error && <Loader />}
    </>
  );
};
export default Statistics;
