import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { SavedMoviesProvider } from "./contexts/SavedMoviesContext";

// Componentes principales
import Footer from "./components/Footer";
import AcercadeNosotros from "./components/AcercadeNosotros";
import Administrador from "./components/Administrador";
import FormularioContenido from "./components/FormularioContenido";
import RegisterPage from "./pages/RegisterPage";
import MenuNavBar from "./components/MenuNavBar";
import HeroMovie from "./components/HeroMovie";
import Carrusel from "./components/Carrusel";
import TopMovies from "./components/TopMovies";
import Planes from "./components/Planes";
import TopSeries from "./components/TopSeries";
import SavedMovies from "./components/SavedMovies";
import MovieDetail from "./components/MovieDetail";
import GenreFilter from "./components/GenreFilter";

// Importar imágenes
import deadpoolImage from "./assets/images/deadpool.jfif";
import garraImage from "./assets/images/Garra.jpg";
import conjuroBannerImage from "./assets/images/el conjuro banner.jpg";
import purgaBannerImage from "./assets/images/la purga banner.jpg";
import toyStoryBannerImage from "./assets/images/toy story 4 banner.jpg";
import logoImage from "./assets/images/logosinfondo.png";

// Datos de películas
const moviesData = {
  deadpool: {
    id: "deadpool",
    title: "DEADPOOL",
    subtitle: "LA PELÍCULA",
    year: "2016",
    ageRating: "18+",
    genre: "ACCIÓN",
    description:
      "Deadpool (HBO): El mercenario con boca suelta Wade Wilson se convierte en el antihéroe más irreverente y divertido del universo Marvel.",
    backgroundImage: deadpoolImage,
  },
  garras: {
    id: "garras",
    title: "GARRAS",
    subtitle: "EL JUEGO FINAL",
    year: "2024",
    ageRating: "13+",
    genre: "DEPORTES",
    description:
      "Una épica historia de superación personal y deporte que sigue a un joven jugador de baloncesto en su lucha por alcanzar sus sueños.",
    backgroundImage: garraImage,
  },
  conjuro: {
    id: "conjuro",
    title: "EL CONJURO",
    subtitle: "2 - EL ENCUENTRO",
    year: "2016",
    ageRating: "18+",
    genre: "TERROR",
    description:
      "Los investigadores paranormales Ed y Lorraine Warren enfrentan uno de sus casos más aterradores en esta secuela.",
    backgroundImage: conjuroBannerImage,
  },
  purga: {
    id: "purga",
    title: "LA PURGA",
    subtitle: "ANARQUÍA",
    year: "2014",
    ageRating: "18+",
    genre: "THRILLER",
    description:
      "En esta secuela, la noche de La Purga se extiende por toda la ciudad mientras varios ciudadanos luchan por sobrevivir.",
    backgroundImage: purgaBannerImage,
  },
  toystory: {
    id: "toystory",
    title: "TOY STORY",
    subtitle: "4 - LA HISTORIA CONTINÚA",
    year: "2019",
    ageRating: "TP",
    genre: "ANIMACIÓN",
    description:
      "Woody, Buzz y los juguetes regresan en una aventura que explora el amor, la amistad y encontrar tu lugar en el mundo.",
    backgroundImage: toyStoryBannerImage,
  },
};

