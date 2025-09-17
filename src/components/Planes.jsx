import { Container, Row, Col, Card, Badge } from "react-bootstrap";

function Planes() {
  return (
    <section className="py-3 text-white" >
      <Container>
        <h2 className="text-white mb-3 mb-lg-4 text-start">
          Un plan que se ajusta a tus necesidades
        </h2>

        <Row className="g-4 justify-content-center">
          {/* Plan Básico */}
          <Col md={4}>
            <Card className="h-100 shadow-lg border-0 text-white"
              style={{ background: "linear-gradient(135deg, #1e3c72, #2a5298)", borderRadius: "1rem" }}>
              <Card.Body className="d-flex flex-column">
                <h4 className="fw-bold">Básico</h4>
                <p className="mb-2">720p</p>
                <ul className="list-unstyled flex-grow-1">
                  <li>✔ Buena calidad de video</li>
                  <li>✔ Para tu teléfono, tablet, laptop y TV</li>
                </ul>
                <h5 className="fw-bold mt-auto mb-0">$ 7.199/mes</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Plan Estándar */}
          <Col md={4}>
            <Card className="h-100 shadow-lg border-0 text-white"
              style={{ background: "linear-gradient(135deg, #42275a, #734b6d)", borderRadius: "1rem" }}>
              <Card.Body className="d-flex flex-column">
                <h4 className="fw-bold">Estándar</h4>
                <p className="mb-2">1080p</p>
                <ul className="list-unstyled flex-grow-1">
                  <li>✔ Excelente calidad de video</li>
                  <li>✔ Para tu teléfono, tablet, laptop y TV</li>
                </ul>
                <h5 className="fw-bold mt-auto mb-0">$ 11.999/mes</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Plan Premium */}
          <Col md={4}>
            <Card className="h-100 shadow-lg border-0 text-white position-relative"
              style={{ background: "linear-gradient(135deg, #8e0e00, #1f1c18)", borderRadius: "1rem" }}>
              <Badge bg="light" text="dark" className="position-absolute top-0 end-0 m-2 rounded-pill">
                Más popular
              </Badge>
              <Card.Body className="d-flex flex-column">
                <h4 className="fw-bold">Premium</h4>
                <p className="mb-2">4K + HDR</p>
                <ul className="list-unstyled flex-grow-1">
                  <li>✔ Calidad de video óptima</li>
                  <li>✔ Sonido inmersivo (audio espacial)</li>
                  <li>✔ Para tu teléfono, tablet, laptop y TV</li>
                </ul>
                <h5 className="fw-bold mt-auto mb-0">$ 15.999/mes</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Planes;
