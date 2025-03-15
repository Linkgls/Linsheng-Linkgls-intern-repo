// apiClient.js
const axios = require('axios');
// Utility function to generate a random request ID
function generateRequestId() {
  return Math.random().toString(36).substring(2, 15);
}

// Create an AbortController instance to cancel requests if needed
const controller = new AbortController();

const apiClient = axios.create({
  baseURL: "https://focusBear.intern.linsheng.com", // mock base URL
  timeout: 5000, // Timeout set to 5 seconds
  headers: {
    accept: "*/*",
    "X-Request-ID": generateRequestId(),
  },
  signal: controller.signal, // Enables request cancellation
});

// Request interceptor to attach authentication token
apiClient.interceptors.request.use(
  (config) => {
    // Retrieve token from localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

module.export = { apiClient, controller };