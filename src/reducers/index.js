import { combineReducers } from 'redux';
import { breedsListReducer } from './dogsList';
import { breedImagesReducer } from './dogsImages';

export const rootReducer = combineReducers({
  dogsList: breedsListReducer,
  breedImages: breedImagesReducer,
});
