import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="container col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center align-items-md-start">
          <h5 className="mt-lg-0">Rolling Movie</h5>
          <Link className="linksfooter">Peliculas</Link>
          <Link className="linksfooter">Series</Link>
          <Link className="linksfooter">Documentales</Link>
          <Link className="linksfooter">Estrenos</Link>
        </div>
        <div className="container col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center align-items-md-start">
          <h5 className="mt-2 mt-lg-0" >Acerca de nosotros</h5>
          <Link className="linksfooter">Plataformas</Link>
          <Link className="linksfooter">Planes</Link>
          <Link className="linksfooter" to={"/"}>Novedades</Link>
          <Link className="linksfooter" to={"/acerca"}>Quienes Somos</Link>
        </div>
        <div className="container col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center align-items-md-start">
          <h5 className="mt-2 mt-md-3 mt-lg-0">Ayuda</h5>
          <Link className="linksfooter">Centro de ayuda</Link>
          <Link className="linksfooter">Contacto/Soporte Técnico</Link>
          <Link className="linksfooter">Terminos y Condiciones</Link>
          <Link className="linksfooter">Politica de privacidad</Link>
        </div>
        <div className="container col-12 col-md-6 col-lg-3">
          <h5 className="text-center text-md-start mt-2 mt-md-3 mt-lg-0">
            Redes Sociales
          </h5>
          <div className="redes d-flex justify-content-center d-md-block">
            <i className="bi bi-facebook fs-2 mx-2 mx-md-3"></i>
            <i className="bi bi-instagram fs-2 mx-2"></i>
            <br />
            <i className="bi bi-twitter fs-2 mx-2 mx-md-3"></i>
            <i className="bi bi-linkedin fs-2 mx-2"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
