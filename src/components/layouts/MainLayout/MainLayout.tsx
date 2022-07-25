import { Col, Row } from 'antd';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const RowContainer = styled(Row)`
  padding: 64px;
  padding-top: 0px;
  background-color: #dde4f1;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 8px;
  } ;
`;

const ColContainer = styled(Col)`
  width: 100%;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 32px;
  padding: 48px 64px;
  @media (max-width: 768px) {
    padding: 24px 32px;
  } ;
`;

const MainLayout: FC = () => {
  return (
    <main>
      <RowContainer justify="center">
        <Col md={24}>
          <Row align="middle" justify="center">
            <img alt="logo" src="/logo.svg" style={{ height: '128px' }} />
          </Row>
        </Col>
        <ColContainer md={24}>
          <Outlet />
        </ColContainer>
      </RowContainer>
    </main>
  );
};

export default MainLayout;
