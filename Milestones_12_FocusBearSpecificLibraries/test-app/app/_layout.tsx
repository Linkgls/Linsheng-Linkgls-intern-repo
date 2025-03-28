import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import * as Linking from "expo-linking";
import * as Sentry from "@sentry/react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import "./i18n";

const prefix = Linking.createURL("/");

Sentry.init({
  dsn: "https://2c64e40c53f3a0771b48656fd924ecce@o4509026432647168.ingest.us.sentry.io/4509026433957888",
  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  // profilesSampleRate is relative to tracesSampleRate.
  // Here, we'll capture profiles for 100% of transactions.
  profilesSampleRate: 1.0,
});

function RootLayout() {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="i18ntest" />
        <Stack.Screen name="nativeModules" />
        <Stack.Screen name="sentry" />
        <Stack.Screen name="reduxExample" />
        <Stack.Screen name="background" />

        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </Provider>
  );
}

export default Sentry.wrap(RootLayout);
