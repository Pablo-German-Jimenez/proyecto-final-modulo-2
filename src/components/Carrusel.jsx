import React, { useRef, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { ChevronLeft, ChevronRight, Plus, Play, ShoppingBag } from "lucide-react"; // para iconos bonitos
import "./Carrusel.css";

import deadpoolCartelera from "../assets/images/deadpool.jfif"; // Mantenemos Deadpool original
import conjuroCartelera from "../assets/images/El conjuro 2.jpg"; // Mantenemos El Conjuro original
import garraCartelera from "../assets/images/Garra.jpg"; // Mantenemos Garra original
import purgaCartelera from "../assets/images/La purga.jpeg"; // Mantenemos La Purga original
import toyStoryCartelera from "../assets/images/toy story.jpg"; // Mantenemos Toy Story original
import aPesarDeTiCartelera from "../assets/images/a_pesar_de_ti-cartelera.jpg";
import avatarCartelera from "../assets/images/avatar_fuego_y_ceniza-cartelera.jpg";
import bobEsponjaCartelera from "../assets/images/bob_esponja_una_aventura_pirata-cartelera.jpg";
import elioCartelera from "../assets/images/elio-cartelera.jpg";
import seLoQueHicisteisCartelera from "../assets/images/se_lo_que_hicisteis_el_ultimo_verano-cartelera.jpg";

const data = [
  { 
    id: 1, 
    movieId: "deadpool",
    titulo: "Deadpool", 
    img: deadpoolCartelera,
    year: "2016",
    duration: "1 h 48 min",
    ageRating: "18+",
    description: "Un ex-operativo de las fuerzas especiales que se somete a un experimento que lo cura de su cáncer, pero que le deja cicatrices permanentes en todo el cuerpo y una personalidad inestable.",
    genre: "Acción, Comedia"
  },
  { 
    id: 2, 
    movieId: "conjuro",
    titulo: "El Conjuro 2", 
    img: conjuroCartelera,
    year: "2016",
    duration: "2 h 14 min",
    ageRating: "16+",
    description: "Los investigadores paranormales Ed y Lorraine Warren se enfrentan a una nueva amenaza sobrenatural en un suburbio de Londres, donde una familia es atormentada por espíritus malignos.",
    genre: "Terror, Suspenso"
  },
  { 
    id: 3, 
    movieId: "garras",
    titulo: "Garra", 
    img: garraCartelera,
    year: "2024",
    duration: "1 h 52 min",
    ageRating: "13+",
    description: "Un jugador de baloncesto con problemas de conducta es enviado a un programa de rehabilitación donde debe aprender a trabajar en equipo y superar sus demonios personales.",
    genre: "Drama, Deportes"
  },
  { 
    id: 4, 
    movieId: "purga",
    titulo: "La Purga", 
    img: purgaCartelera,
    year: "2013",
    duration: "1 h 25 min",
    ageRating: "18+",
    description: "En un futuro distópico, durante una noche al año, todos los crímenes son legales. Una familia debe sobrevivir a esta noche de caos total cuando su casa es invadida.",
    genre: "Terror, Thriller"
  },
  { 
    id: 5, 
    movieId: "toystory",
    titulo: "Toy Story", 
    img: toyStoryCartelera,
    year: "1995",
    duration: "1 h 21 min",
    ageRating: "ATP",
    description: "Los juguetes de Andy cobran vida cuando él no está presente. Woody, el sheriff favorito, debe lidiar con la llegada de Buzz Lightyear, el nuevo juguete espacial.",
    genre: "Animación, Aventura"
  },
  { 
    id: 6, 
    titulo: "A Pesar de Ti", 
    img: aPesarDeTiCartelera,
    year: "2024",
    duration: "1 h 45 min",
    ageRating: "16+",
    description: "Una historia de amor complicada entre dos personas que deben superar obstáculos personales y familiares para estar juntos, a pesar de las circunstancias adversas.",
    genre: "Romance, Drama"
  },
  { 
    id: 7, 
    titulo: "Avatar: Fuego y Ceniza", 
    img: avatarCartelera,
    year: "2025",
    duration: "2 h 32 min",
    ageRating: "13+",
    description: "La saga continúa en Pandora donde Jake Sully y su familia enfrentan nuevas amenazas mientras exploran mundos desconocidos y descubren secretos ancestrales.",
    genre: "Ciencia Ficción, Aventura"
  },
  { 
    id: 8, 
    titulo: "Bob Esponja: Una Aventura Pirata", 
    img: bobEsponjaCartelera,
    year: "2024",
    duration: "1 h 32 min",
    ageRating: "ATP",
    description: "Bob Esponja y Patricio se embarcan en una épica aventura pirata para salvar a sus amigos y descubrir el tesoro perdido de Fondo de Bikini.",
    genre: "Animación, Comedia"
  },
  { 
    id: 9, 
    titulo: "Elio", 
    img: elioCartelera,
    year: "2024",
    duration: "1 h 37 min",
    ageRating: "ATP",
    description: "Un niño de 11 años es accidentalmente transportado al Centro de Comando Universal donde es confundido con el embajador de la Tierra para una organización galáctica.",
    genre: "Animación, Aventura"
  },
  { 
    id: 10, 
    titulo: "Sé lo que Hicisteis el Último Verano", 
    img: seLoQueHicisteisCartelera,
    year: "1997",
    duration: "1 h 41 min",
    ageRating: "18+",
    description: "Cuatro amigos que accidentalmente matan a un peatón deciden ocultar el cuerpo. Un año después, alguien que sabe la verdad comienza a acosarlos uno por uno.",
    genre: "Terror, Thriller"
  },
];

const Carrusel = ({ onMovieClick }) => {
  const scrollRef = useRef(null);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  // Función para manejar clic en película
  const handleMovieClick = (movieId) => {
    if (onMovieClick) {
      onMovieClick(movieId);
    }
  };

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  const handleMouseEnter = (movieId) => {
    setHoveredMovie(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <div className="container-fluid py-4 py-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white mb-3 mb-lg-2 text-start" >También podrían gustarte</h2>
            
            <div className="carrusel-container position-relative">
              {/* Botón Izquierda - Solo visible en pantallas grandes */}
              <button 
                className="arrow left d-none d-lg-block" 
                onClick={() => scroll(-400)}
                style={{ 
                  width: "40px", 
                  height: "40px",
                  fontSize: "1.2rem"
                }}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Scroll de Cards */}
              <div 
                className="carrusel-scroll" 
                ref={scrollRef}
                style={{
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth"
                }}
              >
                {data.map((item) => (
                  <Card 
                    key={item.id} 
                    className="carrusel-card me-2"
                    style={{
                      scrollSnapAlign: "start",
                      minWidth: "150px",
                      maxWidth: "200px",
                      cursor: "pointer"
                    }}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleMovieClick(item.movieId)}
                  >
                    <div className="position-relative">
                      <Card.Img 
                        variant="top" 
                        src={item.img} 
                        alt={item.titulo}
                        style={{
                          height: "200px",
                          objectFit: "cover"
                        }}
                      />
                      
                      {/* Overlay de hover */}
                      {hoveredMovie === item.id && (
                        <div className="carrusel-hover-overlay">
                          <div className="carrusel-hover-content">
                            {/* Botones de acción */}
                            <div className="carrusel-action-buttons">
                              <button className="carrusel-action-btn carrusel-add-btn">
                                <Plus size={16} />
                              </button>
                              <button className="carrusel-action-btn carrusel-play-btn">
                                <Play size={14} />
                              </button>
                            </div>

                            {/* Información de suscripción */}
                            <div className="carrusel-subscription-info">
                              <span className="carrusel-subscription-text">Ver con un periodo de prueba gratis de Prime</span>
                              <ShoppingBag size={12} color="#ffc107" />
                            </div>

                            {/* Detalles de la película */}
                            <div className="carrusel-movie-details">
                              <div className="carrusel-movie-meta">
                                <span className="carrusel-year">{item.year}</span>
                                <span className="carrusel-duration">{item.duration}</span>
                                <Badge className="carrusel-age-rating" variant="dark">{item.ageRating}</Badge>
                              </div>
                              
                              <div className="carrusel-movie-description">
                                {item.description}
                              </div>
                              
                              <div className="carrusel-movie-genre">
                                {item.genre}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <Card.Body className="p-2">
                      <Card.Title 
                        className="text-white mb-0" 
                        style={{ 
                          fontSize: "0.8rem",
                          lineHeight: "1.2",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {item.titulo}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              {/* Botón Derecha - Solo visible en pantallas grandes */}
              <button 
                className="arrow right d-none d-lg-block" 
                onClick={() => scroll(400)}
                style={{ 
                  width: "40px", 
                  height: "40px",
                  fontSize: "1.2rem"
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
