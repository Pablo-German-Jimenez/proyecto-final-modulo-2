import { useState, useEffect } from "react";
import { Button, Badge } from "react-bootstrap";
import deadpoolImage from "../assets/images/deadpool.jfif";
import garraImage from "../assets/images/Garra.jpg";
import conjuro2Image from "../assets/images/El conjuro 2.jpg";
import purgaImage from "../assets/images/La purga.jpeg";
import toyStoryImage from "../assets/images/toy story.jpg";
import deadpoolVideo from "../assets/images/videodedeadpool.mp4";
import garrasVideo from "../assets/images/videodegarras.mp4";
import conjuroVideo from "../assets/images/videodeelconjuro.mp4";
import purgaVideo from "../assets/images/videodelapurga.mp4";
import toyStoryVideo from "../assets/images/video de toy story.mp4";

const HeroMovie = ({ onMovieClick }) => {
  // Array de imágenes para el carrusel
  const movieImages = [
    deadpoolImage,
    garraImage,
    conjuro2Image,
    purgaImage,
    toyStoryImage
  ];

  // Videos para películas específicas
  const deadpoolVideoSrc = deadpoolVideo;
  const garrasVideoSrc = garrasVideo;
  const conjuroVideoSrc = conjuroVideo;
  const purgaVideoSrc = purgaVideo;
  const toyStoryVideoSrc = toyStoryVideo;

  // Función para obtener el video según la película
  const getMovieVideo = (index) => {
    let video = null;
    switch (index) {
      case 0: video = deadpoolVideoSrc; break; // Deadpool
      case 1: video = garrasVideoSrc; break;   // Garras
      case 2: video = conjuroVideoSrc; break;  // El Conjuro 2
      case 3: video = purgaVideoSrc; break;    // La Purga
      case 4: video = toyStoryVideoSrc; break; // Toy Story
      default: video = null; // Todas las películas tienen video ahora
    }
    return video;
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // IDs de películas para navegación
  const movieIds = ['deadpool', 'garras', 'conjuro', 'purga', 'toystory'];

  // Función para manejar clic en película
  const handleMovieClick = () => {
    if (onMovieClick) {
      onMovieClick(movieIds[currentImageIndex]);
    }
  };

  // Función para obtener efectos únicos por película
  const getMovieHoverEffect = (index) => {
    const effects = {
      0: { // Deadpool
        transform: "scale(1.1) rotate(2deg)",
        filter: "brightness(1.2) contrast(1.1) saturate(1.3)",
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
      },
      1: { // Garras
        transform: "scale(1.08) translateY(-5px)",
        filter: "brightness(1.1) contrast(1.2) sepia(0.1)",
        transition: "all 0.5s ease-out"
      },
      2: { // El Conjuro 2
        transform: "scale(1.05) translateX(-3px)",
        filter: "brightness(0.8) contrast(1.3) hue-rotate(10deg)",
        transition: "all 0.7s ease-in-out"
      },
      3: { // La Purga
        transform: "scale(1.12) rotate(-1deg)",
        filter: "brightness(0.9) contrast(1.4) saturate(1.2) hue-rotate(-5deg)",
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      },
      4: { // Toy Story
        transform: "scale(1.06) translateY(3px)",
        filter: "brightness(1.3) contrast(1.1) saturate(1.4) hue-rotate(15deg)",
        transition: "all 0.8s ease"
      }
    };
    return effects[index] || effects[0];
  };

  // Función para obtener efectos únicos del video por película
  const getVideoHoverEffect = (index) => {
    const videoEffects = {
      0: { // Deadpool
        transform: "scale(1.05) rotate(1deg)",
        filter: "brightness(1.1) contrast(1.2) saturate(1.2)",
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
      },
      1: { // Garras
        transform: "scale(1.02) translateY(-2px)",
        filter: "brightness(1.05) contrast(1.1) sepia(0.05)",
        transition: "all 0.5s ease-out"
      },
      2: { // El Conjuro 2
        transform: "scale(1.03) translateX(-2px)",
        filter: "brightness(0.9) contrast(1.2) hue-rotate(5deg)",
        transition: "all 0.7s ease-in-out"
      },
      3: { // La Purga
        transform: "scale(1.06) rotate(-0.5deg)",
        filter: "brightness(0.95) contrast(1.3) saturate(1.1) hue-rotate(-3deg)",
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      },
      4: { // Toy Story
        transform: "scale(1.04) translateY(2px)",
        filter: "brightness(1.2) contrast(1.05) saturate(1.3) hue-rotate(8deg)",
        transition: "all 0.8s ease"
      }
    };
    return videoEffects[index] || videoEffects[0];
  };

  // Función para obtener colores y efectos únicos del contenido por película
  const getContentHoverEffect = (index) => {
    const contentEffects = {
      0: { // Deadpool
        titleColor: "#ff6b6b",
        buttonColor: "#ff4757",
        glowEffect: "0 0 20px rgba(255, 107, 107, 0.5)",
        transform: "translateY(5px) scale(1.02)"
      },
      1: { // Garras
        titleColor: "#ffa726",
        buttonColor: "#ff9800",
        glowEffect: "0 0 20px rgba(255, 167, 38, 0.5)",
        transform: "translateY(-3px) scale(1.01)"
      },
      2: { // El Conjuro 2
        titleColor: "#9c27b0",
        buttonColor: "#8e24aa",
        glowEffect: "0 0 20px rgba(156, 39, 176, 0.5)",
        transform: "translateY(8px) scale(1.03)"
      },
      3: { // La Purga
        titleColor: "#f44336",
        buttonColor: "#d32f2f",
        glowEffect: "0 0 20px rgba(244, 67, 54, 0.5)",
        transform: "translateY(2px) scale(1.04)"
      },
      4: { // Toy Story
        titleColor: "#4caf50",
        buttonColor: "#388e3c",
        glowEffect: "0 0 20px rgba(76, 175, 80, 0.5)",
        transform: "translateY(-5px) scale(1.02)"
      }
    };
    return contentEffects[index] || contentEffects[0];
  };

  // Efecto para cambiar automáticamente las imágenes cada 5 segundos
  useEffect(() => {
    // Solo ejecutar el carrusel automático si no hay hover
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % movieImages.length
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [movieImages.length, isHovered]);

  return (
    <div
      className="d-flex align-items-center justify-content-start text-white position-relative overflow-hidden"
      style={{
        height: "60vh",
        minHeight: "400px",
        position: "relative",
        cursor: "pointer"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleMovieClick}
    >
      {/* Imagen de fondo con transición suave */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `url('${movieImages[currentImageIndex]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          opacity: isHovered ? 0.2 : 1,
          ...(isHovered ? getMovieHoverEffect(currentImageIndex) : {
            transform: "scale(1.05)",
            filter: "none",
            transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out"
          })
        }}
      />

      {/* Video overlay que aparece en hover - Para Deadpool y Garras */}
      {getMovieVideo(currentImageIndex) && (
        <div
          className="position-absolute w-100 h-100"
          style={{
            zIndex: 1.5,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            pointerEvents: "none",
            ...(isHovered ? getVideoHoverEffect(currentImageIndex) : {})
          }}
        >
          <video
            key={currentImageIndex}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "0",
            }}
          >
            <source src={getMovieVideo(currentImageIndex)} type="video/mp4" />
          </video>
        </div>
      )}
      
      {/* Overlay con gradiente profesional */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)",
          zIndex: 2,
          opacity: isHovered ? 0.6 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {/* Contenido estilo Netflix */}
      <div 
        className="position-absolute" 
        style={{ 
          bottom: "0", 
          left: "0", 
          right: "0", 
          zIndex: 3,
          padding: "0 20px 60px 20px",
          transform: isHovered ? getContentHoverEffect(currentImageIndex).transform : "translateY(0)",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <div className="row">
          <div className="col-12 col-lg-6">
            {/* Logo Netflix */}
            <div className="mb-4">
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(0,0,0,0.8)",
                padding: "8px 16px",
                borderRadius: "4px",
                fontSize: "0.9rem",
                fontWeight: "600",
                letterSpacing: "0.5px"
              }}>
                <span style={{ color: "#e50914", marginRight: "8px" }}>●</span>
                <span style={{ color: "white" }}>NETFLIX</span>
                {isHovered && getMovieVideo(currentImageIndex) && (
                  <span style={{ 
                    color: "#ffc107", 
                    marginLeft: "8px",
                    fontSize: "0.8rem",
                    animation: "pulse 1.5s infinite"
                  }}>
                    ▶ VIDEO
                  </span>
                )}
              </div>
            </div>

            {/* Título principal */}
            <h1 className="fw-bold mb-3 mb-lg-4" style={{ 
              fontSize: "2.5rem",
              lineHeight: "1.1",
              color: isHovered ? getContentHoverEffect(currentImageIndex).titleColor : "white",
              textShadow: isHovered ? getContentHoverEffect(currentImageIndex).glowEffect : "2px 2px 8px rgba(0,0,0,0.8)",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "-1px",
              transition: "all 0.5s ease-in-out"
            }}>
              {currentImageIndex === 0 ? "DEADPOOL" : 
               currentImageIndex === 1 ? "GARRAS" : 
               currentImageIndex === 2 ? "EL CONJURO 2" : 
               currentImageIndex === 3 ? "LA PURGA" : 
               "TOY STORY"}
            </h1>

            {/* Información de la película */}
            <div className="mb-3 mb-lg-4">
              <div className="d-flex flex-wrap align-items-center gap-2 gap-lg-3 mb-2 mb-lg-3">
                <div className="d-flex align-items-center gap-1">
                  <span style={{ color: "#ffc107", fontSize: "1rem" }}>⭐</span>
                  <span style={{ 
                    fontSize: "0.9rem", 
                    fontWeight: "600",
                    color: "white",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.7)"
                  }}>
                    {currentImageIndex === 0 ? "8.0" : currentImageIndex === 1 ? "7.3" : currentImageIndex === 2 ? "7.3" : currentImageIndex === 3 ? "6.7" : "8.3"}
                  </span>
                </div>
                <span style={{ 
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.8)",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.7)"
                }}>
                  {currentImageIndex === 0 ? "2016" : currentImageIndex === 1 ? "2022" : currentImageIndex === 2 ? "2016" : currentImageIndex === 3 ? "2013" : "1995"}
                </span>
                <span style={{ 
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.8)",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.7)"
                }}>
                  {currentImageIndex === 0 ? "Acción, Comedia" : currentImageIndex === 1 ? "Drama, Deportes" : currentImageIndex === 2 ? "Terror, Suspenso" : currentImageIndex === 3 ? "Terror, Thriller" : "Animación, Aventura"}
                </span>
                <span style={{ 
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.8)",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.7)"
                }}>
                  {currentImageIndex === 0 ? "108" : currentImageIndex === 1 ? "117" : currentImageIndex === 2 ? "134" : currentImageIndex === 3 ? "85" : "81"} min
                </span>
              </div>
            </div>

            {/* Descripción */}
            <p className="mb-3 mb-lg-4" style={{ 
              fontSize: "0.9rem", 
              lineHeight: "1.4",
              color: "white",
              textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
              maxWidth: "100%"
            }}>
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

            {/* Botones */}
            <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3">
              <Button 
                variant="danger" 
                size="lg"
                className="px-3 px-sm-4 py-2 py-sm-3"
                style={{
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: isHovered ? getContentHoverEffect(currentImageIndex).buttonColor : "#dc3545",
                  boxShadow: isHovered ? getContentHoverEffect(currentImageIndex).glowEffect : "0 2px 8px rgba(229, 9, 20, 0.4)",
                  transition: "all 0.3s ease",
                  minHeight: "44px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 4px 12px rgba(229, 9, 20, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 2px 8px rgba(229, 9, 20, 0.4)";
                }}
              >
                ▶ Reproducir
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                className="px-3 px-sm-4 py-2 py-sm-3"
                style={{
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  border: "2px solid rgba(255,255,255,0.8)",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  background: "rgba(0,0,0,0.3)",
                  backdropFilter: "blur(10px)",
                  minHeight: "44px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(0,0,0,0.3)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                + Mi Lista
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores estilo Netflix */}
      <div 
        className="position-absolute d-none d-md-block"
        style={{ 
          bottom: "20px", 
          right: "60px", 
          zIndex: 4 
        }}
      >
        <div className="d-flex gap-2 align-items-center">
          {movieImages.map((_, index) => (
            <button
              key={index}
              className="btn p-0 border-0"
              style={{ 
                width: index === currentImageIndex ? '32px' : '8px', 
                height: '8px',
                borderRadius: '4px',
                background: index === currentImageIndex 
                  ? '#e50914' 
                  : 'rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
                opacity: index === currentImageIndex ? 1 : 0.6
              }}
              onClick={() => setCurrentImageIndex(index)}
              onMouseEnter={(e) => {
                e.target.style.opacity = '1';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                if (index !== currentImageIndex) {
                  e.target.style.opacity = '0.6';
                  e.target.style.transform = 'scale(1)';
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Indicadores para móvil */}
      <div 
        className="position-absolute d-block d-md-none"
        style={{ 
          bottom: "15px", 
          left: "50%", 
          transform: "translateX(-50%)",
          zIndex: 4 
        }}
      >
        <div className="d-flex gap-2 align-items-center">
          {movieImages.map((_, index) => (
            <button
              key={index}
              className="btn p-0 border-0"
              style={{ 
                width: index === currentImageIndex ? '24px' : '6px', 
                height: '6px',
                borderRadius: '3px',
                background: index === currentImageIndex 
                  ? '#e50914' 
                  : 'rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
                opacity: index === currentImageIndex ? 1 : 0.6
              }}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroMovie;
