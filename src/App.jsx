import Footer from "./components/Footer";
import AcercadeNosotros from "./components/AcercadeNosotros";
import Administrador from "./components/Administrador";
import FormularioContenido from "./components/FormularioContenido";
import MenuNavBar from "./componentes/MenuNavBar"
import React, { useEffect, useState } from "react";
import HeroMovie from "./components/HeroMovie";
import Carrusel from "./components/Carrusel";
import TopMovies from "./components/TopMovies";
import Planes from "./components/Planes";
import TopSeries from "./components/TopSeries";
import MovieDetail from "./components/MovieDetail";

// Importar imágenes como módulos
import deadpoolImage from "./assets/images/deadpool.jfif";
import garraImage from "./assets/images/Garra.jpg";
import conjuroBannerImage from "./assets/images/el conjuro banner.jpg";
import purgaBannerImage from "./assets/images/la purga banner.jpg";
import toyStoryBannerImage from "./assets/images/toy story 4 banner.jpg";
import logoImage from "./assets/images/logosinfondo.png";
import { BrowserRouter, Routes, Route } from "react-router";

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
    backgroundImage: deadpoolImage
  },
  garras: {
    id: "garras",
    title: "GARRAS",
    subtitle: "EL JUEGO FINAL",
    year: "2024",
    ageRating: "13+",
    genre: "DEPORTES",
    description: "Garras (HBO): Una épica historia de superación personal y deporte que sigue a un joven jugador de baloncesto en su lucha por alcanzar sus sueños contra todas las probabilidades.",
    backgroundImage: garraImage
  },
  conjuro: {
    id: "conjuro",
    title: "EL CONJURO",
    subtitle: "2 - EL ENCUENTRO",
    year: "2016",
    ageRating: "18+",
    genre: "TERROR",
    description: "El Conjuro 2 (HBO): Los investigadores paranormales Ed y Lorraine Warren enfrentan uno de sus casos más aterradores en esta secuela que te mantendrá en vilo hasta el final.",
    backgroundImage: conjuroBannerImage
  },
  purga: {
    id: "purga",
    title: "LA PURGA",
    subtitle: "ANARQUÍA",
    year: "2014",
    ageRating: "18+",
    genre: "THRILLER",
    description: "La Purga: Anarquía (HBO): En esta secuela de la exitosa franquicia, la noche de La Purga se extiende por toda la ciudad mientras varios ciudadanos luchan por sobrevivir.",
    backgroundImage: purgaBannerImage
  },
  toystory: {
    id: "toystory",
    title: "TOY STORY",
    subtitle: "4 - LA HISTORIA CONTINÚA",
    year: "2019",
    ageRating: "TP",
    genre: "ANIMACIÓN",
    description: "Toy Story 4 (HBO): Woody, Buzz y el resto de los juguetes regresan en una nueva aventura que explora temas de amor, amistad y encontrar tu lugar en el mundo.",
    backgroundImage: toyStoryBannerImage
  }
};

// Películas relacionadas (películas que tienen información disponible)
const relatedMovies = [
  {
    id: "deadpool",
    title: "DEADPOOL",
    subtitle: "EL ANTIHÉROE",
    year: "2016",
    ageRating: "18+",
    genre: "ACCIÓN",
    description: "Deadpool (HBO): Wade Wilson, un mercenario con un peculiar sentido del humor, adquiere poderes de curación rápida y se convierte en Deadpool.",
    image: deadpoolImage,
    backgroundImage: deadpoolImage
  },
  {
    id: "garras",
    title: "GARRAS",
    subtitle: "LA HISTORIA REAL",
    year: "2024",
    ageRating: "13+",
    genre: "DEPORTES",
    description: "Garras (HBO): Una épica historia de superación personal y deporte que sigue a un joven jugador de baloncesto en su lucha por alcanzar sus sueños contra todas las probabilidades.",
    image: garraImage,
    backgroundImage: garraImage
  },
  {
    id: "conjuro",
    title: "EL CONJURO",
    subtitle: "2 - EL ENCUENTRO",
    year: "2016",
    ageRating: "18+",
    genre: "TERROR",
    description: "El Conjuro 2 (HBO): Los investigadores paranormales Ed y Lorraine Warren enfrentan uno de sus casos más aterradores en esta secuela que te mantendrá en vilo hasta el final.",
    image: conjuroBannerImage,
    backgroundImage: conjuroBannerImage
  },
  {
    id: "purga",
    title: "LA PURGA",
    subtitle: "ANARQUÍA",
    year: "2014",
    ageRating: "18+",
    genre: "THRILLER",
    description: "La Purga: Anarquía (HBO): En esta secuela de la exitosa franquicia, la noche de La Purga se extiende por toda la ciudad mientras varios ciudadanos luchan por sobrevivir.",
    image: purgaBannerImage,
    backgroundImage: purgaBannerImage
  },
  {
    id: "toystory",
    title: "TOY STORY",
    subtitle: "4 - LA HISTORIA CONTINÚA",
    year: "2019",
    ageRating: "ATP",
    genre: "ANIMACIÓN",
    description: "Toy Story 4 (HBO): Woody, Buzz y sus amigos emprenden un viaje emocional cuando Bonnie trae un nuevo juguete a casa que cambia todo.",
    image: toyStoryBannerImage,
    backgroundImage: toyStoryBannerImage
  }
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

  if (currentView === "movieDetail" && selectedMovie) {
    return (
      <MovieDetail
        movie={selectedMovie}
        onBack={handleBackToHome}
        relatedMovies={relatedMovies}
        onMovieClick={handleMovieClick}
        logoImage={logoImage}
      />
    );
  }

  {/*logica para guardar datos en el local storage*/ }
  const catalogoLS = JSON.parse(localStorage.getItem("catalogoKey")) || [];

  {/*Estado para almacenar el contenido*/ }
  const [catalogo, setCatalogo] = useState(catalogoLS);

  useEffect(() => {
    localStorage.setItem("catalogoKey", JSON.stringify(catalogo))
  }, [catalogo]);

  const agregarContenido = (nuevoContenido) => {
    setCatalogo([...catalogo, nuevoContenido])
    return true;
  }

  return (
    <>

      <BrowserRouter>
        <MenuNavBar />

        <main style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
          <Routes>
            <Route path={"/"}
              element={
                <>
                  <HeroMovie onMovieClick={handleMovieClick} />
                  <Carrusel onMovieClick={handleMovieClick} />
                  <TopMovies onMovieClick={handleMovieClick} />
                  <Planes />
                  <TopSeries onMovieClick={handleMovieClick} />

                </>
              }
            />
            <Route path="/administrador"
              element={<Administrador catalogo={catalogo} agregarContenido={agregarContenido}></Administrador>}
            ></Route>
            <Route
              path="/acercadenosotros"
              element={<AcercadeNosotros></AcercadeNosotros>}
            ></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;