import {
  BrowserRouter as Router,
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
import MenuNavBar from "./components/MenuNavBar";
import { useEffect, useState } from "react";
import HeroMovie from "./components/HeroMovie";
import Carrusel from "./components/Carrusel";
import TopMovies from "./components/TopMovies";
import Planes from "./components/Planes";
import TopSeries from "./components/TopSeries";
import MovieDetail from "./components/MovieDetail";
import RegisterPage from "./pages/RegisterPage";
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

  // ELIMINAR ESTAS LÍNEAS QUE CAUSAN EL ERROR:
  // const handleBackToHome = () => {
  //   setCurrentView("home");
  //   setSelectedMovie(null);
  // };

  // if (currentView === "movieDetail" && selectedMovie) {
  //   return (
  //     <MovieDetail
  //       movie={selectedMovie}
  //       onBack={handleBackToHome}
  //       relatedMovies={relatedMovies}
  //       onMovieClick={handleMovieClick}
  //       logoImage={logoImage}
  //     />
  //   );
  // }

  //logica para guardar datos en el local storage
  const catalogoLS = JSON.parse(localStorage.getItem("catalogoKey")) || [];

  //Estado para almacenar el contenido
  const [catalogo, setCatalogo] = useState(catalogoLS);

  useEffect(() => {
    localStorage.setItem("catalogoKey", JSON.stringify(catalogo));
  }, [catalogo]);

  const agregarContenido = (nuevoContenido) => {
    setCatalogo([...catalogo, nuevoContenido]);
    return true;
  };

  const eliminarContenido = (idContenido) => {
    const filtrarCatalogo = catalogo.filter(
      (itemContenido) => itemContenido.id !== idContenido
    );
    setCatalogo(filtrarCatalogo);
    return true;
  };

  const buscarContenido = (idContenido) => {
    const contenidoBuscado = catalogo.find(
      (itemCatalogo) => itemCatalogo.id === idContenido
    );
    return contenidoBuscado;
  };

  const modificarContenido = (idContenido, dataCatalogo) => {
    const contenidoActualizado = catalogo.map((itemCatalogo) => {
      if (itemCatalogo.id === idContenido) {
        //actualizar catalogo
        return {
          ...itemCatalogo,
          ...dataCatalogo,
        };
      }
      return itemCatalogo;
    });
    //actualizar el state
    setCatalogo(contenidoActualizado);
    return true;
  };
  const [filaDestacada, setFilaDestacada] = useState(
    catalogoLS.find((item) => item.destacado)?.id || null
  );

  //Logica para destacar el contenido
  const destacarFila = (id) => {
    const nuevoCatalogo = catalogo.map((item) => {
      if (item.id === id) {
        if (item.destacado) {
          // Si ya estaba destacado lo elimino
          const copia = { ...item };
          delete copia.destacado;
          setFilaDestacada(null);
          return copia;
        } else {
          // Si no estaba destacado lo agrego
          setFilaDestacada(id);
          return { ...item, destacado: true };
        }
      } else {
        // Aseguro que todos los demás no tengan "destacado"
        const copia = { ...item };
        delete copia.destacado;
        return copia;
      }
    });
    setCatalogo(nuevoCatalogo);
    console.log("el id del contenido seleccionado es: ", id);
  };

  return (
    <>
     
      <main style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <HeroMovie onMovieClick={handleMovieClick} />
                <Carrusel onMovieClick={handleMovieClick} />
                <TopMovies
                  onMovieClick={handleMovieClick}
                  catalogo={catalogo}
                />
                <Planes />
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
              ></Administrador>
            }
          ></Route>
          <Route
            path="/administrador/crear"
            element={
              <FormularioContenido
                agregarContenido={agregarContenido}
                titulo="AGREGAR NUEVO CONTENIDO"
                textoBoton="Agregar"
              />
            }
          ></Route>
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
          ></Route>
          <Route
            path="/acercadenosotros"
            element={<AcercadeNosotros></AcercadeNosotros>}
          ></Route>
        </Routes>
      </main>
     
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
    navigate("/");
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
          <Route
            path="/login"
            element={<h2>Página de login (próximamente)</h2>}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;