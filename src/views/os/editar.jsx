import React  from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { adicionarOsAction } from "../../actions/osAction";
import ButtonDownload from "./components/print";

export default function EditarOS({ itemEdit, EditVisible, hideEditarOs }) {

  
  const dispatch = useDispatch();

  const initialValues = {
    descricao: itemEdit.descricao,
    numero: itemEdit.numero,
    responsavel: itemEdit.responsavel,
    description: itemEdit.description,
    status: itemEdit.status,
    valor: itemEdit.valor,
    date: itemEdit.date,
    observacao: itemEdit.observacao
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
              <div className="p-grid" style={{ marginTop: "10px" }}>
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
                    value={props.values.numero}
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
              <div className="p-grid" style={{ marginBottom: "15px" }}>
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
              <div className="p-grid" style={{ marginBottom: "15px" }}>
                <div className="p-col">
                  <ButtonDownload itemEdit={itemEdit} />
                </div>
              </div>
              <div className="p-grid" style={{ marginBottom: "15px" }}>
                <div className="p-col">
                  <Button
                    label="Sair"
                    className="p-button-danger"
                    icon="pi pi-times"
                    onClick={hideEditarOs}
                  />
                </div>
                <div className="p-col">
                  <Button
                    label="Editar Os"
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
