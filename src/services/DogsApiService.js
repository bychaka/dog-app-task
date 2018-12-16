import * as http from 'axios';
import { dogsApiEndpoints } from './dogsApi';

export class DogsApiService {
  static async getBreedsList() {
    try {
      // Fetch breeds list
      const fetched = await http.get(dogsApiEndpoints.breedsListUrl);
      const breeds = fetched.data.message;

      // Map fetched breeds to required format
      const response = [];
      for (const breed of Object.keys(breeds)) {
        // Fetch random image by breed
        const fetchedImage = await http.get(
          dogsApiEndpoints.breedRandomImage.replace(':breed', breed)
        );

        // Build breed object
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

      // Return empty array if something went wrong
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

      // Return empty array if something went wrong
      return [];
    }
  }
}
