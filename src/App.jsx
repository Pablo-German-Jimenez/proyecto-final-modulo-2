import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";

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
import MovieDetail from "./components/MovieDetail";

// Importar imágenes
import deadpoolImage from "./assets/images/deadpool.jfif";
import garraImage from "./assets/images/Garra.jpg";
import conjuroBannerImage from "./assets/images/el conjuro banner.jpg";
import purgaBannerImage from "./assets/images/la purga banner.jpg";
import toyStoryBannerImage from "./assets/images/toy story 4 banner.jpg";
import logoImage from "./assets/images/logosinfondo.png";

// Datos de películas
const moviesData = {
  deadpool: { id: "deadpool", title: "DEADPOOL", subtitle: "LA PELÍCULA", year: "2016", ageRating: "18+", genre: "ACCIÓN", description: "Deadpool (HBO)...", backgroundImage: deadpoolImage },
  garras: { id: "garras", title: "GARRAS", subtitle: "EL JUEGO FINAL", year: "2024", ageRating: "13+", genre: "DEPORTES", description: "Una épica historia...", backgroundImage: garraImage },
  conjuro: { id: "conjuro", title: "EL CONJURO", subtitle: "2 - EL ENCUENTRO", year: "2016", ageRating: "18+", genre: "TERROR", description: "Los investigadores...", backgroundImage: conjuroBannerImage },
  purga: { id: "purga", title: "LA PURGA", subtitle: "ANARQUÍA", year: "2014", ageRating: "18+", genre: "THRILLER", description: "En esta secuela...", backgroundImage: purgaBannerImage },
  toystory: { id: "toystory", title: "TOY STORY", subtitle: "4 - LA HISTORIA CONTINÚA", year: "2019", ageRating: "TP", genre: "ANIMACIÓN", description: "Woody, Buzz y los juguetes...", backgroundImage: toyStoryBannerImage },
};

// Página principal
function HomePage() {
  const navigate = useNavigate();
  const handleMovieClick = (movieId) => navigate(`/pelicula/${movieId}`);

  return (
    <main style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
      <HeroMovie onMovieClick={handleMovieClick} />
      <Carrusel onMovieClick={handleMovieClick} />
      <TopMovies onMovieClick={handleMovieClick} />
      <Planes />
      <TopSeries onMovieClick={handleMovieClick} />
    </main>
  );
}

// Detalle de película
function MovieDetailWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData[id];
  const relatedMovies = Object.values(moviesData);

  if (!movie) return <h2 className="text-danger">Película no encontrada</h2>;

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

// App principal
function App() {
  const catalogoLS = JSON.parse(localStorage.getItem("catalogoKey")) || [];
  const [catalogo, setCatalogo] = useState(catalogoLS);
  const [filaDestacada, setFilaDestacada] = useState(catalogoLS.find((item) => item.destacado)?.id || null);

  useEffect(() => {
    localStorage.setItem("catalogoKey", JSON.stringify(catalogo));
  }, [catalogo]);

  const agregarContenido = (nuevoContenido) => { setCatalogo([...catalogo, nuevoContenido]); return true; };
  const eliminarContenido = (idContenido) => { setCatalogo(catalogo.filter((item) => item.id !== idContenido)); return true; };
  const buscarContenido = (idContenido) => catalogo.find((item) => item.id === idContenido);
  const modificarContenido = (idContenido, dataCatalogo) => { setCatalogo(catalogo.map((item) => item.id === idContenido ? { ...item, ...dataCatalogo } : item)); return true; };
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
    <BrowserRouter>
      <div style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
        <MenuNavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pelicula/:id" element={<MovieDetailWrapper />} />
            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/acerca" element={<AcercadeNosotros />} />
            <Route path="/formulario" element={<FormularioContenido />} />
            <Route path="/login" element={<h2>Página de login (próximamente)</h2>} />
            <Route path="/administrador" element={<Administrador catalogo={catalogo} agregarContenido={agregarContenido} eliminarContenido={eliminarContenido} modificarContenido={modificarContenido} destacarFila={destacarFila} filaDestacada={filaDestacada} />} />
            <Route path="/administrador/crear" element={<FormularioContenido agregarContenido={agregarContenido} titulo="AGREGAR NUEVO CONTENIDO" textoBoton="Agregar" />} />
            <Route path="/administrador/editar/:id" element={<FormularioContenido modificarContenido={modificarContenido} buscarContenido={buscarContenido} titulo="EDITAR CONTENIDO" textoBoton="Actualizar" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
