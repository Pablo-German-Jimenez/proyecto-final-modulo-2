import Footer from "./components/Footer";
import AcercadeNosotros from "./components/AcercadeNosotros";
import Administrador from "./components/Administrador";
import FormularioContenido from "./components/FormularioContenido";
import MenuNavBar from "./componentes/MenuNavBar";

import React, { useState } from "react";
import HeroMovie from "./components/HeroMovie";
import Carrusel from "./components/Carrusel";
import TopMovies from "./components/TopMovies";
import Planes from "./components/Planes";
import TopSeries from "./components/TopSeries";
import MovieDetail from "./components/MovieDetail";

import RegisterPage from "./pages/RegisterPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importar imágenes como módulos
import deadpoolImage from "./assets/images/deadpool.jfif";
import garraImage from "./assets/images/Garra.jpg";
import conjuroBannerImage from "./assets/images/el conjuro banner.jpg";
import purgaBannerImage from "./assets/images/la purga banner.jpg";
import toyStoryBannerImage from "./assets/images/toy story 4 banner.jpg";
import logoImage from "./assets/images/logosinfondo.png";

// Datos de películas
const moviesData = {
  deadpool: {
    /* ... */
  },
  garras: {
    /* ... */
  },
  conjuro: {
    /* ... */
  },
  purga: {
    /* ... */
  },
  toystory: {
    /* ... */
  },
};

// Películas relacionadas
const relatedMovies = [
  /* ... */
];

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movieId) => {
    setSelectedMovie(moviesData[movieId]);
    setCurrentView("movieDetail");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedMovie(null);
  };

  return (
    <Router>
      <Routes>
        {/* Ruta de registro */}
        <Route path="/registro" element={<RegisterPage />} />

        {/* Ruta home */}
        <Route
          path="/"
          element={
            <>
              <div style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
                <MenuNavBar />
                <HeroMovie onMovieClick={handleMovieClick} />
                <Carrusel onMovieClick={handleMovieClick} />
                <TopMovies onMovieClick={handleMovieClick} />
                <Planes />
                <TopSeries onMovieClick={handleMovieClick} />
              </div>
              <h1 className="text-success">Proyecto final módulo 2</h1>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