// Página principal con funcionalidad completa de catálogo
function HomePage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [genre, setGenre] = useState("Todos");

  const handleMovieClick = (movieId) => {
    navigate(`/pelicula/${movieId}`);
  };

  // Estado y lógica de catálogo en LocalStorage
  const catalogoLS = JSON.parse(localStorage.getItem("catalogoKey")) || [];
  const [catalogo, setCatalogo] = useState(catalogoLS);

  useEffect(() => {
    localStorage.setItem("catalogoKey", JSON.stringify(catalogo));
  }, [catalogo]);

  const agregarContenido = (nuevoContenido) => {
    setCatalogo([...catalogo, nuevoContenido]);
    return true;
  };

  const eliminarContenido = (idContenido) => {
    setCatalogo(catalogo.filter((item) => item.id !== idContenido));
    return true;
  };

  const buscarContenido = (idContenido) => {
    return catalogo.find((item) => item.id === idContenido);
  };

  const modificarContenido = (idContenido, dataCatalogo) => {
    setCatalogo(
      catalogo.map((item) =>
        item.id === idContenido ? { ...item, ...dataCatalogo } : item
      )
    );
    return true;
  };

  const [filaDestacada, setFilaDestacada] = useState(
    catalogoLS.find((item) => item.destacado)?.id || null
  );

  const destacarFila = (id) => {
    const nuevoCatalogo = catalogo.map((item) => {
      if (item.id === id) {
        if (item.destacado) {
          const copia = { ...item };
          delete copia.destacado;
          setFilaDestacada(null);
          return copia;
        } else {
          setFilaDestacada(id);
          return { ...item, destacado: true };
        }
      } else {
        const copia = { ...item };
        delete copia.destacado;
        return copia;
      }
    });
    setCatalogo(nuevoCatalogo);
  };

  return (
    <main style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroMovie onMovieClick={handleMovieClick} />
              <GenreFilter selectedGenre={genre} onChange={setGenre} />
              <Carrusel onMovieClick={handleMovieClick} />
              <TopMovies onMovieClick={handleMovieClick} catalogo={catalogo} selectedGenre={genre} />
              {isAuthenticated() ? (
                <SavedMovies onMovieClick={handleMovieClick} />
              ) : (
                <Planes />
              )}
              <TopSeries onMovieClick={handleMovieClick} />
            </>
          }
        />
        <Route
          path="/administrador"
          element={
            <Administrador
              catalogo={catalogo}
              eliminarContenido={eliminarContenido}
              modificarContenido={modificarContenido}
              destacarFila={destacarFila}
              filaDestacada={filaDestacada}
            />
          }
        />
        <Route
          path="/administrador/crear"
          element={
            <FormularioContenido
              agregarContenido={agregarContenido}
              titulo="AGREGAR NUEVO CONTENIDO"
              textoBoton="Agregar"
            />
          }
        />
        <Route
          path="/administrador/editar/:id"
          element={
            <FormularioContenido
              modificarContenido={modificarContenido}
              buscarContenido={buscarContenido}
              titulo="EDITAR CONTENIDO"
              textoBoton="Actualizar"
            />
          }
        />
        <Route path="/acercadenosotros" element={<AcercadeNosotros />} />
      </Routes>
    </main>
  );
}

// Componente para detalle de película
function MovieDetailWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData[id];
  const relatedMovies = Object.values(moviesData);

  if (!movie) {
    return <h2 className="text-danger">Película no encontrada</h2>;
  }

  return (
    <MovieDetail
      movie={movie}
      onBack={() => navigate("/")}
      relatedMovies={relatedMovies}
      onMovieClick={(movieId) => navigate(`/pelicula/${movieId}`)}
      logoImage={logoImage}
    />
  );
}

// Componente principal de la aplicación
function App() {
  return (
    <AuthProvider>
      <SavedMoviesProvider>
        <Router>
          <div style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
            <MenuNavBar />

            <Routes>
              {/* Página principal */}
              <Route path="/*" element={<HomePage />} />

              {/* Detalle de película */}
              <Route path="/pelicula/:id" element={<MovieDetailWrapper />} />

              {/* Páginas adicionales */}
              <Route path="/registro" element={<RegisterPage />} />
              <Route path="/acerca" element={<AcercadeNosotros />} />
              <Route path="/admin" element={<Administrador />} />
              <Route path="/formulario" element={<FormularioContenido />} />
              <Route path="/login" element={<h2>Página de login (próximamente)</h2>} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </SavedMoviesProvider>
    </AuthProvider>
  );
}

export default App;