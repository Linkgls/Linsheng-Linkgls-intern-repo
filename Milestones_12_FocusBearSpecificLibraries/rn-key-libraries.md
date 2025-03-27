# Key Libraries in Focus Bear – Reflection

This document summarizes and reflects on several critical third-party libraries
used in the Focus Bear React Native codebase. Understanding these tools helps us
maintain a high-quality, secure, and user-friendly app.

---

## 1. Redux-Persist

**Purpose:**  
Redux-Persist automatically saves (persists) the Redux state to a chosen storage
engine (commonly AsyncStorage) and rehydrates it when the app reloads. This
allows user sessions, settings, and application state to persist between app
launches.

**Why It’s Useful:**

- **Continuity:** Users don’t lose their progress or personalized settings on
  app restart.
- **Improved User Experience:** Seamless experience as the app restores its
  state automatically.

```tsx
// To achieve the persist function combined with redux
// store.ts
import { configureStore, combineReducers, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

// create a simple slice example
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});

export const { increment } = counterSlice.actions;

// combine reducer (more slices can be added later)
const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

// configure redux-persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// use configureStore to create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REGISTER"],
      },
    }),
});

export const persistor = persistStore(store);

// _layout.tsx or the root file
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

//...
return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
    {/* Other Content */}
  </Provider>
);
//...

// reduxExample.tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, store } from "./store";

// define RootState type for TypeScript to infer state structure
type RootState = ReturnType<typeof store.getState>;

const ReduxExample: React.FC = () => {
  const dispatch = useDispatch();
  // use useSelector to read counter state
  const counter = useSelector((state: RootState) => state.counter);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Redux-Persist Counter: {counter}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
    </View>
  );
};

export default ReduxExample;
```

---

## 2. React-Native-Background-Fetch

**Purpose:**  
This library enables the scheduling and execution of background tasks even when
the app is not in the foreground. It leverages native OS scheduling capabilities
to perform periodic data fetching or updates.

**How It Differs from a Normal Timer:**

- **Background Execution:** Unlike `setTimeout` or `setInterval`, which run only
  when the app is active, react-native-background-fetch can trigger tasks even
  when the app is suspended.
- **OS Integration:** It works closely with the device’s operating system to
  ensure tasks are executed reliably despite system limitations or battery
  optimizations.

- However, I decide to use the Expo-Background-Fetch. Because the Expo will only
  support the existing libraries inside the Expo. The third party libraries will
  need extra work to achieve. Following is how to achieve that in one project.

  ```tsx
  // background.tsx
  import React, { useEffect } from "react";
  import { Text, View, StyleSheet, Button, Alert } from "react-native";
  import * as BackgroundFetch from "expo-background-fetch";
  import * as TaskManager from "expo-task-manager";

  const BACKGROUND_FETCH_TASK = "expo-background-fetch-task";

  // Define the background task
  TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    try {
      console.log("Background fetch task executed");
      // Perform background operations here, such as data synchronization or API calls.
      // Return one of the BackgroundFetch result types:
      return BackgroundFetch.BackgroundFetchResult.NewData;
    } catch (error) {
      console.error("Error in background fetch task", error);
      return BackgroundFetch.BackgroundFetchResult.Failed;
    }
  });

  // register the task
  const ExpoBackgroundFetchTest = () => {
  useEffect(() => {
    const registerBackgroundFetchAsync = async () => {
      try {
        const status = await BackgroundFetch.getStatusAsync();
        console.log("Background fetch status:", status);
        if (status === BackgroundFetch.BackgroundFetchStatus.Available) {
          await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
            minimumInterval: 15 * 60, // 15 minutes in seconds
            stopOnTerminate: false,   // Continue task after app termination
            startOnBoot: true,        // Restart task on device boot
          });
          console.log("Background fetch task registered");
        } else {
          console.log("Background fetch is not available");
        }
      } catch (error) {
        console.error("Error registering background fetch task", error);
      }
    };

    registerBackgroundFetchAsync();

    return () => {
      // Optionally unregister the background fetch task when the component unmounts.
      BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK)
        .then(() => console.log("Background fetch task unregistered"))
        .catch((error) =>
          console.error("Error unregistering background fetch task", error)
        );
    };
  }, []);
  ```

## 3. Auth0 (react-native-auth0)

**Purpose:**  
Auth0 provides a comprehensive, secure authentication service. It handles user
sign-up, login, and token management out-of-the-box, reducing the complexity of
building a custom authentication system.

**Why Focus Bear Uses Auth0:**

- **Enhanced Security:** Offers built-in measures such as multi-factor
  authentication and secure token handling.
- **Faster Implementation:** Speeds up development by offloading the heavy
  lifting of authentication and related security concerns.
- **Scalability:** Easily accommodates growth in user numbers and changing
  security requirements.

---

## 4. PostHog

**Purpose:**  
PostHog is an analytics tool that collects data on user interactions within the
app. It helps us understand user behavior, monitor feature usage, and make
data-driven improvements.

**Benefits for Focus Bear:**

- **User Insights:** Identify which features are most used and where users
  encounter issues.
- **Informed Decisions:** Data guides product decisions and helps prioritize
  enhancements.
- **Improved User Experience:** Tailor the app based on actual usage patterns to
  better meet user needs.

---

## 5. Sentry vs. PostHog

- **Sentry:**

  - **Purpose:** Error tracking and crash reporting tool.
  - **Use Case:** Monitor real-time errors, capture stack traces, and diagnose
    issues to improve app stability.

- **PostHog:**
  - **Purpose:** Analytics and user behavior tracking tool.
  - **Use Case:** Gather insights on feature usage and overall user engagement
    to inform product improvements.

**When to Use Each:**

- **Sentry** is essential when you need to detect and fix bugs as they occur,
  ensuring the app runs smoothly.
- **PostHog** is used for collecting user behavior data over time to drive
  product strategy and UI/UX improvements.

---

## 6. React-Native-Localize

**Purpose:**  
This library detects the device’s locale and regional settings, providing
information like preferred language, time zone, and number/date formats.

**Interaction with i18next:**

- **Locale Detection:** react-native-localize automatically detects the user’s
  language and regional preferences.
- **Integration:** i18next uses these settings to load the correct translation
  files, ensuring that the app displays content in the appropriate language and
  format for the user.

---

## 7. Library Replacement Consideration

**Potential Candidate:**  
I would consider replacing **react-native-background-fetch** if we find its
configuration and behavior too complex or inconsistent across platforms.

**Alternative Option:**  
An alternative like **react-native-background-timer** might be used for simpler,
periodic tasks. However, the decision to replace would depend on whether the
alternative meets our requirements for reliability, native integration, and
performance.

**Reasoning:**

- **Simplicity:** If our background tasks are simple and don't need advanced
  scheduling, a lighter solution might reduce complexity.
- **Platform Consistency:** Ensuring consistent behavior on both iOS and Android
  is critical, and a simpler alternative might offer better consistency.

---

## Summary

- **Redux-Persist** ensures continuity by preserving state between sessions.
- **React-Native-Background-Fetch** enables reliable background tasks via
  OS-level scheduling.
- **Auth0** simplifies secure, scalable authentication.
- **PostHog** provides actionable insights into user behavior, while **Sentry**
  focuses on error monitoring.
- **React-Native-Localize** works with i18next to deliver localized content.
- A potential library replacement could be considered for background processing
  if a simpler, more consistent tool meets our needs.
