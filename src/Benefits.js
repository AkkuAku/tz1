import React from 'react';
import './Benefits.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTruck, faClock, faRecycle, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Benefits = () => {
  return (
    <section className="benefits-section">
      <h2>Сотрудничая с нами, вы получаете</h2>
      <div className="benefits-container">
        <div className="benefit-card">
    
          <FontAwesomeIcon icon={faTruck} size="3x" />
          <h3>Оперативность</h3>
          <p>Своевременная и оперативная подача техники</p>
        </div>
        <div className="benefit-card">
          <FontAwesomeIcon icon={faClock} size="3x" />
          <h3>Работаем 24/7</h3>
          <p>Круглосуточный режим логистики и Call center</p>
        </div>
        <div className="benefit-card">
          <FontAwesomeIcon icon={faRecycle} size="3x" />
          <h3>Соблюдение норм</h3>
          <p>Соблюдаем санитарные и экологические нормы РК</p>
        </div>
        <div className="benefit-card">
          <FontAwesomeIcon icon={faUserTie} size="3x" />
          <h3>Менеджер</h3>
          <p>Персональный менеджер-координатор</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

