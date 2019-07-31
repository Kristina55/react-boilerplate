import axios from 'axios';

export async function fetchQuotesApi() {
  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3000/api/quotes',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
