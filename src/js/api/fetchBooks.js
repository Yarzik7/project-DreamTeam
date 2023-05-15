import axios from 'axios';

export class AxiosApi {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';

  async getShops(bookId) {
    const url = `${this.#BASE_URL}${bookId}`;

    const result = await axios.get(url);
    return result;
  }
}
