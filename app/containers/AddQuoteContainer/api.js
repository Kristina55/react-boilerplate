import axios from 'axios';

export async function addQuoteApi(quote) {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/quotes',
      data: { quote },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
