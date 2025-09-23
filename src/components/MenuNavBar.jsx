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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 🔹 Importar el logo
import logoImage from "../assets/images/logosinfondo.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MenuNavBar = () => {
  const brandImages = [
    "/logoEspn.png",
    "/logoDisneyPlus.png",
    "/logoHboMax.png",
    "/logoParamount.png",
    "/logoDiscoveryChannel.png",
  ];
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    // Revisar si hay usuario logueado
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);

    Swal.fire({
      icon: "info",
      title: "Sesión cerrada",
      text: "Has cerrado sesión correctamente",
      timer: 2000,
      showConfirmButton: false,
    });

    navigate("/");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const postValidaciones = (data) => {
    const { email, password } = data;

    // Traer usuarios guardados en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Validar usuario
    const userFound = users.find(
      (u) => u.email === email && u.password === password
    );

    if (userFound) {
      localStorage.setItem("currentUser", JSON.stringify(userFound));
      setCurrentUser(userFound);
      Swal.fire({
        title: "Inicio de Sesión exitoso",
        icon: "success",
        draggable: true
      });
      handleCloseModal();
      navigate("/"); // Redirige al home
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Error de inicio de sesión",
        text: "Correo o contraseña incorrectos",
        confirmButtonText: "Intentar de nuevo",
      });
    }
  }

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
          {currentUser ? (
            // ✅ Si el usuario está logueado
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-danger"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            // ❌ Si NO está logueado -> mostrar tu botón actual
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
          )}

          {/* 🔹 Modal de Login */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Iniciar Sesión!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit(postValidaciones)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Cuenta</Form.Label>
                  <Form.Control type="email" placeholder="Ingresá tu Email!"
                    {...register("email", {
                      required: "el email es un campo obligatorio",
                      minLength: {
                        value: 10,
                        message: "el campo email debe contener minimo 10 caracteres"
                      },
                      maxLength: {
                        value: 60,
                        message: "el campo email debe contener maximo 60 caracteres"
                      }
                    })}
                  />
                </Form.Group>
                <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingresá tu clave!"
                    {...register("password", {
                      required: "el campo contraseña es obligatorio",
                      minLength: {
                        value: 5,
                        message: "el campo contraseña debe contener minimo 5 caracteres"
                      },
                      maxLength: {
                        value: 50,
                        message: "el campo contraseña debe contener maximom 50 caracteres"
                      }
                    })}
                  />
                  <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
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
