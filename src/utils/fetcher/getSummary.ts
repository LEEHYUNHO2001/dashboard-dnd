import axios, { AxiosError, Method } from 'axios';

export const getSummary = async () => {
  try {
    const url = 'https://static.adbrix.io/front/coding-test/event_1.json';
    const res = await axios({
      method: 'get' as Method,
      url,
    });
    return res;
  } catch (error) {
    const err = error as AxiosError;
    return err.response;
  }
};
