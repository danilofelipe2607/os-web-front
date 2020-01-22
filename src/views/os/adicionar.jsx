import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, useFormik } from "formik";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { adicionarOsAction } from "../../actions/osAction";

export default function AdicionarOS({ toggle, visible, onHide }) {
  const initialValues = {
    descricao: ""
  };
  const dispatch = useDispatch();

  const citySelectItems = [
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" }
  ];

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
          {props => (
            <form onSubmit={props.handleSubmit}>
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
                    onChange={props.handleChange}
                    placeholder="Número da Os"
                  />
                </div>
                <div className="p-col">
                  <Dropdown
                    name="responsavel"
                    value={props.values.responsavel}
                    options={citySelectItems}
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
                    value={props.values.numeroOs}
                    onChange={props.handleChange}
                    placeholder="Descrição"
                  />
                </div>
                <div className="p-col">
                  <Dropdown
                    name="status"
                    value={props.values.responsavel}
                    options={citySelectItems}
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
                  <Calendar
                    name="date"
                    value={props.values.date}
                    onChange={props.handleChange}
                    placeholder="Data da os"
                  />
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
                  />
                </div>
                <div className="p-col">
                  <Button
                    label="Sair"
                    className="p-button-danger"
                    icon="pi pi-times"
                    onClick={onHide}
                  />
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Dialog>
    </>
  );
}
