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

import { palette } from '../../styles/theme';

const { colors } = palette;

// Statistics
import {
  getStatistics,
  selectStatistics,
  selectIsLoading,
  selectError,
} from '../../redux/statistics';

const Statistics: React.FC = () => {
  const dispatch = useDispatch();
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
    dispatch(getStatistics());
  }, [dispatch]);

  const cardsStyle = {
    width: 195,
    height: 70,
    backgroundColor: colors.lightOrange,
    opacity: 0.78,
  };

  return (
    <>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card bordered={false} size="small" style={cardsStyle}>
          <Meta
            avatar={<PlayCircleOutlined />}
            title={totalVideo + '+'}
            description="Video tutorial"
          />
        </Card>
        <Card bordered={false} size="small" style={cardsStyle}>
          <Meta
            avatar={<FireFilled />}
            title={totalUsersCalories + ' cal'}
            description="Calories burned"
          />
        </Card>
        <Card bordered={false} size="small" style={cardsStyle}>
          <Meta
            avatar={<UsergroupAddOutlined />}
            title={totalUsers + ' users'}
            description="Registered users"
          />
        </Card>
        <Card bordered={false} size="small" style={cardsStyle}>
          <Meta
            avatar={<DashboardOutlined />}
            title={totalTrainingHoursUsers + ' hours'}
            description="Total training time"
          />
        </Card>
        <Card bordered={false} size="small" style={cardsStyle}>
          <Meta
            avatar={<UserOutlined />}
            title={totalTrainingUsers + ' users'}
            description="Training user count"
          />
        </Card>
      </Space>
      {isLoading && !error && <Loader />}
    </>
  );
};
export default Statistics;
