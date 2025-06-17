import axios from 'axios';

const API_BASE = '/api';

export const fetchProducts = async () => {
  const res = await axios.get(`${API_BASE}/products`);
  return res.data;
};

export const fetchProductDetails = async (id) => {
  const res = await axios.get(`${API_BASE}/products/${id}`);
  return res.data;
};

export const fetchReviews = async (id) => {
  const res = await axios.get(`${API_BASE}/reviews/${id}`);
  return res.data;
};

export const submitReview = async (reviewData) => {
  const res = await axios.post(`${API_BASE}/reviews`, reviewData);
  return res.data;
};
