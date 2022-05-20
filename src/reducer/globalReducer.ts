import { IS_LOADING } from 'action/globalAction';
import { PublicInterface } from 'src/interface/reducers/personalInterface';
import { LoadingInterface } from 'src/interface/reducers/loadingInterface';

const initState = {
  isLoading: false,
};

export const global = (
  state: LoadingInterface = initState,
  action: PublicInterface
) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
