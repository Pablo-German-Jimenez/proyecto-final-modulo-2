import React from "react";
import HeroMovie from "./components/HeroMovie";
import Carrusel from "./components/Carrusel";
import TopMovies from "./components/TopMovies";
import Planes from "./components/Planes";
import TopSeries from "./components/TopSeries";


function App() {
  return (
    <div style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
      {/* Hero principal */}
      <HeroMovie />

      {/* Carrusel de películas */}
      <Carrusel />

      {/* Top 10 mejores películas */}
      <TopMovies />

      <Planes />

      {/* Top 10 mejores series */}
      <TopSeries />


    </div>
  );
}

export default App;
