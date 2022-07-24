import {
  Button,
  Col,
  Drawer as AntdDrawer,
  Form,
  Input,
  Row,
  Space,
} from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';

const Drawer = styled(AntdDrawer)`
  .ant-drawer-content-wrapper {
    width: 1000px;
  }
`;

type TSignupDrawer = { visible: boolean; onClose: () => void };

const SignupDrawer: FC<TSignupDrawer> = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Signup to learn more!"
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <Row justify="end">
          <Button onClick={onClose} type="primary">
            Submit
          </Button>
        </Row>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Full Name"
              rules={[
                { required: true, message: 'Please enter your full name' },
              ]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input
                style={{ width: '100%' }}
                placeholder="Please enter email"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: 'please enter url description',
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="please enter url description"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default SignupDrawer;
