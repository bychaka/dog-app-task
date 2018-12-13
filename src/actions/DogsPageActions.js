export const setDogsBreeds = breeds => {
  return {
    type: 'SET_DOGS_BREEDS_LIST',
    payload: breeds,
  };
};

export const setDogsBreedsForImages = breedsImages => {
  return {
    type: 'SET_DOGS_BREEDS_IMAGE_LIST',
    payload: breedsImages,
  };
};
