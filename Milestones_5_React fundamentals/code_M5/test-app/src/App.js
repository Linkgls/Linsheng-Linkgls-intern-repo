// src/App.js
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <LanguageSwitcher />
      <WelcomeMessage />
    </div>
  );
};

export default App;
