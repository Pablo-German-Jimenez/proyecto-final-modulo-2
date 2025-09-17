import React from "react";
import { Button, Table } from "react-bootstrap";

const Administrador = () => {
  return (
    <section className="container border border-light">
      <h2 className="text-center">ADMINISTRAR CATALOGO</h2>
      <div className="row border border-light">
        <div className="container-fluid col-12 border border-light">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Portada</th>
                <th>Categoria</th>
                <th>Descripcion</th>
                <th>Publicado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>Harry Potter</td>
                <td>Pelicula</td>
                <td>
                  <img src="" alt="portada pelicula" />
                </td>
                <td>Fantasia</td>
                <td className="text-truncate" style={{ maxWidth: 200 }}>
                  Durante su primer año en la escuela de magia y hechiceria de
                  Hogwarts, Harry Potter descrubre que un malevolo y poderoso
                  mago llamado Voldemort esta en busca de una piedra filosofal
                  que alarga la vida a quien la posee.
                </td>
                <td>
                  <button className="btn btn-success">
                    <i className="bi bi-patch-check-fill"></i>
                  </button>
                </td>
                <td className="border border-light d-flex flex-column align-items-center justify-content-center gap-2">
                  <button className="btn btn-danger">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                  <button className="btn btn-warning">
                    <i class="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-warning">
                    <i class="bi bi-star-fill"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Administrador;
