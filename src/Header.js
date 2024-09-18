import React, { useState } from 'react';
import './Header.css';
import logo from './logo.svg';

const Header = () => {
  
  const [selectedLanguage, setSelectedLanguage] = useState('РУС');

 
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/sortirovka">Вывоз и сортировка СО</a></li>
          <li><a href="/vyvoz-tbo">Вывоз ТБО</a></li>
          <li><a href="/kontakty">Контакты</a></li>
        </ul>
      </nav>
      <div className="language">
        <span
          className={selectedLanguage === 'КАЗ' ? 'selected' : ''}
          onClick={() => handleLanguageChange('КАЗ')}
        >
          КАЗ
        </span>
        <span
          className={selectedLanguage === 'РУС' ? 'selected' : ''}
          onClick={() => handleLanguageChange('РУС')}
        >
          РУС
        </span>
        <span
          className={selectedLanguage === 'ENG' ? 'selected' : ''}
          onClick={() => handleLanguageChange('ENG')}
        >
          ENG
        </span>
        <i className="fas fa-phone"></i>
        <span>+7 (777) 770-70-70</span>
      </div>
    </header>
  );
};

export default Header;


