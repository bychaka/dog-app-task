import * as http from 'axios';
import { dogsApiEndpoints } from './dogsApi';

export class DogsApiService {
  static async getBreedsList() {
    try {
      const fetched = await http.get(dogsApiEndpoints.breedsListUrl);
      const breeds = fetched.data.message;
      const response = [];
      for (const breed of Object.keys(breeds)) {
        const fetchedImage = await http.get(
          dogsApiEndpoints.breedRandomImage.replace(':breed', breed)
        );
        response.push({
          id: +new Date(),
          breed,
          imageUrl: fetchedImage.data.message,
          subBreads: breeds[breed],
        });
      }

      return response;
    } catch (err) {
      console.error(`Error during fetching data: ${err.message}`);
      return [];
    }
  }

  static async getImagesByBreed(breed) {
    try {
      const fetched = await http.get(
        dogsApiEndpoints.breedImages.replace(':breed', breed)
      );

      return fetched.data.message;
    } catch (err) {
      console.error(`Error during fetching data: ${err.message}`);
      return [];
    }
  }
}
