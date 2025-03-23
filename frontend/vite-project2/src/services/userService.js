import api from './api';

const userService = {
    // Authentication
    login: async (email, password) => {
      try {
        const response = await api.post('/users/login', { email, password });
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  