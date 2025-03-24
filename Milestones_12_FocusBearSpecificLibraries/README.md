# Create a React Native App to Test for Milestones 12

## Create by using Expo

```bash
npx create-expo-app@latest
```

Well for supporting the deepLink function easily I decide to use the template of navigation.
And I name it test-m12 to test all the react native components.cd

```bash
npx create-expo-app@latest --template react-navigation/template
```

Use the default name my-app. The path of this app is ./Milestones_12_Focus\ Bear\ specific\ libraries/my-app

## install the react navigation

```bash
yarn add @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
```

## Installing the native stack navigator library

```bash
yarn add @react-navigation/native-stack
```

## Installing the elements library

```bash
yarn add @react-navigation/elements
```

## Configure the react navigation

```jsx
// App.tsx
const prefix = Linking.createURL("testm12://");
export function App() {
  return <Navigation linking={{ prefixes: [prefix] }} />;
}

// app.json
  "expo": {
    ...
    "scheme": "testm12",
    ...}
```

## Install the Sentry

```bash
yarn add @sentry/react-native
```

## install i18n

```bash
yarn add i18next react-i18next
```

## install redux persist and redux

```bash
yarn add @reduxjs/toolkit
npm install react-redux
yarn add redux-persist @react-native-async-storage/async-storage
```

## install React-Native-Background-Fetch

```bash
yarn add react-native-background-fetch
# for the expo project
npx expo install expo-background-fetch expo-task-manager
```

## install Auth0

```bash
yarn add react-native-auth0
```

## install PostHog

```bash
yarn add posthog-react-native
```

## install React-Native-Localize

```bash
yarn add react-native-localize
```
