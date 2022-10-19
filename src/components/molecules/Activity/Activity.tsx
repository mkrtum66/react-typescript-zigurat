import React from 'react';
import ActivityItem from '../../atoms/ActivityItem';
import { Title } from './Activity.styled';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons/lib';
import { ActivitieProps } from '../../atoms/TrendingItem/types';
import { v4 as uuid } from 'uuid';

const Activity = ({ activities }: { activities: ActivitieProps }) => {
  return (
    <div>
      <Title>
        <h4>Activity</h4>
        <Button
          type="link"
          icon={<DownloadOutlined style={{ color: '#18b4c7' }} />}
          size={'middle'}
        />
      </Title>
      {activities &&
        activities.deposits.map(activity => <ActivityItem activity={activity} key={uuid()} />)}
    </div>
  );
};

export default Activity;
