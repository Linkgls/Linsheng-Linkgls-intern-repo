// src/App.js
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import LanguageSwitcher from './components/LanguageSwitcher';
import ContactForm from './components/ContactForm';
import OptimizedComponent from './components/OptimizedComponent';
import OptimizedList from './components/OptimizedList';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <LanguageSwitcher />
      <WelcomeMessage />
      <ContactForm />
      {/* <OptimizedComponent /> */}
      <OptimizedList />
    </div>
  );
};

export default App;
