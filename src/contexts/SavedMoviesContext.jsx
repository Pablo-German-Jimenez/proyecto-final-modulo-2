import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedMoviesContext = createContext();

export const useSavedMovies = () => {
  const context = useContext(SavedMoviesContext);
  if (!context) {
    throw new Error('useSavedMovies debe ser usado dentro de un SavedMoviesProvider');
  }
  return context;
};

export const SavedMoviesProvider = ({ children }) => {
  const [savedMovies, setSavedMovies] = useState([]);

  // Cargar películas guardadas del localStorage al inicializar
  useEffect(() => {
    const saved = localStorage.getItem('savedMovies');
    if (saved) {
      setSavedMovies(JSON.parse(saved));
    }
  }, []);

  // Guardar en localStorage cada vez que cambie el estado
  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  const addSavedMovie = (movie) => {
    // Verificar si la película ya está guardada
    const isAlreadySaved = savedMovies.some(saved => saved.id === movie.id);
    
    if (!isAlreadySaved) {
      setSavedMovies(prev => [...prev, movie]);
      return { success: true, message: 'Película guardada' };
    } else {
      return { success: false, message: 'La película ya está guardada' };
    }
  };

  const removeSavedMovie = (movieId) => {
    setSavedMovies(prev => prev.filter(movie => movie.id !== movieId));
    return { success: true, message: 'Película eliminada de guardados' };
  };

  const isMovieSaved = (movieId) => {
    return savedMovies.some(movie => movie.id === movieId);
  };

  const clearAllSaved = () => {
    setSavedMovies([]);
    return { success: true, message: 'Todos los guardados eliminados' };
  };

  const value = {
    savedMovies,
    addSavedMovie,
    removeSavedMovie,
    isMovieSaved,
    clearAllSaved
  };

  return (
    <SavedMoviesContext.Provider value={value}>
      {children}
    </SavedMoviesContext.Provider>
  );
};
