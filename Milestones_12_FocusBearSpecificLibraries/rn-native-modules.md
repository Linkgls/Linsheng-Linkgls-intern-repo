# Using Native Modules and Bridging in React Native

## Why Would You Need to Use Native Modules in a React Native App?

- **Access Platform-Specific Features:** Native Modules could help to access to
  system settings, notifications, background services, and other
  platform-specific features that are not available in the core React Native
  API.

- **Optimize Performance:**For computationally heavy tasks, native code often
  delivers better performance. Offloading such tasks to native modules can help
  maintain a smooth user experience.

## How Does React Native Communicate with Native Code?

React Native communicates with native code using an asynchronous bridge. This
bridge serializes data (often as JSON) and passes it between JavaScript and the
native environment. It employs callbacks, promises, or async/await to manage
asynchronous operations, ensuring that the UI remains responsive even while
waiting for native code responses. PS: Could use the `RCTBridgeModule` for iOS
or `ReactContextBaseJavaModule` for Android.

## Code Example to use React Native Module

```tsx
// app/NativeModuleTest.tsx
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// Simulated native module function: returns the current time using JavaScript.
const getCurrentTime = () => {
  return new Date().toLocaleTimeString();
};

const NativeModuleTest = () => {
  const [time, setTime] = useState("Unknown");

  // This function fetches the current time using the simulated native module.
  const fetchTime = () => {
    const currentTime = getCurrentTime();
    setTime(currentTime);
  };

  // On component mount, fetch the current time.
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

export default NativeModuleTest;
```

## Challenges of Maintaining Native Bridges

- **Performance Overhead:**  
  The bridge communication is asynchronous and involves serialization, which can
  introduce latency—especially for performance-critical tasks.

- **Debugging Difficulties:**  
  Errors might originate on either the JavaScript or the native side, making
  debugging more challenging. Debugging across the bridge requires tools and
  expertise in both environments.

- **Platform-Specific Code Maintenance:**  
  Maintaining separate implementations for iOS and Android can lead to
  discrepancies and increased maintenance overhead.
