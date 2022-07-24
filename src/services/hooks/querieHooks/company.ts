import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { TCompany } from '../../../types';
import API from '../../API';

const fetchAllCompanies = async () => {
  const { data }: AxiosResponse<TCompany[]> = await API.get('/companies');
  return data;
};

const fetchCompanyById = async (id: string) => {
  const { data }: AxiosResponse<TCompany> = await API.get(`/company/${id}`);
  return data;
};

export const company = {
  useGetAll: (options?: UseQueryOptions<TCompany[]>) => {
    return useQuery<TCompany[]>(['company'], fetchAllCompanies, {
      ...options,
    });
  },
  useGetById: (id: string, options?: UseQueryOptions<TCompany>) => {
    return useQuery<TCompany>(
      ['company', id],
      () => fetchCompanyById(id),
      options
    );
  },
};
