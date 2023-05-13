import axios from 'axios';

export class AxiosApi {
  #BASE_URL = 'https://books-backend.p.goit.global/books/bookId/';

  constructor(bookId) {
    this.bookId = bookId;
  }

  async getShops() {
    const url = `${this.#BASE_URL}`;
    const response = await axios.get(url);
    return response.data;
  }
}
