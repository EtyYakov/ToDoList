import axios from 'axios';

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error in response:', error);
    // Optionally handle specific errors or rethrow
    return Promise.reject(error);
  }
);