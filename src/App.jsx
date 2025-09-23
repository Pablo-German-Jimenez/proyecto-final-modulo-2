import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";

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

// Componente para la página principal con navegación
function HomePage() {
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/pelicula/${movieId}`);
  };

  return (
    <>
      <HeroMovie />
      <Carrusel onMovieClick={handleMovieClick} />
      <TopMovies onMovieClick={handleMovieClick} />
      <Planes />
      <TopSeries />
    </>
  );
}

// Componente para detalle de película usando params
function MovieDetailWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData[id];
  const relatedMovies = Object.values(moviesData);

  if (!movie) {
    return <h2 className="text-danger">Película no encontrada</h2>;
  }

  const handleBack = () => {
    navigate('/');
  };

  const handleMovieClick = (movieId) => {
    navigate(`/pelicula/${movieId}`);
  };

  return (
    <MovieDetail
      movie={movie}
      onBack={handleBack}
      relatedMovies={relatedMovies}
      onMovieClick={handleMovieClick}
      logoImage={logoImage}
    />
  );
}

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
        <MenuNavBar />

        <Routes>
          {/* Página principal */}
          <Route path="/" element={<HomePage />} />

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
  );
}

export default App;
