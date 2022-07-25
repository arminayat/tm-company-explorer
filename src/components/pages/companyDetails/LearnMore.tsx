import { Alert, Button, Typography } from 'antd';
import React, { FC } from 'react';

type TLearnMoreProps = { openSignupDrawer: () => void };

const LearnMore: FC<TLearnMoreProps> = ({ openSignupDrawer }) => {
  return (
    <Alert
      message={
        <Typography.Title level={3}>
          Do you want to learn more?
        </Typography.Title>
      }
      description={
        <Button type="primary" onClick={openSignupDrawer}>
          Sign up here!
        </Button>
      }
    />
  );
};

export default LearnMore;
