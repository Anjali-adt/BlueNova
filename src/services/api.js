import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'An error occurred';
    return Promise.reject(new Error(message));
  }
);

export const submitContactForm = async (formData) => {
  const response = await api.post('/contact', formData);
  return response.data;
};

export const subscribeNewsletter = async (email) => {
  const response = await api.post('/newsletter', { email });
  return response.data;
};

export default api;
