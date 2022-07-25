import { Button, Col, Drawer as AntdDrawer, Form, Input, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { FC } from 'react';
import styled from 'styled-components';

const Drawer = styled(AntdDrawer)`
  .ant-drawer-content-wrapper {
    width: 1000px;
  }
`;

type TFormState = { name: string; email: string };

type TSignupDrawer = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (values: TFormState) => void;
  loading: boolean;
};

const SignupDrawer: FC<TSignupDrawer> = ({
  visible,
  onClose,
  onSubmit,
  loading,
}) => {
  const [form] = useForm();
  return (
    <Drawer
      title="Signup to learn more!"
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <Row justify="end">
          <Button
            onClick={() => form.submit()}
            type="primary"
            loading={loading}
          >
            Submit
          </Button>
        </Row>
      }
    >
      <Form
        form={form}
        layout="vertical"
        hideRequiredMark
        onFinish={(values: TFormState) => onSubmit(values)}
      >
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
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                placeholder="Please enter email"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default SignupDrawer;
