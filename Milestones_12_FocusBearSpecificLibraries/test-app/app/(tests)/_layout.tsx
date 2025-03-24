import * as Linking from "expo-linking";
import * as Sentry from "@sentry/react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import HomeScreen from "./index";

const prefix = Linking.createURL("/");
const linking = {
  prefixes: [prefix],
  config: {
    screens: {},
  },
};

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer linking={linking}>
      <View></View>
    </NavigationContainer>
  );
}

export default Sentry.wrap(App);
