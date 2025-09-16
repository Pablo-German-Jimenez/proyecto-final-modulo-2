import React from "react";
import HeroMovie from "./components/HeroMovie";
import Carrusel from "./components/Carrusel";
import Planes from "./components/Planes";

function App() {
  return (
    <div style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
      {/* Hero principal */}
      <HeroMovie />

      {/* Carrusel de películas */}
      <Carrusel />

      <Planes />
    </div>
  );
}

export default App;
