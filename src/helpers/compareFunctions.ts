import { TCompany } from '../types';

export const numberCompareFunction = (a: TCompany, b: TCompany) =>
  parseInt(a?.found_date || '0') - parseInt(b?.found_date || '0');
