import React, { useState } from "react";
import HeroMovie from "./components/HeroMovie";
import Carrusel from "./components/Carrusel";
import TopMovies from "./components/TopMovies";
import Planes from "./components/Planes";
import TopSeries from "./components/TopSeries";
import MovieDetail from "./components/MovieDetail";

// Datos de películas para la página de detalles
const moviesData = {
  deadpool: {
    id: "deadpool",
    title: "DEADPOOL",
    subtitle: "LA PELÍCULA",
    year: "2016",
    ageRating: "18+",
    genre: "ACCIÓN",
    description: "Deadpool (HBO): El mercenario con boca suelta Wade Wilson se convierte en el antihéroe más irreverente y divertido del universo Marvel en esta película llena de acción, humor negro y romances explosivos.",
    backgroundImage: "/src/assets/images/deadpool.jfif"
  },
  garras: {
    id: "garras",
    title: "GARRAS",
    subtitle: "EL JUEGO FINAL",
    year: "2024",
    ageRating: "13+",
    genre: "DEPORTES",
    description: "Garras (HBO): Una épica historia de superación personal y deporte que sigue a un joven jugador de baloncesto en su lucha por alcanzar sus sueños contra todas las probabilidades.",
    backgroundImage: "/src/assets/images/Garra.jpg"
  },
  conjuro: {
    id: "conjuro",
    title: "EL CONJURO",
    subtitle: "2 - EL ENCUENTRO",
    year: "2016",
    ageRating: "18+",
    genre: "TERROR",
    description: "El Conjuro 2 (HBO): Los investigadores paranormales Ed y Lorraine Warren enfrentan uno de sus casos más aterradores en esta secuela que te mantendrá en vilo hasta el final.",
    backgroundImage: "/src/assets/images/El conjuro 2.jpg"
  },
  purga: {
    id: "purga",
    title: "LA PURGA",
    subtitle: "ANARQUÍA",
    year: "2014",
    ageRating: "18+",
    genre: "THRILLER",
    description: "La Purga: Anarquía (HBO): En esta secuela de la exitosa franquicia, la noche de La Purga se extiende por toda la ciudad mientras varios ciudadanos luchan por sobrevivir.",
    backgroundImage: "/src/assets/images/La purga.jpeg"
  },
  toystory: {
    id: "toystory",
    title: "TOY STORY",
    subtitle: "4 - LA HISTORIA CONTINÚA",
    year: "2019",
    ageRating: "TP",
    genre: "ANIMACIÓN",
    description: "Toy Story 4 (HBO): Woody, Buzz y el resto de los juguetes regresan en una nueva aventura que explora temas de amor, amistad y encontrar tu lugar en el mundo.",
    backgroundImage: "/src/assets/images/toy-story-4-trailer-poster-.webp"
  }
};

// Películas relacionadas
const relatedMovies = [
  {
    title: "LOBOS AL ACECHO",
    image: "/src/assets/images/cartelera1.jpg"
  },
  {
    title: "ANNABELLE 3 VIENE A CASA",
    image: "/src/assets/images/cartelera2.jpg"
  },
  {
    title: "BEETLEJUICE BEETLEJUICE",
    image: "/src/assets/images/cartelera3.jpg"
  },
  {
    title: "BLADE CAZADOR DE VAMPIROS",
    image: "/src/assets/images/cartelera4.jpg"
  }
];

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movieId) => {
    setSelectedMovie(moviesData[movieId]);
    setCurrentView('movieDetail');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedMovie(null);
  };

  if (currentView === 'movieDetail' && selectedMovie) {
    return (
      <MovieDetail 
        movie={selectedMovie}
        onBack={handleBackToHome}
        relatedMovies={relatedMovies}
      />
    );
  }

  return (
    <div style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
      {/* Hero principal */}
      <HeroMovie onMovieClick={handleMovieClick} />

      {/* Carrusel de películas */}
      <Carrusel onMovieClick={handleMovieClick} />

      {/* Top 10 mejores películas */}
      <TopMovies onMovieClick={handleMovieClick} />

      <Planes />

      {/* Top 10 mejores series */}
      <TopSeries onMovieClick={handleMovieClick} />
    </div>
  );
}

export default App;
