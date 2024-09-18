import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section">
      <h2>Наши Услуги</h2>
      <div className="services-container">
        <div className="service-card">
          <img src={image1} alt="Service 1" />
        </div>
        <div className="service-card">
          <img src={image2} alt="Service 2" />
        </div>
        <div className="service-card">
          <img src={image3} alt="Service 3" />
        
        </div>
      </div>
    </section>
  );
};

export default Services;

