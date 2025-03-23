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

  // Get bid volume over time
  getBidVolume: async (companyId, months = 6) => {
    try {
      const response = await api.get(`/analytics/bids/volume/${companyId}?months=${months}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get bid status distribution
  getBidDistribution: async (companyId) => {
    try {
      const response = await api.get(`/analytics/bids/distribution/${companyId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

