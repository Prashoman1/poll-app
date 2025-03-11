
import axios from 'axios';
import { envConfig } from '../../config';

export const CreatePollApi = async (data: any) => {
  try {
    const response = await axios.post(`${envConfig.apiUrl}/poll/create`, data);

    return response.data;
  } catch (error) {
    throw error;
  }
};