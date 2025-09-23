import React from "react";
import "./GenreFilter.css";

const GENRES = [
  "Todos",
  "Acción",
  "Aventura",
  "Animación",
  "Comedia",
  "Crimen",
  "Documental",
  "Drama",
  "Familia",
  "Fantasía",
  "Historia",
  "Horror",
  "Música",
  "Misterio",
  "Romance",
  "Ciencia Ficción",
  "Película de TV",
  "Thriller",
  "Guerra",
  "Western"
];

function GenreFilter({ selectedGenre, onChange }) {
  return (
    <div className="genre-filter container py-2 py-lg-3">
      <div className="row">
        <div className="col-12">
          <div className="mb-2 text-white fw-semibold">Filtrar por género:</div>
          <div className="d-flex flex-wrap gap-2">
            {GENRES.map((g) => (
              <button
                key={g}
                type="button"
                className={`genre-chip ${selectedGenre === g ? "active" : ""}`}
                onClick={() => onChange && onChange(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenreFilter;


