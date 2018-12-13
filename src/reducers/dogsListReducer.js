export const initialState = {
  dogs: [],
};

export const dogsListReducer = (state = initialState, action) => {
  console.log('reduce', state, action);
  switch (action.type) {
    case 'SET_DOGS_BREEDS_LIST':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
