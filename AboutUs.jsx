import React from 'react';
import './AboutUs.css'; // Asegúrate de crear este CSS para los estilos

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">Acerca de Paradise Nursery</h1>
      <p className="about-us-tagline">Donde lo verde se encuentra con el hogar.</p>
      
      <div className="about-us-content">
        <p>
          En <strong>Paradise Nursery</strong>, nuestra pasión es conectar a las personas con la naturaleza. 
          Creemos que cada espacio, ya sea una oficina pequeña o un jardín espacioso, merece un toque de vida verde.
        </p>
        
        <p>
          Nuestra misión es proporcionar plantas de la más alta calidad, seleccionadas cuidadosamente por nuestros 
          expertos botánicos para asegurar que cada cliente reciba un compañero saludable y vibrante para su hogar.
        </p>

        <div className="about-us-values">
          <h3>¿Por qué elegirnos?</h3>
          <ul>
            <li>✨ <strong>Calidad Premium:</strong> Plantas cultivadas con amor y cuidado experto.</li>
            <li>🚚 <strong>Envío Seguro:</strong> Empaques diseñados para proteger la integridad de la planta.</li>
            <li>🌿 <strong>Variedad Exótica:</strong> Desde suculentas fáciles de cuidar hasta plantas tropicales raras.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
