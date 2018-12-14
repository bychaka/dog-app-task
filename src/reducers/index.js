import { combineReducers } from 'redux';
import { dogsListReducer } from './dogsListReducer';
import { dogIdReducer } from './dogIdReducer';

export const rootReducer = combineReducers({
  dogsList: dogsListReducer,
  // dogId: dogIdReducer,
});
