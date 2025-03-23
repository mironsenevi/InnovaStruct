import api from './api';

const analyticsService = {
    // Get bid success rate over time
    getBidSuccessRate: async (companyId, months = 6) => {
      try {
        const response = await api.get(`/analytics/bids/success-rate/${companyId}?months=${months}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

