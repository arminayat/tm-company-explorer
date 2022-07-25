import { Col, Image } from 'antd';
import React, { FC } from 'react';

type TChartsProps = {};

const Charts: FC<TChartsProps> = () => {
  return (
    <Image.PreviewGroup>
      <Col md={12}>
        <Image src={require('./Chart 1.png')} />
      </Col>
      <Col md={12}>
        <Image src={require('./Chart 3.png')} />
      </Col>
      <Col md={12}>
        <Image src={require('./Chart 4.png')} />
      </Col>
      <Col md={12}>
        <Image src={require('./Chart 2.jpg')} />
      </Col>
    </Image.PreviewGroup>
  );
};

export default Charts;
