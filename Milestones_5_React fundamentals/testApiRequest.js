// testApiRequest.js
// import axios from "axios";
// import { apiClient, controller } from "./apiClient";
const { apiClient, controller } = require('./apiClient');
const axios = require('axios');

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

// // After 5 secs, call abort controller
// Due to this is run in local, it will not work and will throw error
// setTimeout(() => {
//   controller.abort();
//   console.log("Request has been canceled.");
// }, 5000);

testApiRequest();