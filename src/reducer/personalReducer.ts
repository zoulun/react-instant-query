import { PERSONAL_DETAIL } from 'action/personal-action';
import { PublicInterface } from 'src/interface/reducers/personalInterface';
import { InitStateInterface } from 'src/interface/reducers/initStateInterface';

const initState = {
  qlogo: '',
  name: '',
  qq: '',
};

export const personal = (
  state: InitStateInterface = initState,
  action: PublicInterface
) => {
  switch (action.type) {
    case PERSONAL_DETAIL:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
