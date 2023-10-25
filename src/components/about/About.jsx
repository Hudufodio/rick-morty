import React from "react";
import "./styles.scss";

const About = () => {
  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div id="about" className="about-container" onChange={handleChange}>
      <h1>Acerca de la Serie Rick y Morty</h1>
      <div className="about-text">
        <p>
          La serie sigue las desventuras de Rick Sánchez, un científico loco y
          su bondadoso pero inquieto nieto Morty Smith, que dividen su tiempo
          entre la vida doméstica y las aventuras interdimensionales que tienen
          lugar en un número infinito de realidades, a menudo viajando a otros
          planetas y dimensiones a través de...
          <a href="https://es.wikipedia.org/wiki/Rick_y_Morty" target="_blank">
            leer más
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
