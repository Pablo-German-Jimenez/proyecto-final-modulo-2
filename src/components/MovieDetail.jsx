import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ChevronLeft, Play, Plus } from 'lucide-react';
import './MovieDetail.css';

const MovieDetail = ({ movie, onBack, relatedMovies, onMovieClick, logoImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleRelatedMovieClick = (relatedMovie) => {
    if (onMovieClick && relatedMovie.id) {
      onMovieClick(relatedMovie.id);
    }
  };

  // Filtrar las películas relacionadas para excluir la película actual
  const filteredRelatedMovies = relatedMovies.filter(relatedMovie => relatedMovie.id !== movie.id);

  return (
    <div className="movie-detail-container">
      {/* Header con logo y botón de regreso */}
      <div className="movie-detail-header">
        <div className="d-flex align-items-center justify-content-between w-100 px-4">
          <div className="d-flex align-items-center">
            <img 
              src={logoImage} 
              alt="Logo" 
              className="movie-detail-logo"
            />
          </div>
          <Button 
            variant="outline-light" 
            className="back-button"
            onClick={onBack}
          >
            <ChevronLeft size={20} />
            Volver
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div 
        className="movie-detail-hero"
        style={{
          backgroundImage: `url(${movie.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay">
          <Container>
            <Row>
              <Col lg={6} md={8}>
                <div className="movie-info">
                  <h1 className="movie-title">
                    {movie.title}
                  </h1>
                  {movie.subtitle && (
                    <h2 className="movie-subtitle">
                      {movie.subtitle}
                    </h2>
                  )}
                  
                  <div className="movie-meta">
                    <span className="age-rating">{movie.ageRating}</span>
                    <span className="year">{movie.year}</span>
                    <span className="genre">{movie.genre}</span>
                  </div>

                  <p className="movie-description">
                    {movie.description}
                  </p>

                  <div className="action-buttons">
                    <Button 
                      className="subscribe-btn"
                      onClick={handlePlay}
                    >
                      SUSCRÍBETE AHORA
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Sección de películas relacionadas */}
      <div className="related-movies-section">
        <Container>
          <h3 className="related-title">Quizá también te guste</h3>
          <div className="related-movies-grid">
            {filteredRelatedMovies.map((relatedMovie, index) => (
              <div 
                key={relatedMovie.id || index} 
                className="related-movie-card"
                onClick={() => handleRelatedMovieClick(relatedMovie)}
                style={{ cursor: 'pointer' }}
              >
                <div 
                  className="related-movie-image"
                  style={{
                    backgroundImage: `url(${relatedMovie.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="related-movie-overlay">
                    <h4 className="related-movie-title">
                      {relatedMovie.title}
                    </h4>
                    {relatedMovie.subtitle && (
                      <p className="related-movie-subtitle">
                        {relatedMovie.subtitle}
                      </p>
                    )}
                    <div className="related-movie-meta">
                      <span className="related-movie-year">{relatedMovie.year}</span>
                      <span className="related-movie-genre">{relatedMovie.genre}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MovieDetail;