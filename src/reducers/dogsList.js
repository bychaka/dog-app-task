export const initialState = {
  breeds: [],
};

export const breedsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOGS_BREEDS_LIST':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
