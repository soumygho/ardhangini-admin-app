import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchOrders = async () => {
  const response = await axios.get(`${BASE_URL}/order-details/admin/all`);
  return response.data;
};

export const updateOrder = async (orderId: string, updateData: object) => {
  const response = await axios.put(`${BASE_URL}/orders/${orderId}`, updateData);
  return response.data;
};
