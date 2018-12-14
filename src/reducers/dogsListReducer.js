export const initialState = {
  dogs: [],
  // dogId: [],
};

export const dogsListReducer = (state = initialState, action) => {
  // console.log('reduce', state, action);
  switch (action.type) {
    case 'SET_DOGS_BREEDS_LIST':
      return Object.assign({}, state, action.payload);
    // case 'SET_DOGS_BREEDS_IMAGE_LIST':
    //   return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
