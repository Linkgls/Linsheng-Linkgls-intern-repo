# Localisation with react-i18next in React Native

## How Does react-i18next Handle Translations?

- **Resource Configuration:**  
  react-i18next is built on top of i18next, a robust internalization framework.
  I first develop a typescript file to config the resources. Through this way to
  make the react project could change all the language text from one language to
  another language.

  ```jsx
  import i18n from "i18next";
  import { initReactI18next } from "react-i18next";

  const resources = {
    en: {
      translation: {
        welcome: "Welcome!",
        goodMorning: "Good Morning!",
      },
    },
    es: {
      translation: {
        welcome: "¡Bienvenido!",
        goodMorning: "¡Buenos días!",
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue!",
        goodMorning: "Bonjour!",
      },
    },
  };

  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

  export default i18n;
  ```

  And then import the i18n inside the root page like 'import "../i18n"' to make
  the component could use the pre-config resources.

- **Component Integration**  
   It provides hooks (e.g., `useTranslation`) and components that allow React components
  to access and display translations dynamically.

  ```tsx
  const I18nExample = () => {
    const { t, i18n } = useTranslation();

    return (
      <View style={styles.container}>
        <Text>{t("welcome")}</Text>
        <Text>{t("goodMorning")}</Text>
        <View style={styles.buttonContainer}>
          <Button title="English" onPress={() => i18n.changeLanguage("en")} />
          <Button title="Español" onPress={() => i18n.changeLanguage("es")} />
          <Button title="Français" onPress={() => i18n.changeLanguage("fr")} />
        </View>
      </View>
    );
  };
  ```

## What Challenges Arise When Localising a React Native App?

I only test the simple one to test the switch language function. However the
i18n provides other function to manage different language json file to achieve
resources optimization when dealing with large scale language contents.

```tsx
// example code
i18n.init({
  // ...existing config
  partialBundledLanguages: true,
  resources: {
    en: { translation: require("./locales/en.json") },
    es: { translation: require("./locales/es.json") },
  },
});
// the json format should like
resources: {
  [lng: string]: {
    [namespace: string]: {
      [key: string]: string;
    };
  };
}
```

## How Would You Test Localisation Support in an App?

I have already test the localisation in a test app, while now it is in the new
app test-app.
