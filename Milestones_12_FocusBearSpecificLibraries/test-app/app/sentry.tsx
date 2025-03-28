// app/sentry.tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Sentry from "@sentry/react-native";

const sentry = () => {
  const simulateError = () => {
    try {
      throw new Error("Simulated error for Sentry testing");
    } catch (error) {
      Sentry.captureException(error);
      console.log("Error captured by Sentry:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logging Example with Sentry</Text>
      <Button title="Simulate Error" onPress={simulateError} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});

export default sentry;
