const API_BASE = "https://kyc-service-backend.onrender.com";

fetch(`${API_BASE}/kyc/verify`, {
  method: "POST",
  body: formData,
});
