import React from 'react';
import queryHooks from '../services/hooks/querieHooks';
import CompanyListTable from '../components/pages/companyList/table';
import { Typography } from 'antd';

const CompanyListPage = () => {
  const { data = [], isLoading } = queryHooks.company.useGetAll();
  console.log({ data });

  return (
    <>
      <Typography.Title>Companies</Typography.Title>
      <CompanyListTable loading={isLoading} data={data} />
    </>
  );
};

export default CompanyListPage;
