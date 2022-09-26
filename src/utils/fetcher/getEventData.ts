import axios, { AxiosError, Method } from 'axios';

export const getEventData = async (url: string) => {
  try {
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
