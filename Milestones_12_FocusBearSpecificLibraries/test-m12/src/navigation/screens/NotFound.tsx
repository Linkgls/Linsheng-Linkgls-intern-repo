import { StyleSheet, View, Button, Text } from "react-native";
import * as Linking from "expo-linking";

export function NotFound() {
  return (
    <View style={styles.container}>
      <Text>404</Text>
      <Button
        title="Go to Home"
        onPress={() => Linking.openURL("Home")}
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
