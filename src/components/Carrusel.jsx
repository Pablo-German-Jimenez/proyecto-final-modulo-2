import React, { useRef } from "react";
import { Card } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react"; // para iconos bonitos
import "./Carrusel.css";

import deadpoolCartelera from "../assets/images/deadpool.jfif"; // Mantenemos Deadpool original
import conjuroCartelera from "../assets/images/El conjuro 2.jpg"; // Mantenemos El Conjuro original
import garraCartelera from "../assets/images/Garra.jpg"; // Mantenemos Garra original
import purgaCartelera from "../assets/images/La purga.jpeg"; // Mantenemos La Purga original
import toyStoryCartelera from "../assets/images/toy story.jpg"; // Mantenemos Toy Story original
import aPesarDeTiCartelera from "../assets/images/a_pesar_de_ti-cartelera.jpg";
import avatarCartelera from "../assets/images/avatar_fuego_y_ceniza-cartelera.jpg";
import bobEsponjaCartelera from "../assets/images/bob_esponja_una_aventura_pirata-cartelera.jpg";
import elioCartelera from "../assets/images/elio-cartelera.jpg";
import seLoQueHicisteisCartelera from "../assets/images/se_lo_que_hicisteis_el_ultimo_verano-cartelera.jpg";

const data = [
  { id: 1, titulo: "Deadpool", img: deadpoolCartelera },
  { id: 2, titulo: "El Conjuro 2", img: conjuroCartelera },
  { id: 3, titulo: "Garra", img: garraCartelera },
  { id: 4, titulo: "La Purga", img: purgaCartelera },
  { id: 5, titulo: "Toy Story", img: toyStoryCartelera },
  { id: 6, titulo: "A Pesar de Ti", img: aPesarDeTiCartelera },
  { id: 7, titulo: "Avatar: Fuego y Ceniza", img: avatarCartelera },
  { id: 8, titulo: "Bob Esponja: Una Aventura Pirata", img: bobEsponjaCartelera },
  { id: 9, titulo: "Elio", img: elioCartelera },
  { id: 10, titulo: "Sé lo que Hicisteis el Último Verano", img: seLoQueHicisteisCartelera },
];

const Carrusel = () => {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  return (
    <div className="container-fluid py-4 py-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white mb-3 mb-lg-2 text-start" >También podrían gustarte</h2>
            
            <div className="carrusel-container position-relative">
              {/* Botón Izquierda - Solo visible en pantallas grandes */}
              <button 
                className="arrow left d-none d-lg-block" 
                onClick={() => scroll(-400)}
                style={{ 
                  width: "40px", 
                  height: "40px",
                  fontSize: "1.2rem"
                }}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Scroll de Cards */}
              <div 
                className="carrusel-scroll" 
                ref={scrollRef}
                style={{
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth"
                }}
              >
                {data.map((item) => (
                  <Card 
                    key={item.id} 
                    className="carrusel-card me-2"
                    style={{
                      scrollSnapAlign: "start",
                      minWidth: "150px",
                      maxWidth: "200px"
                    }}
                  >
                    <Card.Img 
                      variant="top" 
                      src={item.img} 
                      alt={item.titulo}
                      style={{
                        height: "200px",
                        objectFit: "cover"
                      }}
                    />
                    <Card.Body className="p-2">
                      <Card.Title 
                        className="text-white mb-0" 
                        style={{ 
                          fontSize: "0.8rem",
                          lineHeight: "1.2",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {item.titulo}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              {/* Botón Derecha - Solo visible en pantallas grandes */}
              <button 
                className="arrow right d-none d-lg-block" 
                onClick={() => scroll(400)}
                style={{ 
                  width: "40px", 
                  height: "40px",
                  fontSize: "1.2rem"
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
