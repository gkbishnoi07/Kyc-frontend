const API_BASE = "http://localhost:8000";

fetch(`${API_BASE}/kyc/verify`, {
  method: "POST",
  body: formData,
});
