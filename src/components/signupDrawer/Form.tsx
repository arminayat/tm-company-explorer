import { Col, Form, FormInstance, Input, Row } from 'antd';
import { FC } from 'react';

type TSignupFormProps = {
  formInstance: FormInstance;
  onSubmit: (values: TFormState) => void;
};
export type TFormState = { name: string; email: string };

const SignupForm: FC<TSignupFormProps> = ({ formInstance, onSubmit }) => {
  return (
    <Form
      form={formInstance}
      layout="vertical"
      hideRequiredMark
      onFinish={(values: TFormState) => onSubmit(values)}
    >
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="name"
            label="Full Name"
            rules={[{ required: true, message: 'Please enter your full name' }]}
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
            <Input style={{ width: '100%' }} placeholder="Please enter email" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SignupForm;
