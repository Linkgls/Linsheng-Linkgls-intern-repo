// background.tsx
import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

const BACKGROUND_FETCH_TASK = "expo-background-fetch-task";

// Define the background task
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    console.log("Background fetch task executed");
    // Perform background operations here, e.g., data synchronization or API calls.
    // Return one of the BackgroundFetch result types:
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error("Error in background fetch task", error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

const ExpoBackgroundFetchTest = () => {
  useEffect(() => {
    const registerBackgroundFetchAsync = async () => {
      try {
        const status = await BackgroundFetch.getStatusAsync();
        console.log("Background fetch status:", status);
        if (status === BackgroundFetch.BackgroundFetchStatus.Available) {
          await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
            minimumInterval: 15 * 60, // 15 minutes in seconds
            stopOnTerminate: false, // Continue task after app termination
            startOnBoot: true, // Restart task on device boot
          });
          console.log("Background fetch task registered");
        } else {
          console.log("Background fetch is not available");
        }
      } catch (error) {
        console.error("Error registering background fetch task", error);
      }
    };

    registerBackgroundFetchAsync();

    return () => {
      // Optionally unregister the background fetch task when the component unmounts.
      BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK)
        .then(() => console.log("Background fetch task unregistered"))
        .catch((error) =>
          console.error("Error unregistering background fetch task", error)
        );
    };
  }, []);

  // A function to manually trigger the background fetch task for testing.
  const triggerManualFetch = async () => {
    try {
      // This executes the task immediately (for testing purposes).
      const result = await TaskManager.getTaskOptionsAsync(
        BACKGROUND_FETCH_TASK
      );
      console.log("Manual Background Fetch executed with options:", result);
      Alert.alert(
        "Manual Background Fetch",
        `Task options: ${JSON.stringify(result)}`
      );
      Alert.alert("Manual Background Fetch", `Result: ${result}`);
    } catch (error) {
      Alert.alert("Error", "Failed to execute background fetch task manually.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Background Fetch Test</Text>
      <Button
        title="Trigger Manual Background Fetch"
        onPress={triggerManualFetch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ExpoBackgroundFetchTest;
