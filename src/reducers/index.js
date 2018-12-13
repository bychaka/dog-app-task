import { combineReducers } from 'redux';
import { dogsListReducer } from './dogsListReducer';

export const rootReducer = combineReducers({
  dogsList: dogsListReducer,
});
