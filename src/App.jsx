import Footer from "./components/Footer";
import AcercadeNosotros from "./components/AcercadeNosotros";
import Administrador from "./components/Administrador";
import FormularioContenido from "./components/FormularioContenido";
import MenuNavBar from "./componentes/MenuNavBar"
import React, { useEffect, useState } from "react";


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
import { BrowserRouter, Routes, Route, data } from "react-router";

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

  //logica para guardar datos en el local storage
  const catalogoLS = JSON.parse(localStorage.getItem("catalogoKey")) || [];

  //Estado para almacenar el contenido
  const [catalogo, setCatalogo] = useState(catalogoLS);

  useEffect(() => {
    localStorage.setItem("catalogoKey", JSON.stringify(catalogo))
  }, [catalogo]);

  const agregarContenido = (nuevoContenido) => {
    setCatalogo([...catalogo, nuevoContenido])
    return true;
  }

  const eliminarContenido = (idContenido) => {
    const filtrarCatalogo = catalogo.filter((itemContenido) => itemContenido.id !== idContenido);
    setCatalogo(filtrarCatalogo);
    return true;
  }

  const buscarContenido = (idContenido) => {
    const contenidoBuscado = catalogo.find((itemCatalogo) => itemCatalogo.id === idContenido);
    return contenidoBuscado;
  }

  const modificarContenido = (idContenido, dataCatalogo) => {
    const contenidoActualizado = catalogo.map((itemCatalogo) => {
      if (itemCatalogo.id === idContenido) {
        //actualizar catalogo
        return {
          ...itemCatalogo,
          ...dataCatalogo
        }
      }
      return itemCatalogo;
    })
    //actualizar el state
    setCatalogo(contenidoActualizado);
    return true;
  }
  const [filaDestacada, setFilaDestacada] = useState(catalogoLS.find((item) => item.destacado)?.id || null);

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
    })
    setCatalogo(nuevoCatalogo);
    console.log("el id del contenido seleccionado es: ", id)
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
                  <TopMovies onMovieClick={handleMovieClick} catalogo={catalogo} />
                  <Planes />
                  <TopSeries onMovieClick={handleMovieClick} />

                </>
              }
            />
            <Route path="/administrador"
              element={<Administrador catalogo={catalogo}
                eliminarContenido={eliminarContenido}
                modificarContenido={modificarContenido}
                destacarFila={destacarFila}
                filaDestacada={filaDestacada}
              ></Administrador>}
            ></Route>
            <Route path="/administrador/crear"
              element={<FormularioContenido agregarContenido={agregarContenido} titulo="AGREGAR NUEVO CONTENIDO" textoBoton="Agregar" />}
            >
            </Route>
            <Route
              path="/administrador/editar/:id"
              element={<FormularioContenido modificarContenido={modificarContenido}
                buscarContenido={buscarContenido}
                titulo="EDITAR CONTENIDO" textoBoton="Actualizar" />}
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
