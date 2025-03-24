import { StyleSheet, View, Button, Text } from "react-native";
import * as Linking from "expo-linking";

export function Home() {
  return (
    <View style={styles.container}>
      <Text>The test app for onboarding Milestone 12</Text>
      <Text>Will test all the necessary libraries</Text>
      <Button
        title="Go to Profile"
        onPress={() => Linking.openURL("Profile/@Link")}
      ></Button>
      <Button
        title="Go to Settings"
        onPress={() => Linking.openURL("Settings")}
      ></Button>
      <Button
        title="Go to Test"
        onPress={() => Linking.openURL("Test")}
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
});
