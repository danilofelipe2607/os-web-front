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
import InputIcon from "../../components/inputs/input";
import {
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

export default function AdicionarOS({ toggle, visible, onHide }) {
  const statusArray = [
    { label: "pendente", value: "pendente" },
    { label: "cancelada", value: "cancelada" },
    { label: "Em andamento", value: "andamento" },
    { label: "concluida", value: "concluida" }
  ];
  const initialValues = {
    descricao: "",
    responsavel: "",
    description: "",
    status: "pendente",
    valor: Number(),
    date: new Date(),
    observacao: "",
    numero: Number()
  };
  const dispatch = useDispatch();

  const responsavel = [
    { label: "Danilo", value: "Danilo" },
    { label: "Jilmar", value: "Jilmar" },
    { label: "Bruno", value: "Bruno" },
    { label: "Aroldo", value: "Aroldo" }
  ];
  const statusInicial = [{ label: "pendente", value: "pendente" }];
  console.log(statusInicial[0]);

  const myIcon = (
    <button className="p-dialog-titlebar-icon p-link">
      <span className="pi pi-search">2</span>
    </button>
  );

  function AdicionarOS(values) {
    dispatch(adicionarOsAction(values));
  }

  return (
    <>
      <Dialog
        // footer={footer}
        // iconsTemplate={myIcon}
        header="Adicionar Nova OS"
        visible={visible}
        style={{ width: "50vw" }}
        modal={true}
        onHide={onHide}
      >
        <Formik onSubmit={AdicionarOS} initialValues={initialValues}>
          {(props, error, value, field) => (
            <div>
              <div className="p-grid" style={{ marginTop: "50px" }}>
                <div className="p-col">
                  <label>Descrição:</label>
                  <input
                    className="p-inputtext p-component"
                    name="descricao"
                    value={props.values.descricao}
                    onChange={props.handleChange}
                    placeholder="Descrição da Os"
                    onBlur={props.handleBlur}
                  />
                </div>
              </div>
              <div className="p-grid">
                <div className="p-col">
                  <label>Número da Os:</label>
                  <input
                    className="p-inputtext p-component"
                    name="numero"
                    value={props.values.numero}
                    onChange={props.handleChange}
                    placeholder="Número da Os"
                    error={props.errors.numero}
                    touched={console.log(props)}
                  />
                </div>
                <div className="p-col">
                  <label>Responsável:</label>
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
                  <label>Técnico:</label>
                  <input
                    className="p-inputtext p-component"
                    name="tecnico"
                    value={props.values.description}
                    onChange={props.handleChange}
                    placeholder="Técnico"
                  />
                </div>
                <div className="p-col">
                  <label>Status:</label>
                  <Dropdown
                    name="status"
                    value={props.values.status}
                    options={statusArray}
                    onChange={props.handleChange}
                    error={console.log(value, field)}
                  />
                </div>
              </div>
              <div className="p-grid">
                <div className="p-col">
                  <label>Valor da Os:</label>
                  <input
                    className="p-inputtext p-component"
                    name="valor"
                    value={props.values.valor}
                    onChange={props.handleChange}
                  />
                </div>
                <div className="p-col">
                  <label>Data da os:</label>
                  <Calendar
                    name="date"
                    value={props.values.date}
                    onChange={props.handleChange}
                    dateFormat="dd/mm/yy"
                  />
                </div>
              </div>
              <div className="p-grid" style={{ marginBottom: "50px" }}>
                <div className="p-col">
                  <label>Observação:</label>
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
              <div
                className="p-grid"
                style={{
                  marginBottom: "50px",
                  textAlign: "center",
                  alignItems: "center"
                }}
              >
                <div className="p-col">
                  <Button
                    label="Sair"
                    className="p-button-danger"
                    icon="pi pi-times"
                    onClick={onHide}
                  />
                </div>
                <div className="p-col">
                  <Button
                    label="Adicionar Os"
                    className="p-button-success"
                    icon="pi pi-check"
                    type="submit"
                    onClick={props.handleSubmit}
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
