import React from "react";
import { Button, Table } from "react-bootstrap";
import ItemTablaContenido from "./ItemTablaContenido";

const Administrador = () => {
  return (
    <section className="container border border-light">
      <h2 className="text-center">ADMINISTRAR CATALOGO</h2>
      <div className="row border border-light">
        <div className="container-fluid col-12 border border-light">
          <Table responsive bordered hover>
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
              <ItemTablaContenido></ItemTablaContenido>
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Administrador;
