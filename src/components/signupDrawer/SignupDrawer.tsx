import { Button, Drawer, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { FC } from 'react';
import SignupForm, { TFormState } from './Form';

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
      <SignupForm formInstance={form} onSubmit={onSubmit} />
    </Drawer>
  );
};

export default SignupDrawer;
