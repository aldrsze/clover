import { apiClient } from './apiClient';

export const orderService = {
  getOrders: async () => {
    try {
      return await apiClient.get('/admin/orders');
    } catch (error) {
      console.error('orderService.getOrders Error:', error);
      throw error;
    }
  },

  getOrder: async (id) => {
    try {
      return await apiClient.get(`/admin/orders/${id}`);
    } catch (error) {
      console.error('orderService.getOrder Error:', error);
      throw error;
    }
  },

  updateOrder: async (id, payload) => {
    try {
      const response = await apiClient.put(`/admin/orders/${id}`, payload);
      return response.json();
    } catch (error) {
      console.error('orderService.updateOrder Error:', error);
      throw error;
    }
  },

  deleteOrder: async (id) => {
    try {
      const response = await apiClient.del(`/admin/orders/${id}`);
      return response.json();
    } catch (error) {
      console.error('orderService.deleteOrder Error:', error);
      throw error;
    }
  },
};
