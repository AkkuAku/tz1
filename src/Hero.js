import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    <section className="hero"
      style={{ 
        backgroundImage: `url("https://img.freepik.com/free-photo/view-heavy-machinery-used-construction-industry_23-2151307710.jpg?t=st=1726670171~exp=1726673771~hmac=f12e57eb024d01a2aef3eb46b1aa047ab8255d98d3d547f2372d7fcdad07697e&w=1480")`
      }}>
      <div className="hero-content">
        <h1>Отходы без последствий</h1>
        <p>Вывоз строительных и твердых бытовых отходов в г. Астана и Алматы</p>
        <button>Оставить заявку</button>
      </div>
    </section>
  );
};

export default HeroSection;

