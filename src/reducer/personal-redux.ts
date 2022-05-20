import { PERSONAL_DETAIL } from 'action/personal-action';
import { PersonalInterface } from 'interface/actionInterface/personalInterface';
import { InitStateInterface } from 'interface/actionInterface/initStateInterface';

const initState = {
  src: '',
  name: '',
  number: null,
};

export const personal = (
  state: InitStateInterface = initState,
  action: PersonalInterface
) => {
  switch (action.type) {
    case PERSONAL_DETAIL:
      return { ...state, ...action.data };
    default:
      return { ...state };
  }
};
