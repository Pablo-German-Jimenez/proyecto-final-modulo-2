import CardExclusivos from "./CardExclusivos";

const AcercadeNosotros = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        {/*Apartado acerca de nosotros*/}
        <div className="col-12 col-md-12 col-lg-12 p-0 imgAcerca">
          <h2 className="tituloAcerca">ACERCA DE NOSOTROS</h2>
        </div>
        {/* Apartado quienes somos */}
        <div className="col-12 col-md-12 quienes-somos">
          <h2 className="text-center">¿QUIENES SOMOS?</h2>
          <p className="text-center justificado">
            Somos un equipo apasionado por el cine y las series que <br />
            decidimos crear un espacio para disfrutar de tus peliculas favoritas
            <br />
            sea simple, rapido y sin complicaciones.
          </p>
        </div>
        {/* apartado vision, mision y valores */}
        <div className="col-12 col-md-12 vision-mision-valores">
          <div className="row d-flex justify-content-around g-1 g-md-0">
            <div className="col-12 col-md-3 col-lg-3 mb-3 mb-md-0 d-flex flex-column align-items-center">
              <i className="bi bi-eye-fill fs-2"></i>
              <h3>Visión</h3>
              <p>Brindar acceso facil al mejor contenido</p>
            </div>
            <div className="col-12 col-md-3 col-lg-3 mb-3 mb-md-0 d-flex flex-column align-items-center">
              <i className="bi bi-bullseye fs-2"></i>
              <h3>Misión</h3>
              <p>Ser la plataforma preferida de los fans</p>
            </div>
            <div className="col-12 col-md-3 col-lg-3 mb-3 mb-md-0 d-flex flex-column align-items-center">
              <i className="bi bi-people-fill fs-2"></i>
              <h3 className="text-center">Valores</h3>
              <p>Pasion por el cine, innovacion y cercania</p>
            </div>
          </div>
        </div>
        {/* apartado nuestros exclusivos */}
        <div className="col-12 col-md-12 degradeMorado">
          <h3 className="text-center">NUESTROS EXCLUSIVOS</h3>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
              <CardExclusivos titulo="Soy Leyenda" img="https://clarovideocdn5.clarovideo.net/PELICULAS/IAMLEGEND/EXPORTACION_WEB/SS/IAMLEGENDWVERTICAL.jpg?size=200x300" />
            </div>
            <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
              <CardExclusivos titulo="Terminator 2" img="https://www.originalfilmart.com/cdn/shop/products/terminator_2_1991_advance_original_film_art_5000x.jpg?v=1594872723" />
            </div>
            <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
              <CardExclusivos titulo="Better Call Saul" img="https://es.web.img3.acsta.net/pictures/15/12/17/16/57/343857.jpg" />
            </div>
            <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
              <CardExclusivos titulo="Band of Brothers" img="https://enagenda.com.ar/uploads/ckeditor/2023/09/20230914182555_f5gwyhcxkaanhti.jpg" />
            </div>
            {/* contenido solo visible en dispositivos medianos */}
            <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center align-items-center d-none d-md-flex d-lg-none">
              <CardExclusivos titulo="Saw" img="https://es.web.img3.acsta.net/medias/nmedia/18/89/75/36/20065254.jpg" />
            </div>
            <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center align-items-center d-none d-md-flex d-lg-none">
              <CardExclusivos titulo="Cars" img="https://es.web.img2.acsta.net/pictures/14/05/28/11/24/435900.jpg" />
            </div>
          </div>
        </div>
        {/* apartado lo que nos diferencia */}
        <div className="col-12 vision-mision-valores">
          <h3 className="text-center mb-4">LO QUE NOS DIFERENCIA</h3>
          <div className="row d-flex justify-content-around g-1 g-md-0">
            <div className="col-12 col-md-3 mt-3 d-flex flex-column align-items-center">
              <i className="bi bi-camera-reels-fill fs-2"></i>
              <p>Catalogo variado y actualizado.</p>
            </div>
            <div className="col-12 col-md-3 mt-3 d-flex flex-column align-items-center">
              <i className="bi bi-cloud-arrow-down-fill fs-2"></i>
              <p>Descargar y ver sin conexion</p>
            </div>
            <div className="col-12 col-md-3 mt-3 d-flex flex-column align-items-center">
              <i className="bi bi-film fs-2"></i>
              <p>Contenidos exclusivos.</p>
            </div>
          </div>
        </div>
        {/* apartado nuestro equipo */}
        <div className="col-12 degradeMorado">
          <h3 className="text-center fs-3">NUESTRO EQUIPO</h3>
          <div className="row">
            <div className="col-12 col-md-3 mt-2 d-flex flex-column align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10542/10542459.png"
                alt="integrante del equipo"
                className="avatarIntegrantes"
              />
              <p>Integrante 1</p>
            </div>
            <div className="col-12 col-md-3 mt-2 d-flex flex-column align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10542/10542459.png"
                alt="integrante del equipo"
                className="avatarIntegrantes"
              />
              <p>Integrante 2</p>
            </div>
            <div className="col-12 col-md-3 mt-2 d-flex flex-column align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10542/10542459.png"
                alt="integrante del equipo"
                className="avatarIntegrantes"
              />
              <p>Intregante 3</p>
            </div>
            <div className="col-12 col-md-3 mt-2 d-flex flex-column align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10542/10542459.png"
                alt="integrante del equipo"
                className="avatarIntegrantes"
              />
              <p>Integrante 4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercadeNosotros;
