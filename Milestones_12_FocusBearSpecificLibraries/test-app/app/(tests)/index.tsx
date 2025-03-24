import { StyleSheet, View, Button, Text } from "react-native";
import * as Linking from "expo-linking";

export default function HomeScreen() {
  // For Test the Deep Linking
  const URL_I18n = "i18n";
  const URL_NativeModules = "native-modules";
  const URL_Sentry = "sentry";
  const URL_Redux = "redux";
  const URL_BackGround = "background";
  const URL_Google = "https://www.google.com";
  return (
    <View style={styles.container}>
      <Text>Test Screen</Text>
      <Text>This Screen is testing the Deep Linking</Text>
      <Button
        title="Test i18n"
        onPress={() => Linking.openURL(URL_I18n)}
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
