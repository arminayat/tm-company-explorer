import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Col, Row, Skeleton, Typography } from 'antd';
import React, { FC, ReactNode } from 'react';

type TCompanyDetailsLayoutProps = {
  onBack: () => void;
  isLoading: boolean;
  title: string;
  description?: string;
  statsSection: ReactNode;
  chartsSection: ReactNode;
  learnMoreSection: ReactNode;
};

const CompanyDetailsLayout: FC<TCompanyDetailsLayoutProps> = ({
  onBack,
  isLoading,
  title,
  description,
  statsSection,
  chartsSection,
  learnMoreSection,
}) => {
  return (
    <>
      <Button
        style={{ padding: 0 }}
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={onBack}
      >
        back
      </Button>
      {isLoading ? (
        <Skeleton style={{ width: '200px' }} paragraph={false} />
      ) : (
        <Typography.Title>{title}</Typography.Title>
      )}
      <Row gutter={[20, 20]}>
        {statsSection}
        <Col md={24}>
          <Typography.Paragraph>{description}</Typography.Paragraph>
        </Col>
        {chartsSection}
        <Col md={24}>{learnMoreSection}</Col>
      </Row>
    </>
  );
};

export default CompanyDetailsLayout;
