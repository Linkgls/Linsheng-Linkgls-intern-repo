// src/components/WelcomeMessage.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const WelcomeMessage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('goodMorning')}</p>
    </div>
  );
};

export default WelcomeMessage;
