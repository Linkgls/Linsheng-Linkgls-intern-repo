// src/App.js
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import LanguageSwitcher from './components/LanguageSwitcher';
import ContactForm from './components/ContactForm';
import EffectDemo from './components/EffectDemo';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <LanguageSwitcher />
      <WelcomeMessage />
      <ContactForm />
      {/* <OptimizedComponent /> */}
      {/* <OptimizedList /> */}
      <EffectDemo />
    </div>
  );
};

export default App;
