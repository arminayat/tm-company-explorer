import React, { ChangeEvent, useMemo, useState } from 'react';
import queryHooks from '../services/hooks/querieHooks';
import CompanyListTable from '../components/pages/companyList/table';
import * as _ from 'lodash';
import Header from '../components/pages/companyList/Header';

const CompanyListPage = () => {
  const { data = [], isLoading } = queryHooks.company.useGetAll();

  const [searchInput, setSearchInput] = useState('');

  const filteredData = useMemo(() => {
    const searchPhrase = new RegExp(searchInput, 'gi');
    return data.filter((item) =>
      Object.values(item).some((value) => searchPhrase.test(value.toString()))
    );
  }, [data, searchInput]);

  const searchInputHandler = _.debounce(
    (e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value),
    300
  );

  return (
    <>
      <Header searchInputHandler={searchInputHandler} />
      <CompanyListTable loading={isLoading} data={filteredData} />
    </>
  );
};

export default CompanyListPage;
