import React from 'react';
import { Card, Space } from 'antd';
const { Meta } = Card;
import {
  PlayCircleOutlined,
  UsergroupAddOutlined,
  DashboardOutlined,
  FireFilled,
  UserOutlined,
} from '@ant-design/icons';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  const {
    totalVideo,
    totalUsersCalories,
    totalUsers,
    totalTrainingHoursUsers,
    totalTrainingUsers,
  } = statistics;

  useEffect(() => {
    dispatch(getStatistics({}));
  }, [dispatch]);

  const iconStyle = { fontSize: '30px' };

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
            title={totalUsersCalories + ' cal'}
            description="Calories burned"
          />
        </StyledCard>
        <StyledCard bordered={false} size="default">
          <Meta
            avatar={<UsergroupAddOutlined style={iconStyle} />}
            title={totalUsers + ' users'}
            description="Registered users"
          />
        </StyledCard>
        <StyledCard bordered={false} size="default">
          <Meta
            avatar={<DashboardOutlined style={iconStyle} />}
            title={totalTrainingHoursUsers + ' hours'}
            description="Total training time"
          />
        </StyledCard>
        <StyledCard bordered={false} size="default">
          <Meta
            avatar={<UserOutlined style={iconStyle} />}
            title={totalTrainingUsers + ' users'}
            description="Training user count"
          />
        </StyledCard>
      </Space>
      {isLoading && !error && <Loader />}
    </>
  );
};
export default Statistics;
