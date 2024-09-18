import React from 'react';
import './ClientsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function ClientsSection() {
  return (
    <div className="clients-section">
      <h2 className="clients-title">Наши клиенты и заказчики</h2>
      <div className="clients-logos">
        <div className="client-logo labore"></div>
        <div className="client-logo aliqua"></div>
        <div className="client-logo dynamic"></div>
        <div className="client-logo fugiat"></div>
        <div className="client-logo magna"></div>
        <div className="client-logo fresh"></div>
      </div>
      

      <div className="contacts-wrapper">
        <div className="contacts-section">
          <div className="service-info">
            <h3>Услуги</h3>
            <p>Вывоз и сортировка со</p>
            <p>Вывоз тбо</p>
          </div>
          <div className="contact-info">
            <h3>Контакты</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Астана, район Нура, пр. Кабанбай батыра 11/5, офис 1202
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> qurmet.pro@mail.ru
            </p>
            
            <p>
              <FontAwesomeIcon icon={faPhone} /> +7 (777) 770-70-70, +7 (771) 771-77-77
            </p>
            
          </div>
        </div>
      </div>
     
      <div className="design-credits">ABC DESIGN</div>
    </div>
  );
}

export default ClientsSection;







