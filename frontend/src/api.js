import axios from "axios";

const api = axios.create({
  baseURL: "https://kyc-service-backend.onrender.com",
});

export default api;
y