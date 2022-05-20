import { InitStateInterface } from 'src/interface/reducers/initStateInterface';

export const PERSONAL_DETAIL = 'PERSONAL_DETAIL';

export const personalAction = (payload: InitStateInterface) => ({
  type: PERSONAL_DETAIL,
  payload,
});
