// src/navigation/testScreens/BackgroundFetchExample.tsx
import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";

const BACKGROUND_FETCH_TASK = "background-fetch-task";

// define the background task
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    // Do stuff here
    console.log("Background fetch task executed");
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error(error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

const BackgroundFetchExample: React.FC = () => {
  useEffect(() => {
    const registerBackgroundFetch = async () => {
      // Check if the task is already registered
      const tasks = await TaskManager.getRegisteredTasksAsync();
      if (!tasks.find((task) => task.taskName === BACKGROUND_FETCH_TASK)) {
        try {
          await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
            minimumInterval: 1 * 60, // 1 minutes
            stopOnTerminate: false,
            startOnBoot: true,
          });
          console.log("Background fetch task registered successfully");
        } catch (err) {
          console.error("Failed to register background fetch task:", err);
        }
      }
    };

    registerBackgroundFetch();
  }, []);

  const simulateBackgroundFetch = () => {
    // PS: expo-background-fetch cannot be triggered manually, this is just a simulation
    Alert.alert(
      "Background Fetch Simulation",
      "This would be triggered by the system."
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Expo Background Fetch Example</Text>
      <Button
        title="Simulate Background Fetch"
        onPress={simulateBackgroundFetch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: { fontSize: 16, marginBottom: 16 },
});

export default BackgroundFetchExample;
