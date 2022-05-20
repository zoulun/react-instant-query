import { LoadingInterface } from 'src/interface/reducers/loadingInterface';

export const IS_LOADING = 'IS_LOADING';

export const loadingAction = (payload: LoadingInterface) => ({
  type: IS_LOADING,
  payload,
});
