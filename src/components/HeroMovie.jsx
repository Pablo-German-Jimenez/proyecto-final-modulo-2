import React, { useState, useEffect } from "react";
import { Button, Badge } from "react-bootstrap";
import deadpoolImage from "../assets/images/deadpool.jfif";
import garraImage from "../assets/images/Garra.jpg";
import conjuro2Image from "../assets/images/El conjuro 2.jpg";
import purgaImage from "../assets/images/La purga.jpeg";
import toyStoryImage from "../assets/images/toy story.jpg";

const HeroMovie = () => {
  // Array de imágenes para el carrusel
  const movieImages = [
    deadpoolImage,
    garraImage,
    conjuro2Image,
    purgaImage,
    toyStoryImage
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efecto para cambiar automáticamente las imágenes cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % movieImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [movieImages.length]);

  return (
    <div
      className="d-flex align-items-center justify-content-start text-white"
      style={{
        height: "60vh",
        minHeight: "500px",
        backgroundImage: `url('${movieImages[currentImageIndex]}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay oscuro */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      />

      {/* Contenido */}
      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-8">
            <Badge bg="danger" className="mb-2">#1 MÁS VISTA</Badge>
            <h2 className="fw-bold mb-2">
              {currentImageIndex === 0 ? "Deadpool" : currentImageIndex === 1 ? "Garras" : currentImageIndex === 2 ? "El Conjuro 2" : currentImageIndex === 3 ? "La Purga" : "Toy Story"}
            </h2>
            <p className="mb-2" style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
              {currentImageIndex === 0 
                ? "Wade Wilson, un ex-operativo convertido en mercenario, es sometido a un experimento que le otorga poderes de curación acelerada, adoptando el alter ego de Deadpool."
                : currentImageIndex === 1
                ? "Stanley Sugerman, un cazatalentos de la NBA, descubre a un jugador extraordinario en España y se embarca en una aventura para llevarlo a la liga profesional."
                : currentImageIndex === 2
                ? "Lorraine y Ed Warren viajan a Londres para ayudar a una familia que vive en una casa embrujada en Enfield, donde una entidad demoníaca aterroriza a todos."
                : currentImageIndex === 3
                ? "En un futuro distópico, Estados Unidos permite que todos los crímenes sean legales durante 12 horas una vez al año. Una familia debe sobrevivir la noche más peligrosa."
                : "Los juguetes de Andy cobran vida cuando los humanos no están presentes. Woody ve su posición como favorito amenazada cuando llega Buzz Lightyear."
              }
            </p>

            <div className="mb-3" style={{ fontSize: "0.85rem" }}>
              ⭐ {currentImageIndex === 0 ? "8.0" : currentImageIndex === 1 ? "7.3" : currentImageIndex === 2 ? "7.3" : currentImageIndex === 3 ? "6.7" : "8.3"} | {currentImageIndex === 0 ? "2016" : currentImageIndex === 1 ? "2022" : currentImageIndex === 2 ? "2016" : currentImageIndex === 3 ? "2013" : "1995"} • {currentImageIndex === 0 ? "Acción, Comedia" : currentImageIndex === 1 ? "Drama, Deportes" : currentImageIndex === 2 ? "Terror, Suspenso" : currentImageIndex === 3 ? "Terror, Thriller" : "Animación, Aventura"} • {currentImageIndex === 0 ? "108" : currentImageIndex === 1 ? "117" : currentImageIndex === 2 ? "134" : currentImageIndex === 3 ? "85" : "81"} min
            </div>

            <div className="d-flex gap-2">
              <Button variant="warning" size="md">
                ▶ Reproducir
              </Button>
              <Button variant="secondary" size="md">
                + Mi Lista
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores del carrusel */}
      <div 
        className="position-absolute bottom-0 start-50 translate-middle-x mb-3"
        style={{ zIndex: 2 }}
      >
        <div className="d-flex gap-2">
          {movieImages.map((_, index) => (
            <button
              key={index}
              className={`btn btn-sm rounded-circle ${
                index === currentImageIndex ? 'btn-warning' : 'btn-outline-light'
              }`}
              style={{ width: '10px', height: '10px', padding: 0 }}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroMovie;
