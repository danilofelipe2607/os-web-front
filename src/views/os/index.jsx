import React from "react";
import { CarService } from "../../service/CarService";
import { Panel } from "primereact/panel";
import { Checkbox } from "primereact/checkbox";
import Filtro from "./filtro";
import Grid from "./grid";
import { Button } from "primereact/button";

export default function OsIndex() {
  return (
    <div className="p-grid p-fluid dashboard">
      <div
        className="p-grid p-align-center"
        style={{
          width: "100%"
        }}
      >
        <div className="p-col">
          <Button
            className="p-button-info"
            label="Adicionar OS"
            style={{ width: "300px" }}
          />
        </div>
        <div className="p-col">
          {" "}
          <Button
            className="p-button-warning"
            label="Editar OS"
            style={{ width: "300px" }}
          />
        </div>
        <div className="p-col">
          {" "}
          <Button
            className="p-button-danger"
            label="Remover OS"
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <br />
      <br />
      <br />

      <Panel
        header="Painel de Busca"
        style={{
          width: "100%",
          marginBottom: "10px"
        }}
      >
        <Filtro />
      </Panel>
      <br />

      <Grid />
    </div>
  );
}
