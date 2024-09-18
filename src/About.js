import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
      <div className="about-image" 
             style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/dump-trucks-carrying-sand-and-gravel_1063985-22932.jpg")` }}>
        </div>
        <div className="about-content">
          <h2>О КОМПАНИИ</h2>
          <p>Довольство наших клиентов и партнеров очень важно для
долгосрочного сотрудничества. Мы гарантируем прозрачность
действий в области управления отходами, соблюдая все
экологические, производственные и санитарные нормы.</p>
<p>
Мы несем административную и моральную ответственность за
отходы перед государственными органами после передачи их
нашей компании.</p>
          <button>Подробнее</button>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat">
          <h3>40+</h3>
          <p>В нашем парке свыше 40 единиц спецтехники</p>
        </div>
        <div className="stat">
          <h3>2018</h3>
          <p>Работаем с 2018 года</p>
        </div>
        <div className="stat">
          <h3>126+</h3>
          <p>Более 126 довольных компаний в разных отраслях</p>
        </div>
        <div className="stat">
          <h3>390 тыс м³</h3>
          <p>Годовая максимальная мощность вывоза отходов</p>
        </div>
        <div className="stat">
          <h3>160+</h3>
          <p>Компаний заказчиков</p>
        </div>
      </div>
    </section>
  );
};

export default About;

