import React, { useState } from "react";
import { CarService } from "../../service/CarService";
import { Panel } from "primereact/panel";
import { Checkbox } from "primereact/checkbox";
import Filtro from "./filtro";
import Grid from "./grid";
import { Button } from "primereact/button";
import AdicionarOS from "./adicionar";

export default function OsIndex() {
  const [visible, setVisible] = useState(false);

  function toggle() {
    setVisible(true);
  }

  function onHide() {
    setVisible(false);
  }
  return (
    <div className="p-grid p-fluid dashboard">
      <div
        className="p-grid p-align-center"
        style={{
          width: "100%",
          textAlign: "right"
        }}
      >
        <div className="p-col">
          <Button
            className="p-button-info"
            label="Adicionar OS"
            style={{ width: "300px" }}
            onClick={toggle}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <AdicionarOS toggle={toggle} visible={visible} onHide={onHide} />
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

      {/* <Grid /> */}
    </div>
  );
}
