import { useRef } from "react";
import { Card, Badge } from "react-bootstrap";
import { ChevronLeft, ChevronRight, Heart, Trash2 } from "lucide-react";
import { useSavedMovies } from "../contexts/SavedMoviesContext";
import "./SavedMovies.css";

const SavedMovies = ({ onMovieClick }) => {
  const scrollRef = useRef(null);
  const { savedMovies, removeSavedMovie } = useSavedMovies();

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  const handleRemoveMovie = (e, movieId) => {
    e.stopPropagation(); // Evitar que se ejecute el click de la película
    removeSavedMovie(movieId);
  };

  // Si no hay películas guardadas, no mostrar el componente
  if (savedMovies.length === 0) {
    return null;
  }

  return (
    <section className="py-3 py-lg-3">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center mb-3 mb-lg-4">
                <h2 className="text-white mb-0 me-3">Tus guardados</h2>
                <div className="saved-icon">
                  <Heart size={24} color="#ff6b6b" />
                </div>
              </div>

              <div className="saved-movies-container position-relative">
                {/* Botón Izquierda */}
                <button
                  className="saved-movies-arrow left d-none d-lg-block"
                  onClick={() => scroll(-400)}
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Scroll de películas */}
                <div
                  className="saved-movies-scroll"
                  ref={scrollRef}
                  style={{
                    scrollSnapType: "x mandatory",
                    scrollBehavior: "smooth"
                  }}
                >
                  {savedMovies.map((movie) => (
                    <div
                      key={movie.id}
                      className="saved-movie-item me-3"
                      style={{
                        scrollSnapAlign: "start",
                        minWidth: "280px",
                        maxWidth: "320px"
                      }}
                    >
                      {/* Tarjeta de película */}
                      <Card
                        className="saved-movie-card h-100 shadow-lg border-0"
                        style={{ cursor: "pointer" }}
                        onClick={() => onMovieClick && onMovieClick(movie.movieId)}
                      >
                        <div className="position-relative">
                          <Card.Img
                            variant="top"
                            src={movie.image}
                            alt={movie.title}
                            className="saved-movie-image"
                          />

                          {/* Badge */}
                          <Badge
                            className="position-absolute top-0 end-0 m-2"
                            style={{
                              backgroundColor: "rgba(255, 107, 107, 0.9)",
                              color: "#fff",
                              fontWeight: "600"
                            }}
                          >
                            GUARDADO
                          </Badge>

                          {/* Botón de eliminar */}
                          <button
                            className="remove-btn"
                            onClick={(e) => handleRemoveMovie(e, movie.id)}
                            title="Eliminar de guardados"
                          >
                            <Trash2 size={16} color="#fff" />
                          </button>
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
                  className="saved-movies-arrow right d-none d-lg-block"
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

export default SavedMovies;
