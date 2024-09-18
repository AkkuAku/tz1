import React from 'react';
import './Advantages.css';
import image4 from './4.png';

const Advantages = () => {
  return (
    <section className="advantages-section">
      <div className="advantages-container">
        <div className="advantages-text">
          <h2>Преимущества наших бункеров</h2>
          <p>Довольство наших клиентов и партнеров очень важно для долгосрочного сотрудничества...</p>
          <p>Мы гарантируем прозрачность действий в области управления отходами, соблюдая все экологические, производственные и санитарные нормы.</p>
          <p>Мы несем административную и моральную ответственность за отходы перед государственными органами после передачи их нашей компании.</p>
        </div>
        <div className="advantages-image">
          <img src={image4} alt="Bunkers" />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
