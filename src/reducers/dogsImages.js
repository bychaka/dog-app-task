export const initialState = {
  breed: null,
  images: [],
};

export const breedImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BREED_IMAGES':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
