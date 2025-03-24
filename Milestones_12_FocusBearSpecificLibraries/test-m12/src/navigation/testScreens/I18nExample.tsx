// src/navigation/testScreens/I18nExample.tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

const I18nExample = () => {
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
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default I18nExample;
