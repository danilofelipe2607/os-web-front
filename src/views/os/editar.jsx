import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, useFormik } from "formik";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { adicionarOsAction } from "../../actions/osAction";
import { useSelector } from "react-redux";
import { adicionarOsValidador } from "../../utils/validador";
import { format, parseISO } from "date-fns";

import { ProgressSpinner } from "primereact/progressspinner";

export default function EditarOS({ itemEdit, EditVisible, hideEditarOs }) {
  console.log(itemEdit, "sdasdas");
  const dispatch = useDispatch();

  console.log(itemEdit);

  const initialValues = {
    descricao: "",
    numero: "",
    responsavel: "",
    description: "",
    status: "",
    valor: itemEdit.valor,
    date: itemEdit.date,
    observacao: ""
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
    { label: "Em andamento", value: "andamento" },
    { label: "concluida", value: "concluida" }
  ];
  function EditarOS(values) {
    dispatch(adicionarOsAction(values));
  }

  return (
    <>
      <Dialog
        // footer={footer}
        // iconsTemplate={myIcon}
        header="Editar OS"
        visible
        style={{ width: "50" }}
        modal={true}
        onHide={hideEditarOs}
        focusOnShow
      >
        <Formik
          onSubmit={EditarOS}
          initialValues={initialValues}
          enableReinitialize
        >
          {props => (
            <div>
              <div className="p-grid" style={{ marginTop: "50px" }}>
                <div className="p-col">
                  <input
                    className="p-inputtext p-component"
                    name="descricao"
                    value={props.values.descricao}
                    onChange={props.handleChange}
                    placeholder="Descrição da Os"
                  />
                </div>
              </div>
              <div className="p-grid">
                <div className="p-col">
                  <input
                    className="p-inputtext p-component"
                    name="numero"
                    value={props.values.numeroOs}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    placeholder="Número da Os"
                  />
                </div>
                <div className="p-col">
                  <Dropdown
                    name="responsavel"
                    value={props.values.responsavel}
                    options={responsavel}
                    onChange={props.handleChange}
                    placeholder="Selecione o Responsável"
                  />
                </div>
              </div>
              <div className="p-grid">
                <div className="p-col">
                  <input
                    className="p-inputtext p-component"
                    name="description"
                    value={props.values.description}
                    onChange={props.handleChange}
                    placeholder="Técnico"
                  />
                </div>
                <div className="p-col">
                  <Dropdown
                    name="status"
                    value={props.values.status}
                    options={statusArray}
                    onChange={props.handleChange}
                    placeholder="Status da Os"
                  />
                </div>
              </div>
              <div className="p-grid">
                <div className="p-col">
                  <input
                    className="p-inputtext p-component"
                    name="valor"
                    value={props.values.valor}
                    onChange={props.handleChange}
                    placeholder="Valor da Os"
                  />
                </div>
                <div className="p-col">
                  {/* <Calendar
                    name="date"
                    value={props.values.date}
                    onChange={props.handleChange}
                    placeholder="Data da os"
                    dateFormat="dd/mm/yy"
                  /> */}
                </div>
              </div>
              <div className="p-grid" style={{ marginBottom: "50px" }}>
                <div className="p-col">
                  <InputTextarea
                    name="observacao"
                    rows={5}
                    cols={30}
                    value={props.values.observacao}
                    onChange={props.handleChange}
                    placeholder="Observação"
                  />
                </div>
              </div>
              <div className="p-grid" style={{ marginBottom: "50px" }}>
                <div className="p-col">
                  <Button
                    label="Adicionar Os"
                    className="p-button-success"
                    icon="pi pi-check"
                    type="submit"
                    onClick={props.handleSubmit}
                  />
                </div>
                <div className="p-col">
                  <Button
                    label="Sair"
                    className="p-button-danger"
                    icon="pi pi-times"
                    onClick={hideEditarOs}
                  />
                </div>
              </div>
            </div>
          )}
        </Formik>
      </Dialog>
    </>
  );
}
