import { useRef, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { ChevronLeft, ChevronRight, TrendingUp, ShoppingBag, Plus, Play } from "lucide-react";
import "./TopSeries.css";

// Importar imágenes de series (usando las carteleras disponibles)
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

const topSeriesData = [
  {
    id: 1,
    movieId: "deadpool",
    title: "Stranger Things",
    image: deadpoolCartelera, // Usando imagen placeholder
    badge: "TENDENCIAS",
    badgeType: "trending",
    year: "2016-2022",
    duration: "4 temporadas",
    ageRating: "16+",
    description: "Un grupo de niños en un pequeño pueblo de Indiana se enfrenta a fuerzas sobrenaturales y experimentos gubernamentales secretos en los años 80.",
    genre: "Ciencia Ficción, Terror"
  },
  {
    id: 2,
    movieId: "conjuro",
    title: "The Walking Dead",
    image: conjuroCartelera, // Usando imagen placeholder
    badge: "RECIÉN AÑADIDA",
    badgeType: "new",
    year: "2010-2022",
    duration: "11 temporadas",
    ageRating: "18+",
    description: "Un grupo de sobrevivientes debe navegar por un mundo post-apocalíptico lleno de zombis mientras lidian con conflictos humanos internos.",
    genre: "Terror, Drama"
  },
  {
    id: 3,
    movieId: "garras",
    title: "Breaking Bad",
    image: garraCartelera, // Usando imagen placeholder
    badge: "TENDENCIAS",
    badgeType: "trending",
    year: "2008-2013",
    duration: "5 temporadas",
    ageRating: "18+",
    description: "Un profesor de química con cáncer terminal se convierte en fabricante de metanfetamina para asegurar el futuro financiero de su familia.",
    genre: "Drama, Crimen"
  },
  {
    id: 4,
    movieId: "purga",
    title: "Game of Thrones",
    image: purgaCartelera, // Usando imagen placeholder
    badge: "RECIÉN AÑADIDA",
    badgeType: "new",
    year: "2011-2019",
    duration: "8 temporadas",
    ageRating: "18+",
    description: "Noble familias luchan por el control del Trono de Hierro en los Siete Reinos de Westeros, mientras amenazas sobrenaturales se ciernen en el norte.",
    genre: "Fantasía, Drama"
  },
  {
    id: 5,
    movieId: "toystory",
    title: "The Office",
    image: toyStoryCartelera, // Usando imagen placeholder
    badge: "NUEVA SERIE",
    badgeType: "new",
    year: "2005-2013",
    duration: "9 temporadas",
    ageRating: "13+",
    description: "Un documental falso sobre los empleados de una empresa de papel en Scranton, Pennsylvania, mostrando sus vidas laborales cómicas y absurdas.",
    genre: "Comedia, Mockumentary"
  },
  {
    id: 6,
    movieId: "friends",
    title: "Friends",
    image: aPesarDeTiCartelera, // Usando imagen placeholder
    badge: "TENDENCIAS",
    badgeType: "trending",
    year: "1994-2004",
    duration: "10 temporadas",
    ageRating: "13+",
    description: "Las aventuras cómicas de seis amigos veinteañeros que viven en Manhattan, compartiendo apartamento y navegando por la vida adulta juntos.",
    genre: "Comedia, Romance"
  },
  {
    id: 7,
    movieId: "mandalorian",
    title: "The Mandalorian",
    image: avatarCartelera, // Usando imagen placeholder
    badge: "RECIÉN AÑADIDA",
    badgeType: "new",
    year: "2019-2023",
    duration: "3 temporadas",
    ageRating: "13+",
    description: "Un cazarrecompensas solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República, protege a un niño misterioso.",
    genre: "Ciencia Ficción, Aventura"
  },
  {
    id: 8,
    movieId: "crown",
    title: "The Crown",
    image: bobEsponjaCartelera, // Usando imagen placeholder
    badge: "NUEVA SERIE",
    badgeType: "new",
    year: "2016-2023",
    duration: "6 temporadas",
    ageRating: "16+",
    description: "Un drama histórico que sigue la vida de la Reina Isabel II y los eventos que dieron forma a la segunda mitad del siglo XX.",
    genre: "Drama, Historia"
  },
  {
    id: 9,
    movieId: "houseofcards",
    title: "House of Cards",
    image: elioCartelera, // Usando imagen placeholder
    badge: "TENDENCIAS",
    badgeType: "trending",
    year: "2013-2018",
    duration: "6 temporadas",
    ageRating: "18+",
    description: "Un congresista despiadado y su esposa igualmente manipuladora maniobran para obtener poder en Washington D.C.",
    genre: "Drama, Política"
  },
  {
    id: 10,
    movieId: "narcos",
    title: "Narcos",
    image: seLoQueHicisteisCartelera, // Usando imagen placeholder
    badge: "RECIÉN AÑADIDA",
    badgeType: "new",
    year: "2015-2017",
    duration: "3 temporadas",
    ageRating: "18+",
    description: "La historia real del auge y caída del cartel de drogas de Pablo Escobar y el DEA que lo persiguió en Colombia.",
    genre: "Drama, Crimen"
  }
];

const TopSeries = ({ onMovieClick }) => {
  const scrollRef = useRef(null);
  const [hoveredSeries, setHoveredSeries] = useState(null);

  // Función para manejar clic en serie
  const handleMovieClick = (movieId) => {
    console.log('TopSeries - Clic en serie:', movieId);
    console.log('TopSeries - onMovieClick función:', onMovieClick);
    if (onMovieClick) {
      onMovieClick(movieId);
    } else {
      console.error('TopSeries - onMovieClick no está definida');
    }
  };

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  const handleMouseEnter = (seriesId) => {
    setHoveredSeries(seriesId);
  };

  const handleMouseLeave = () => {
    setHoveredSeries(null);
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
    <section className="py-3 py-lg-3">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center mb-3 mb-lg-4">
                <h2 className="text-white mb-0 me-3">Las 10 mejores series en Argentina</h2>
                <div className="trending-icon">
                  <TrendingUp size={24} color="#fff" />
                </div>
              </div>
              
              <div className="top-series-container position-relative">
                {/* Botón Izquierda */}
                <button 
                  className="top-series-arrow left d-none d-lg-block" 
                  onClick={() => scroll(-400)}
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Scroll de series */}
                <div 
                  className="top-series-scroll" 
                  ref={scrollRef}
                  style={{
                    scrollSnapType: "x mandatory",
                    scrollBehavior: "smooth"
                  }}
                >
                  {topSeriesData.map((series, index) => (
                    <div 
                      key={series.id} 
                      className="top-series-item me-3"
                      style={{
                        scrollSnapAlign: "start",
                        minWidth: "280px",
                        maxWidth: "320px"
                      }}
                      onMouseEnter={() => handleMouseEnter(series.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Número de ranking */}
                      <div className="ranking-number">
                        {index + 1}
                      </div>
                      
                      {/* Tarjeta de serie */}
                      <Card 
                        className="top-series-card h-100 shadow-lg border-0"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleMovieClick(series.movieId)}
                      >
                        <div className="position-relative">
                          <Card.Img 
                            variant="top" 
                            src={series.image} 
                            alt={series.title}
                            className="top-series-image"
                          />
                          
                          {/* Badge */}
                          <Badge 
                            className="position-absolute top-0 end-0 m-2"
                            style={getBadgeStyle(series.badgeType)}
                          >
                            {series.badge}
                          </Badge>
                          
                          {/* Icono de compra */}
                          <div className="shopping-icon">
                            <ShoppingBag size={20} color="#ffc107" />
                          </div>

                          {/* Overlay de hover */}
                          {hoveredSeries === series.id && (
                            <div className="series-hover-overlay">
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

                                {/* Detalles de la serie */}
                                <div className="series-details">
                                  <div className="series-meta">
                                    <span className="year">{series.year}</span>
                                    <span className="duration">{series.duration}</span>
                                    <Badge className="age-rating" variant="dark">{series.ageRating}</Badge>
                                  </div>
                                  
                                  <div className="series-description">
                                    {series.description}
                                  </div>
                                  
                                  <div className="series-genre">
                                    {series.genre}
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
                            {series.title}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Botón Derecha */}
                <button 
                  className="top-series-arrow right d-none d-lg-block" 
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

export default TopSeries;
