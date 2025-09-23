import  { useRef, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { ChevronLeft, ChevronRight, TrendingUp, ShoppingBag, Plus, Play } from "lucide-react";
import "./TopMovies.css";

// Importar imágenes de películas (usando las carteleras disponibles)
import deadpoolCartelera from "../assets/images/deadpool.jfif";
import conjuroCartelera from "../assets/images/El conjuro 2.jpg";
import garraCartelera from "../assets/images/Garra.jpg";
import purgaCartelera from "../assets/images/La purga.jpeg";
import toyStoryCartelera from "../assets/images/toy story.jpg";
import aPesarDeTiCartelera from "../assets/images/a_pesar_de_ti-cartelera.jpg";
import avatarCartelera from "../assets/images/avatar_fuego_y_ceniza-cartelera.jpg";
import bobEsponjaCartelera from "../assets/images/bob_esponja_una_aventura_pirata-cartelera.jpg";
import elioCartelera from "../assets/images/elio-cartelera.jpg";
import seLoQueHicisteisCartelera from "../assets/images/se_lo_que_hicisteis_el_ultimo_verano-cartelera.jpg";

const topMoviesData = [
  {
    id: 1,
    movieId: "deadpool",
    title: "Deadpool",
    image: deadpoolCartelera,
    badge: "TENDENCIAS",
    badgeType: "trending",
    year: "2016",
    duration: "1 h 48 min",
    ageRating: "18+",
    description: "Un ex-operativo de las fuerzas especiales que se somete a un experimento que lo cura de su cáncer, pero que le deja cicatrices permanentes en todo el cuerpo y una personalidad inestable.",
    genre: "Acción, Comedia"
  },
  {
    id: 2,
    movieId: "conjuro",
    title: "El Conjuro 2",
    image: conjuroCartelera,
    badge: "RECIÉN AÑADIDA",
    badgeType: "new",
    year: "2016",
    duration: "2 h 14 min",
    ageRating: "16+",
    description: "Los investigadores paranormales Ed y Lorraine Warren se enfrentan a una nueva amenaza sobrenatural en un suburbio de Londres, donde una familia es atormentada por espíritus malignos.",
    genre: "Terror, Suspenso"
  },
  {
    id: 3,
    movieId: "garras",
    title: "Garra",
    image: garraCartelera,
    badge: "TENDENCIAS",
    badgeType: "trending",
    year: "2024",
    duration: "1 h 52 min",
    ageRating: "13+",
    description: "Un jugador de baloncesto con problemas de conducta es enviado a un programa de rehabilitación donde debe aprender a trabajar en equipo y superar sus demonios personales.",
    genre: "Drama, Deportes"
  },
  {
    id: 4,
    movieId: "purga",
    title: "La Purga",
    image: purgaCartelera,
    badge: "RECIÉN AÑADIDA",
    badgeType: "new",
    year: "2013",
    duration: "1 h 25 min",
    ageRating: "18+",
    description: "En un futuro distópico, durante una noche al año, todos los crímenes son legales. Una familia debe sobrevivir a esta noche de caos total cuando su casa es invadida.",
    genre: "Terror, Thriller"
  },
  {
    id: 5,
    movieId: "toystory",
    title: "Toy Story",
    image: toyStoryCartelera,
    badge: "NUEVA PELÍCULA",
    badgeType: "new",
    year: "1995",
    duration: "1 h 21 min",
    ageRating: "ATP",
    description: "Los juguetes de Andy cobran vida cuando él no está presente. Woody, el sheriff favorito, debe lidiar con la llegada de Buzz Lightyear, el nuevo juguete espacial.",
    genre: "Animación, Aventura"
  },
  {
    id: 6,
    title: "A Pesar de Ti",
    image: aPesarDeTiCartelera,
    badge: "TENDENCIAS",
    badgeType: "trending",
    year: "2024",
    duration: "1 h 45 min",
    ageRating: "16+",
    description: "Una historia de amor complicada entre dos personas que deben superar obstáculos personales y familiares para estar juntos, a pesar de las circunstancias adversas.",
    genre: "Romance, Drama"
  },
  {
    id: 7,
    title: "Avatar: Fuego y Ceniza",
    image: avatarCartelera,
    badge: "RECIÉN AÑADIDA",
    badgeType: "new",
    year: "2025",
    duration: "2 h 32 min",
    ageRating: "13+",
    description: "La saga continúa en Pandora donde Jake Sully y su familia enfrentan nuevas amenazas mientras exploran mundos desconocidos y descubren secretos ancestrales.",
    genre: "Ciencia Ficción, Aventura"
  },
  {
    id: 8,
    title: "Bob Esponja: Una Aventura Pirata",
    image: bobEsponjaCartelera,
    badge: "NUEVA PELÍCULA",
    badgeType: "new",
    year: "2024",
    duration: "1 h 32 min",
    ageRating: "ATP",
    description: "Bob Esponja y Patricio se embarcan en una épica aventura pirata para salvar a sus amigos y descubrir el tesoro perdido de Fondo de Bikini.",
    genre: "Animación, Comedia"
  },
  {
    id: 9,
    title: "Elio",
    image: elioCartelera,
    badge: "TENDENCIAS",
    badgeType: "trending",
    year: "2024",
    duration: "1 h 37 min",
    ageRating: "ATP",
    description: "Un niño de 11 años es accidentalmente transportado al Centro de Comando Universal donde es confundido con el embajador de la Tierra para una organización galáctica.",
    genre: "Animación, Aventura"
  },
  {
    id: 10,
    title: "Sé lo que Hicisteis el Último Verano",
    image: seLoQueHicisteisCartelera,
    badge: "RECIÉN AÑADIDA",
    badgeType: "new",
    year: "1997",
    duration: "1 h 41 min",
    ageRating: "18+",
    description: "Cuatro amigos que accidentalmente matan a un peatón deciden ocultar el cuerpo. Un año después, alguien que sabe la verdad comienza a acosarlos uno por uno.",
    genre: "Terror, Thriller"
  }
];

const TopMovies = ({ onMovieClick }) => {
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

  const getBadgeStyle = (type) => {
    switch (type) {
      case "trending":
        return {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          color: "#000",
          fontWeight: "600"
        };
      case "new":
        return {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          color: "#000",
          fontWeight: "600"
        };
      default:
        return {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          color: "#000",
          fontWeight: "600"
        };
    }
  };

  return (
    <section className="py-3 py-lg-3 ">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center mb-3 mb-lg-4">
                <h2 className="text-white mb-0 me-3">Las 10 mejores películas en Argentina</h2>
                <div className="trending-icon">
                  <TrendingUp size={24} color="#fff" />
                </div>
              </div>

              <div className="top-movies-container position-relative">
                {/* Botón Izquierda */}
                <button
                  className="top-movies-arrow left d-none d-lg-block"
                  onClick={() => scroll(-400)}
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Scroll de películas */}
                <div
                  className="top-movies-scroll"
                  ref={scrollRef}
                  style={{
                    scrollSnapType: "x mandatory",
                    scrollBehavior: "smooth"
                  }}
                >
                  {topMoviesData.map((movie, index) => (
                    <div
                      key={movie.id}
                      className="top-movie-item me-3"
                      style={{
                        scrollSnapAlign: "start",
                        minWidth: "280px",
                        maxWidth: "320px"
                      }}
                      onMouseEnter={() => handleMouseEnter(movie.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Número de ranking */}
                      <div className="ranking-number">
                        {index + 1}
                      </div>

                      {/* Tarjeta de película */}
                      <Card
                        className="top-movie-card h-100 shadow-lg border-0"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleMovieClick(movie.movieId)}
                      >
                        <div className="position-relative">
                          <Card.Img
                            variant="top"
                            src={movie.image}
                            alt={movie.title}
                            className="top-movie-image"
                          />

                          {/* Badge */}
                          <Badge
                            className="position-absolute top-0 end-0 m-2"
                            style={getBadgeStyle(movie.badgeType)}
                          >
                            {movie.badge}
                          </Badge>

                          {/* Icono de compra */}
                          <div className="shopping-icon">
                            <ShoppingBag size={20} color="#ffc107" />
                          </div>

                          {/* Overlay de hover */}
                          {hoveredMovie === movie.id && (
                            <div className="movie-hover-overlay">
                              <div className="hover-content">
                                {/* Botones de acción */}
                                <div className="action-buttons">
                                  <button className="action-btn add-btn">
                                    <Plus size={20} />
                                  </button>
                                  <button className="action-btn play-btn">
                                    <Play size={16} />
                                  </button>
                                </div>

                                {/* Información de suscripción */}
                                <div className="subscription-info">
                                  <span className="subscription-text">Ver con un periodo de prueba gratis de Prime</span>
                                  <ShoppingBag size={16} color="#ffc107" />
                                </div>

                                {/* Detalles de la película */}
                                <div className="movie-details">
                                  <div className="movie-meta">
                                    <span className="year">{movie.year}</span>
                                    <span className="duration">{movie.duration}</span>
                                    <Badge className="age-rating" variant="dark">{movie.ageRating}</Badge>
                                  </div>

                                  <div className="movie-description">
                                    {movie.description}
                                  </div>

                                  <div className="movie-genre">
                                    {movie.genre}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <Card.Body className="p-3">
                          <Card.Title
                            className="text-white mb-0 fw-bold"
                            style={{
                              fontSize: "1rem",
                              lineHeight: "1.3"
                            }}
                          >
                            {movie.title}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Botón Derecha */}
                <button
                  className="top-movies-arrow right d-none d-lg-block"
                  onClick={() => scroll(400)}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopMovies;
