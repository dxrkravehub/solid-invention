import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('kz')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
          language === 'kz'
            ? 'bg-blue-900 text-white'
            : 'text-gray-700 hover:text-blue-900 hover:bg-gray-100'
        }`}
      >
        ҚАЗ
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
          language === 'ru'
            ? 'bg-blue-900 text-white'
            : 'text-gray-700 hover:text-blue-900 hover:bg-gray-100'
        }`}
      >
        РУС
      </button>
    </div>
  );
};

export default LanguageSwitcher;