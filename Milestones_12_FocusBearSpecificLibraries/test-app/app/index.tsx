import { StyleSheet, View, Button, Text } from "react-native";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";

export default function TestScreen() {
  const router = useRouter();

  // For Test the Deep Linking
  const URL_I18n = "/i18ntest";
  const URL_NativeModules = "/nativeModules";
  const URL_Sentry = "/sentry";
  const URL_Redux = "/reduxExample";
  const URL_BackGround = "/background";
  const URL_Google = "/https://www.google.com";
  return (
    <View style={styles.container}>
      <Text>Test Screen</Text>
      <Text>This Screen is testing the Deep Linking by expo router</Text>
      <Button
        title="Test i18n"
        onPress={() => router.navigate(URL_I18n)}
      ></Button>
      <Button
        title="Test Native Modules"
        onPress={() => router.navigate(URL_NativeModules)}
      ></Button>
      <Button
        title="Test Sentry"
        onPress={() => router.navigate(URL_Sentry)}
      ></Button>
      <Button
        title="Test Redux Persist"
        onPress={() => router.navigate(URL_Redux)}
      ></Button>
      <Button
        title="Test Background Fetch"
        onPress={() => router.navigate(URL_BackGround)}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
});
