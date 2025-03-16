// src/App.js
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import LanguageSwitcher from './components/LanguageSwitcher';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <LanguageSwitcher />
      <WelcomeMessage />
      <ContactForm />
    </div>
  );
};

export default App;
