import { Table } from 'antd';
import React, { FC } from 'react';
import { TCompany } from '../../../../types';
import { columns } from './TableConfigs';

type TCompanyListTabeProps = { data: TCompany[]; loading: boolean };

const CompanyListTable: FC<TCompanyListTabeProps> = ({ data, loading }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(company) => company.id || ''}
      loading={loading}
      scroll={{ x: 500 }}
    />
  );
};

export default CompanyListTable;
