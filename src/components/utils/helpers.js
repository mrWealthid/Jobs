import axios from 'axios';
import { BASE_URL } from '../config';

export const loginUser = async (user) => {
  try {
    const data = await axios.post(`${BASE_URL}/login`, {
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (user) => {
  try {
    const data = await axios.post(`${BASE_URL}/register`, {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getJobs = async () => {
  try {
    const data = await axios.get(`${BASE_URL}/jobs`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMyJobs = async () => {
  try {
    const data = await axios.get(`${BASE_URL}/my/jobs`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postMyJobs = async (jobDetails) => {
  try {
    const data = await axios.post(`${BASE_URL}/my/jobs`, jobDetails);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAJob = async (id) => {
  try {
    const data = await axios.get(`${BASE_URL}/my/jobs/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const applyAJob = async (userDetails, id) => {
  try {
    const data = await axios.post(`${BASE_URL}/my/jobs/${id}`, userDetails);
    return data;
  } catch (error) {
    throw error;
  }
};
// export const getUser = async (id) => {
//     try {
//       const data = await axios.get(`${BASE_URL}/my/jobs/${id}`);
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };
