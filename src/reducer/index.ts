import { combineReducers, createStore } from 'redux';
import { personal } from 'src/reducer/personalReducer';
import { global } from 'src/reducer/globalReducer';

const allReducers = combineReducers({ personal, global });

const store = createStore(allReducers);

export default store;
