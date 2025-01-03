import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList from './LaunchList';
import { OwnProps } from './LaunchList';

const LaunchListContainer: React.FC<OwnProps> = (props) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;
