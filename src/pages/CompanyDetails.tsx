import React, { useState } from 'react';
import queryHooks from '../services/hooks/querieHooks';
import { Button, Col, Image, Row, Skeleton, Statistic, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import SignupDrawer from '../components/signupDrawer';

const CompanyDetails = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { data = {}, isLoading } = queryHooks.company.useGetById(id, {
    enabled: !!id,
  });

  const [isSignupDrawerVisible, setSignupDrawerVisible] = useState(false);
  console.log({ data, id });
  return (
    <>
      <Button
        style={{ padding: 0 }}
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
      >
        back
      </Button>
      {isLoading ? (
        <Skeleton style={{ width: '200px' }} paragraph={false} />
      ) : (
        <Typography.Title>{data.name}</Typography.Title>
      )}
      <Row gutter={[20, 20]}>
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
        <Col md={24}>
          <Typography.Paragraph>{data.description}</Typography.Paragraph>
        </Col>

        <Image.PreviewGroup>
          <Col md={12}>
            <Image src={require('../components/charts/Chart 1.png')} />
          </Col>
          <Col md={12}>
            <Image src={require('../components/charts/Chart 3.png')} />
          </Col>
          <Col md={12}>
            <Image src={require('../components/charts/Chart 2.jpg')} />
          </Col>
          <Col md={12}>
            <Image src={require('../components/charts/Chart 4.png')} />
          </Col>
        </Image.PreviewGroup>
        <Col md={24}>
          <Button type="link" onClick={() => setSignupDrawerVisible(true)}>
            Do you want to learn more?
          </Button>
        </Col>
      </Row>
      <SignupDrawer
        visible={isSignupDrawerVisible}
        onClose={() => setSignupDrawerVisible(false)}
      />
    </>
  );
};

export default CompanyDetails;
