import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; // Para usar Link de react-router-dom con botones de react-bootstrap

const PaginaNoEncontrada = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center text-white bg-dark">
      <Row className="mb-4">
        <Col>
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h2 className="text-warning">¡PELÍCULA PERDIDA!</h2>
          <p className="lead">Error 404: Página no encontrada</p>
          <p>
            Parece que esta página se fue al final de los créditos...
            o se perdió en una galaxia muy, muy lejana! 🎬
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* El componente LinkContainer permite que el botón funcione como un Link */}
          <LinkContainer to="/">
            <Button variant="primary" size="lg">Volver a la cartelera</Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default PaginaNoEncontrada;