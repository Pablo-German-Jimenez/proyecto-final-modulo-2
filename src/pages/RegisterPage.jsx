import React from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";
import MenuNavBar from "../components/MenuNavBar";
import Footer from "../components/Footer";

function RegisterPage() {
  return (
    <div
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <MenuNavBar />

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="form-container">
          <h2 className="text-center mb-4">Registrarse</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Crea una contraseña" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repite la contraseña"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Registrarse
            </Button>
          </Form>
          <p className="text-center mt-3">
            ¿Ya eres miembro?{" "}
            <a href="/login" className="text-link">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RegisterPage;
