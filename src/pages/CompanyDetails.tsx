import React, { useState } from 'react';
import queryHooks from '../services/hooks/querieHooks';
import { message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import SignupDrawer from '../components/signupDrawer';
import mutationHooks from '../services/hooks/mutationHooks';
import Stats from '../components/pages/companyDetails/Stats';
import CompanyDetailsLayout from '../components/pages/companyDetails/Layout';
import Charts from '../components/pages/companyDetails/charts';
import LearnMore from '../components/pages/companyDetails/LearnMore';

const CompanyDetails = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const [isSignupDrawerVisible, setSignupDrawerVisible] = useState(false);

  const { data = {}, isLoading } = queryHooks.company.useGetById(id, {
    enabled: !!id,
  });

  const submitTalentInterest =
    mutationHooks.talentInterest.useSubmitTalentInterest({
      onSuccess(data, variables, context) {
        message.success('Your data has been submitted successfully!');
        setSignupDrawerVisible(false);
      },
    });

  const handleTalentInterestSubmit = (values: {
    name: string;
    email: string;
  }) => submitTalentInterest.mutate({ ...values, company: data });

  return (
    <>
      <CompanyDetailsLayout
        onBack={() => navigate(-1)}
        isLoading={isLoading}
        title={data.name || ''}
        description={data.description}
        statsSection={<Stats data={data} isLoading={isLoading} />}
        chartsSection={<Charts />}
        learnMoreSection={
          <LearnMore openSignupDrawer={() => setSignupDrawerVisible(true)} />
        }
      />
      <SignupDrawer
        visible={isSignupDrawerVisible}
        onClose={() => setSignupDrawerVisible(false)}
        onSubmit={handleTalentInterestSubmit}
        loading={submitTalentInterest.isLoading}
      />
    </>
  );
};

export default CompanyDetails;
