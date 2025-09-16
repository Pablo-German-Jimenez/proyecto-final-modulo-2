import CardExclusivos from "./CardExclusivos";

const AcercadeNosotros = () => {
  return (
    <section className="container-fluid border border-light">
      <div className="row">
        {/*Apartado acerca de nosotros*/}
        <div className="col-12 col-md-12 col-lg-12 p-0 border border-light imgAcerca">
          <h2 className="tituloAcerca">ACERCA DE NOSOTROS</h2>
        </div>
        {/* Apartado quienes somos */}
        <div className="col-12 col-md-12 border border-light">
          <h2 className="text-center">¿QUIENES SOMOS?</h2>
          <p className="text-center justificado">
            Somos un equipo apasionado por el cine y las series que <br />
            decidimos crear un espacio para disfrutar de tus peliculas favoritas
            <br />
            sea simple, rapido y sin complicaciones.
          </p>
        </div>
        {/* apartado vision, mision y valores */}
        <div className="col-12 col-md-12 border border-light">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center border border-light">
              <i className="bi bi-eye-fill fs-2"></i>
              <h3>Visión</h3>
              <p>Brindar acceso facil al mejor contenido</p>
            </div>
            <div className="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center border border-light">
              <i className="bi bi-bullseye fs-2"></i>
              <h3>Misión</h3>
              <p>Ser la plataforma preferida de los fans</p>
            </div>
            <div className="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center border border-light">
              <i className="bi bi-people-fill fs-2"></i>
              <h3 className="text-center">Valores</h3>
              <p>Pasion por el cine, innovacion y cercania</p>
            </div>
          </div>
        </div>
        {/* apartado nuestros exclusivos */}
        <div className="col-12 col-md-12 border border-light">
          <h3 className="text-center">NUESTROS EXCLUSIVOS</h3>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 border border-light">
              <CardExclusivos></CardExclusivos>
            </div>
            <div className="col-12 col-md-4 col-lg-3 border border-light">
              <CardExclusivos></CardExclusivos>
            </div>
            <div className="col-12 col-md-4 col-lg-3 border border-light">
              <CardExclusivos></CardExclusivos>
            </div>
            <div className="col-12 col-md-4 col-lg-3 border border-light">
              <CardExclusivos></CardExclusivos>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercadeNosotros;
