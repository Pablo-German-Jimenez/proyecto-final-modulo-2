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
import { useAuth } from "../contexts/AuthContext";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchIndex = [
    { id: "deadpool", title: "deadpool" },
    { id: "garras", title: "garra" },
    { id: "conjuro", title: "el conjuro 2" },
    { id: "purga", title: "la purga" },
    { id: "toystory", title: "toy story" },
  ];

  const normalize = (s) => s
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}+/gu, "")
    .trim();

  const submitSearch = () => {
    const q = normalize(query);
    if (!q) return;
    const hit = searchIndex.find(m => normalize(m.title).includes(q) || q.includes(normalize(m.title)) || m.id === q);
    if (hit) {
      navigate(`/pelicula/${hit.id}`);
      setQuery("");
    }
  };
  const { login, logout, isAuthenticated, user } = useAuth();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(email, password);
    
    if (result.success) {
      handleCloseModal();
      setError("");
    } else {
      setError(result.error);
    }
  };

  const handleLogout = () => {
    logout();
  };

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
            <Form className="search-form " onSubmit={(e)=>{e.preventDefault(); submitSearch();}}>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Buscar pelis o series"
                  aria-label="Search"
                  value={query}
                  onChange={(e)=>setQuery(e.target.value)}
                />
                <InputGroup.Text role="button" onClick={submitSearch}>
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

          {/* 🔹 Botón login/logout */}
          {isAuthenticated() ? (
            <div className="d-flex align-items-center gap-3">
              <span className="text-white">¡Hola, {user.name}!</span>
              <button
                type="button"
                className="btn btn-outline-danger my-3"
                onClick={handleLogout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
                Cerrar Sesión
              </button>
            </div>
          ) : (
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
              Iniciar Sesión
            </button>
          )}

          {/* 🔹 Modal de Login */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Iniciar Sesión!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Ingresá tu Email!" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Ingresá tu clave!" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
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
