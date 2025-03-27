# Handling API Calls in React Native using Axios & Axios-Retry

## Reflection

- **Why is Axios preferred over fetch in some cases?**

  - **Automatic JSON Parsing:** Axios handles JSON parsing automatically, while
    `fetch` requires explicit parsing:

    ```javascript
    // Axios (Auto-parsed)
    axios.get("/api/data")
    .then(response => console.log(response.data));

    // Fetch (Manual parsing)
    fetch("/api/data")
    .then(res => res.json()) // Must manually parse
    .then(data => console.log(data));
    - **Interceptors:** Axios allows centralized request/response handling.
    ```

  - **Interceptors:** Interceptors centralize cross-cutting concerns:

    ```jsx
    // Request Interceptor (Add auth headers)
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = "Bearer token";
      return config;
    });

    // Response Interceptor (Global errors)
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) logoutUser();
        return Promise.reject(error);
      }
    );
    ```

- **How does Axios-Retry improve network reliability?**

  - **Automatic Retries:** It can retry a request when it encounters network
    errors or specific HTTP status codes (like 429 or 5xx).

    ```jsx
    axiosRetry(axios, {
      retries: 3, // Max retries
      retryDelay: (retryCount) => retryCount * 2000, // Exponential backoff
      retryCondition: (error) =>
        error.response?.status === 429 || // Rate limits
        error.response?.status >= 500, // Server errors
    });
    ```

  - **Use Cases**

    - Critical APIs: Retry payment submissions 3 times

    - Non-critical APIs: Disable retries for analytics tracking

- **How would you handle API failures gracefully in a React Native app?**

  - **User Feedback:** Display user-friendly messages (e.g., "Service
    unavailable. Retrying...") using in-app toasts or banners.

    Avoid showing raw technical errors (e.g., HTTP 500: Internal Server Error).

  - **Fallback Strategies:** Display a fallback screen or cached data when an
    API call fails, ensuring the app remains usable even during connectivity
    issues.
  - **Centralized Error Handling:** Use Axios interceptors for consistent error
    management:

    ```jsx
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          redirectToLogin();
        }
        return Promise.reject(error);
      }
    );
    ```
