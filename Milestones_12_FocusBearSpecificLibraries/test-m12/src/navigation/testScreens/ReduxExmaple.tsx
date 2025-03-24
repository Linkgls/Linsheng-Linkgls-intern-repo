// src/navigation/testScreens/ReduxExample.tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, store } from "../../store";

// define RootState type for TypeScript to infer state structure
type RootState = ReturnType<typeof store.getState>;

const ReduxExample: React.FC = () => {
  const dispatch = useDispatch();
  // use useSelector to read counter state
  const counter = useSelector((state: RootState) => state.counter);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Redux-Persist Counter: {counter}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
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
  counterText: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default ReduxExample;
