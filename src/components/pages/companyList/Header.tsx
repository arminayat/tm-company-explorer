import { Col, Input, Row, Typography } from 'antd';
import React, { ChangeEvent, FC } from 'react';

type THeaderProps = {
  searchInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Header: FC<THeaderProps> = ({ searchInputHandler }) => (
  <Row align="middle" justify="space-between" style={{ paddingBottom: '10px' }}>
    <Col>
      <Typography.Title>Companies</Typography.Title>
    </Col>
    <Col>
      <Input.Search
        placeholder="Search..."
        width={200}
        onChange={searchInputHandler}
      />
    </Col>
  </Row>
);

export default Header;
