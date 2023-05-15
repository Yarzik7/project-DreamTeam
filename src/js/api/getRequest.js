import axios from 'axios';

/**
 *Робить запит на бекенд
 * @param {link} string посилання на бек
 * @return {data} масив об'єктів
 */

async function getRequest(link) {
  try {
    const RESPONSE = await axios.get(`${link}`);
    const DATA = await RESPONSE.data;
    return DATA;
  } catch (err) {
    console.log(err);
  }
}

export { getRequest };
