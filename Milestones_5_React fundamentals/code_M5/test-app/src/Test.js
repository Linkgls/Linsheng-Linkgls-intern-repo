// src/Test.js
import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ContactForm from "./components/ContactForm";

const Test = () => {
  return (
    <div style={{ padding: "20px" }}>
      <LanguageSwitcher />
      <WelcomeMessage />
      <ContactForm />
      {/* <OptimizedComponent /> */}
      {/* <OptimizedList /> */}
      {/* <EffectDemo /> */}
    </div>
  );
};

export default Test;
