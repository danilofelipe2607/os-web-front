import React, { useState } from "react";
import { Button } from "primereact/button";
import { Formik } from "formik";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { getBuscarFiltro } from "../../actions/osAction";
import { useDispatch } from "react-redux";

export default function Filtro() {
  const dispatch = useDispatch();
  const initialValues = {
    dateFinal: "",
    dateInicial: "",
    status: "",
    numero: "",
    responsavel: ""
  };
  const responsavel = [
    { label: "Danilo", value: "Danilo" },
    { label: "Jilmar", value: "Jilmar" },
    { label: "Bruno", value: "Bruno" },
    { label: "Aroldo", value: "Aroldo" }
  ];

  const statusArray = [
    { label: "pendente", value: "pendente" },
    { label: "cancelada", value: "cancelada" },
    { label: "execução", value: "execução" },
    { label: "concluida", value: "concluida" }
  ];

  function getBuscar(values) {
    dispatch(getBuscarFiltro(values));
  }
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={getBuscar}>
        {props => (
          <form onSubmit={props.handleSubmit}>
            <div className="p-grid p-align-center">
              <div className="p-col-3">
                <label>Número da OS</label>
                <span>
                  <InputText
                    name="numero"
                    value={props.values.numero}
                    onChange={props.handleChange}
                  />
                </span>
              </div>

              <div className="p-col-3">
                <label htmlFor="in">Data Final da OS</label>
                <span>
                  <Calendar
                    name="dateFinal"
                    value={props.values.dateFinal}
                    onChange={props.handleChange}
                  ></Calendar>
                </span>
              </div>
              <div className="p-col-3">
                <label htmlFor="in">Data Inicial da OS</label>
                <span>
                  <Calendar
                    name="dateInicial"
                    value={props.values.dateInicial}
                    onChange={props.handleChange}
                  ></Calendar>
                </span>
              </div>
            </div>
            <div className="p-grid p-align-center">
              <div className="p-col-3">
                <label htmlFor="in">Responsável pela OS</label>
                <span>
                  <Dropdown
                    name="responsavel"
                    value={props.values.responsavel}
                    options={responsavel}
                    onChange={props.handleChange}
                    placeholder="Status da OS"
                  />
                </span>
              </div>
              <div className="p-col-3">
                <label htmlFor="in">Status da OS</label>
                <Dropdown
                  name="status"
                  value={props.values.status}
                  options={statusArray}
                  onChange={props.handleChange}
                  placeholder="Status da OS"
                />
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px"
              }}
            >
              <div className="p-col-12">
                <Button
                  className="p-button-info"
                  label="Buscar"
                  type="submit"
                  style={{ width: "170px" }}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
