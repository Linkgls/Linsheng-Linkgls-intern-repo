import { StaticScreenProps } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";

type Props = Readonly<
  StaticScreenProps<{
    user: string;
  }>
>;

export function Profile({ route }: Props) {
  return (
    <View style={styles.container}>
      <Text>{route.params.user}'s Profile</Text>
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
