export const setDogsBreeds = breeds => {
  return {
    type: 'SET_DOGS_BREEDS_LIST',
    payload: breeds,
  };
};

export const setBreedImages = images => {
  return {
    type: 'SET_BREED_IMAGES',
    payload: images,
  };
};
