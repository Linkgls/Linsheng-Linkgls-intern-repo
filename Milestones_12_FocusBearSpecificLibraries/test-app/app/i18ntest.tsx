import { Button, StyleSheet, View, Text } from "react-native";
import { useTranslation } from "react-i18next";

export default function I18nTest() {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("welcome")}</Text>
      <Text style={styles.subtitle}>{t("goodMorning")}</Text>
      <View style={styles.buttonContainer}>
        <Button title="English" onPress={() => i18n.changeLanguage("en")} />
        <Button title="Español" onPress={() => i18n.changeLanguage("es")} />
        <Button title="Français" onPress={() => i18n.changeLanguage("fr")} />
      </View>
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
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
