// src/navigation/testScreens/NativeModuleExample.tsx
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// mock native module: get current time directly using JavaScript
const getCurrentTime = () => {
  return new Date().toLocaleTimeString();
};

const NativeModuleExample = () => {
  const [time, setTime] = useState("Unknown");

  const fetchTime = () => {
    const currentTime = getCurrentTime();
    setTime(currentTime);
  };

  useEffect(() => {
    fetchTime();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Native Module Example</Text>
      <Text>Current Time: {time}</Text>
      <Button title="Refresh Time" onPress={fetchTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 10 },
});

export default NativeModuleExample;
