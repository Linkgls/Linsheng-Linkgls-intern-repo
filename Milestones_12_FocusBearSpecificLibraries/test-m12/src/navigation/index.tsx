import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButton, Text } from "@react-navigation/elements";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import bell from "../assets/bell.png";
import newspaper from "../assets/newspaper.png";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { Settings } from "./screens/Settings";
import { Updates } from "./screens/Updates";
import { NotFound } from "./screens/NotFound";

import { Test } from "./screens/Test";

import "../i18n";
import I18nExample from "./testScreens/I18nExample";
import NativeModuleExample from "./testScreens/NativeModuleExample";
import SentryExample from "./testScreens/SentryExample";
import ReduxExample from "./testScreens/ReduxExmaple";
import BackgroundFetchExample from "./testScreens/BackgroundFetchExample";

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: "Feed",
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Updates: {
      screen: Updates,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Image
            source={bell}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: "Home",
        headerShown: false,
      },
    },
    Home: {
      screen: Home,
      linking: {
        path: "Home",
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: "Profile/:user(@[a-zA-Z0-9-_]+)",
        parse: {
          user: (value) => value.replace(/^@/, ""),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: "modal",
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: "404",
      },
      linking: {
        path: "*",
      },
    },
    Test: {
      screen: Test,
      options: {
        title: "Test",
      },
      linking: { path: "test" },
    },
    I18nExample: {
      screen: I18nExample,
      options: {
        title: "I18n Example",
      },
      linking: {
        path: "i18n",
      },
    },
    NativeModuleExample: {
      screen: NativeModuleExample,
      options: {
        title: "Native Module Example",
      },
      linking: { path: "native-modules" },
    },
    SentryExample: {
      screen: SentryExample,
      options: {
        title: "Sentry Example",
      },
      linking: { path: "sentry" },
    },
    ReduxExample: {
      screen: ReduxExample,
      options: {
        title: "Redux Example",
      },
      linking: { path: "redux" },
    },
    BackgroundFetchExample: {
      screen: BackgroundFetchExample,
      options: {
        title: "Background Fetch Example",
      },
      linking: { path: "background" },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
