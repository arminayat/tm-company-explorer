import { Col, Statistic } from 'antd';
import React, { FC } from 'react';
import { TCompany } from '../../../types';

type TStatsProps = { data: TCompany; isLoading: boolean };

const Stats: FC<TStatsProps> = ({ data, isLoading }) => {
  return (
    <>
      <Col md={6}>
        <Statistic
          title="Headquarter"
          value={data.headquarter}
          loading={isLoading}
        />
      </Col>
      <Col md={6}>
        <Statistic
          title="Founded in"
          value={data.found_date}
          groupSeparator=""
          loading={isLoading}
        />
      </Col>
      <Col md={6}>
        <Statistic
          title="TechMiners Rating"
          value={data.tm_rating}
          loading={isLoading}
        />
      </Col>
      <Col md={6}>
        <Statistic
          title="Number of developers"
          value={data.developer}
          loading={isLoading}
        />
      </Col>
    </>
  );
};

export default Stats;
