import axios from 'axios';

/**
 *Робить запит на бекенд
 * @param {link} string посилання на бек
 * @return {data} масив об'єктів
 */

async function getRequest(link) {
  try {
    const response = await axios.get(`${link}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export { getRequest };
