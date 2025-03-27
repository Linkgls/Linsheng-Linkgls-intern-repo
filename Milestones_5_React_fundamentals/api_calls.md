# Making API Calls with Axios

## Setting Up an Axios Instance

```javascript
// apiClient.js
import axios from "axios";

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

export { apiClient, controller };
```

## Making a Test API Request

```javascript
// testApiRequest.js
import { apiClient, controller } from "./apiClient";

async function testApiRequest() {
  try {
    const response = await apiClient.post("/test-endpoint", {
      param1: "value1",
      param2: "value2",
    });

    console.log("API Response:", response.data);

    // Example: Redirect if a certain condition is met
    if (response.data.redirectUrl) {
      window.location.href = response.data.redirectUrl;
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request was canceled:", response.data);
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timed out.");
    } else {
      console.error("API Request failed:", error.message);
    }
  }
}

// After 5 secs, call abort controller
setTimeout(() => {
  controller.abort();
  console.log("Request has been canceled.");
}, 5000);

testApiRequest();
```

## Reflections

- **Why is it useful to create a reusable Axios instance?** This could
  centralize all API configuration together. Make the further maintenance and
  debug easier. This single configuration will play a role as a setting waiting
  for update.
- **How does intercepting requests help with authentication?** The Axios
  interceptor could add the authentication token to every request. This ensures
  that all API calls are authenticated without needing to modify each request
  manually.
- **What happens if an API request times out, and how can you handle it?** If an
  API request times out, Axios will throw an error with specific code. Once
  caught this error code, the function should inform the user and retry the
  request or other actions. Or I could set a timeout in the calling function to
  call the abort to end this request.
