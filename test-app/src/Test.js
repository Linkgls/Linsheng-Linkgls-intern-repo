// src/Test.js
import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import Button from "./components/Button";

const Test = () => {
  return (
    <div style={{ padding: "20px" }}>
      <LanguageSwitcher />
      <WelcomeMessage />
      <ContactForm />
      {/* <OptimizedComponent /> */}
      {/* <OptimizedList /> */}
      {/* <EffectDemo /> */}
      {/* <ListForm /> */}
      <Counter />
      {/* test button */}
      <div className="mt-10 flex justify-center">
        <Button onClick={() => alert("Button clicked!")}>Test Button</Button>
      </div>
    </div>
  );
};

export default Test;
