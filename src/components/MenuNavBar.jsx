import {
  Container,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../BrandBanner.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 🔹 Importar el logo
import logoImage from "../assets/images/logosinfondo.png";

const MenuNavBar = () => {
  const brandImages = [
    "/logoEspn.png",
    "/logoDisneyPlus.png",
    "/logoHboMax.png",
    "/logoParamount.png",
    "/logoDiscoveryChannel.png",
  ];

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* 🔹 Carrusel de marcas */}
      <div className="brand-banner-wrapper">
        <div className="brand-banner-track">
          {brandImages.map((src, index) => (
            <img
              className="brand-logo"
              key={index}
              src={src}
              alt={`Brand ${index}`}
            />
          ))}
        </div>
      </div>

      {/* 🎬 Navbar principal */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* 🔹 Logo que redirige al home */}
          <Navbar.Brand href="/">
            <img
              src={logoImage}
              alt="Logo"
              style={{ height: "40px", width: "auto" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mb-0 me-5">
              <NavDropdown title="Películas" id="basic-nav-peliculas">
                <NavDropdown.Item className="disabled text-center">
                  Categorías
                </NavDropdown.Item>
                <Nav.Link href="#seccion-aventura">Aventura</Nav.Link>
                <Nav.Link href="#seccion-accion">Acción</Nav.Link>
                <Nav.Link href="#seccion-scifi">Ciencia Ficción</Nav.Link>
                <Nav.Link href="#seccion-humor">Humor</Nav.Link>
                <Nav.Link href="#seccion-terror">Terror</Nav.Link>
              </NavDropdown>
            </Nav>

            <Nav className="me-5">
              <NavDropdown title="Series" id="basic-nav-series">
                <NavDropdown.Item className="disabled text-center">
                  Categorías
                </NavDropdown.Item>
                <Nav.Link href="#seccion-aventura">Aventura</Nav.Link>
                <Nav.Link href="#seccion-accion">Acción</Nav.Link>
                <Nav.Link href="#seccion-scifi">Ciencia Ficción</Nav.Link>
                <Nav.Link href="#seccion-humor">Humor</Nav.Link>
                <Nav.Link href="#seccion-terror">Terror</Nav.Link>
              </NavDropdown>
            </Nav>

            {/* 🔹 Barra de búsqueda */}
            <Form className="search-form ">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Buscar pelis o series"
                  aria-label="Search"
                />
                <InputGroup.Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="my-2 bi bi-search DocSearch-Search-Icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </Navbar.Collapse>

          {/* 🔹 Botón login */}
          <button
            type="button"
            className="btn btn-outline-primary my-3"
            onClick={handleOpenModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-person-circle mx-1"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </button>

          {/* 🔹 Modal de Login */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Iniciar Sesión!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Cuenta</Form.Label>
                  <Form.Control type="email" placeholder="Ingresá tu Email!" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingresá tu clave!" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Recordarme!" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Ingresar
                </Button>
                <Button
                  className="mt-3 w-100"
                  variant="success"
                  onClick={() => {
                    handleCloseModal();
                    navigate("/registro");
                  }}
                >
                  Si no tienes cuenta, regístrate aquí
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuNavBar;
