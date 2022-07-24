import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { TCompany } from '../../../types';
import API from '../../API';

const fetchCompanies = async () => {
  const { data }: AxiosResponse<TCompany[]> = await API.get('/companies');
  return data;
};

export const company = {
  useGetAll: (options?: UseQueryOptions<TCompany[]>) => {
    return useQuery<TCompany[]>(['company'], fetchCompanies, {
      placeholderData: [],
      ...options,
    });
  },
};
