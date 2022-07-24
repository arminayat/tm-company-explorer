import { Col, Row } from 'antd';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <main>
      <Row
        justify="center"
        style={{
          padding: '64px',
          paddingTop: 0,
          backgroundColor: '#dde4f1',
          minHeight: '100vh',
        }}
      >
        <Col md={24}>
          <Row align="middle" justify="center">
            <img alt="logo" src="/logo.svg" style={{ height: '128px' }} />
          </Row>
        </Col>
        <Col
          md={24}
          style={{
            width: '100%',
            maxWidth: '1000px',
            backgroundColor: '#fff',
            borderRadius: '32px',
            padding: '48px 64px',
          }}
        >
          <Outlet />
        </Col>
      </Row>
    </main>
  );
};

export default MainLayout;
