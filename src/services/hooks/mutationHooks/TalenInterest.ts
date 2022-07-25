import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { TTalentInterest } from '../../../types';
import API from '../../API';

const postTalentInterest = (data: TTalentInterest) =>
  API.post('/talentInterest', data);

export const talentInterest = {
  useSubmitTalentInterest: (
    options?: UseMutationOptions<unknown, unknown, TTalentInterest, unknown>
  ) =>
    useMutation<unknown, unknown, TTalentInterest, unknown>(
      (values: TTalentInterest) => postTalentInterest(values),
      options
    ),
};
