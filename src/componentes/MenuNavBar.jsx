import { Container, InputGroup } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

const MenuNavBar = () => {
  return (
    <>
      <Navbar   expand="lg" className="bg-body-tertiary "  >
        <Container  >
          <Navbar.Brand href="#home" className="border border-primary">Logo marca</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="d-flex ">
          <Navbar.Collapse id="basic-navbar-nav" className="mx-4">
            <Nav className="mb-0 me-5">
              <NavDropdown title="Peliculas" id="basic-nav-peliculas" >
                <NavDropdown.Item className="disabled text-center">
                  Categorías
                </NavDropdown.Item>
                <Nav.Link href="#seccion-aventura">Aventura</Nav.Link>
                <Nav.Link href="#seccion-aventura">Acción</Nav.Link>
                <Nav.Link href="#seccion-aventura">Ciencia Ficción</Nav.Link>
                <Nav.Link href="#seccion-aventura">Humor</Nav.Link>
                <Nav.Link href="#seccion-aventura">Terror</Nav.Link>
                <Nav.Link href="#seccion-aventura">Romance</Nav.Link>
                <Nav.Link href="#seccion-aventura">Adultos</Nav.Link>
              </NavDropdown>
            </Nav>
            <Nav className="me-5">
              <NavDropdown className="my-3 mx-5 align-baseline" title="Series" id="basic-nav-series">
                <NavDropdown.Item className="disabled text-center ">
                  Categorías
                </NavDropdown.Item>
                <Nav.Link href="#seccion-aventura">Aventura</Nav.Link>
                <Nav.Link href="#seccion-aventura">Acción</Nav.Link>
                <Nav.Link href="#seccion-aventura">Ciencia Ficción</Nav.Link>
                <Nav.Link href="#seccion-aventura">Humor</Nav.Link>
                <Nav.Link href="#seccion-aventura">Terror</Nav.Link>
                <Nav.Link href="#seccion-aventura">Romance</Nav.Link>
                <Nav.Link href="#seccion-aventura">Adultos</Nav.Link>
              </NavDropdown>
             
            </Nav >
          </Navbar.Collapse>
          </div>
          <div   className="d-flex justify-content-around gap-5 ">
             <Form className="search-form border border-danger  w-100"> 
              <InputGroup>
                <Form.Control 
                  type="search"
                  placeholder="Buscar pelis o series"
                  className="  me-auto w-75"
                  aria-label="Search"
                />
                <InputGroup.Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className=" my-3 bi bi-search DocSearch-Search-Icon"
                    viewBox="0 0 16 16"
                  >
                    <path  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </InputGroup.Text>
              </InputGroup>
            </Form>
            <button type="button" className="btn btn-outline-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </button>
            <button type="button" className="btn btn-outline-success">
              Subscribirse
            </button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuNavBar;
