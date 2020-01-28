import React, { useState } from "react";
import styled from "styled-components";
import Table from "./components/table";
import { format, parseISO } from "date-fns";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { deleteOs } from "../../actions/osAction";
import { ProgressSpinner } from "primereact/progressspinner";
import EditarOS from "./editar";
import { Badge } from "reactstrap";

export default function Grid({ data }) {
  const dispatch = useDispatch();

  const [EditVisible, setEditVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [itemEdit, setItemEdit] = useState(null);

  async function editarOS(values) {
    setItemEdit(values);
  }

  function hideEditarOs() {
    setItemEdit(null);
  }

  const dataOs = data.map(item => {
    return {
      ...item,
      date: item.date != null ? format(parseISO(item.date), "dd/MM/yyyy") : null
    };
  });

  function deleteItem(values) {
    dispatch(deleteOs(values));
  }
  const columns = React.useMemo(() => [
    {
      Header: "Lista de Os",
      columns: [
        { Header: "Número", accessor: "numero" },
        { Header: "Descrição", accessor: "descricao" },
        { Header: "Valor", accessor: "valor" },
        { Header: "Data", accessor: "date" },
        { Header: "Responsável", accessor: "responsavel" },
        {
          Header: "Status",
          accessor: "status",
          Cell: ({ cell }) => {
            if (cell.row.values.status === "pendente") {
              return (
                <>
                  <Button
                    label="pendente"
                    className=" p-button-warning"
                    style={{
                      borderRadius: "10px",
                      width: "100px",
                      height: "30px",
                      textAlign: "left"
                    }}
                  />
                </>
              );
            }
            if (cell.row.values.status === "andamento") {
              return (
                <>
                  <Button
                    label="andamento"
                    style={{
                      borderRadius: "10px",
                      width: "100px",
                      height: "30px",
                      textAlign: "center"
                    }}
                  />
                </>
              );
            }

            if (cell.row.values.status === "concluida") {
              return (
                <>
                  <Button
                    label="concluida"
                    className="p-button-success"
                    style={{
                      borderRadius: "10px",
                      width: "100px",
                      height: "30px",
                      textAlign: "center"
                    }}
                  />
                </>
              );
            }
            if (cell.row.values.status === "cancelada") {
              return (
                <>
                  <Button
                    label="cancelada"
                    className="p-button-danger"
                    style={{
                      borderRadius: "10px",
                      width: "100px",
                      height: "30px",
                      textAlign: "center"
                    }}
                  />
                </>
              );
            }
          }
        },
        {
          Header: "Ação",
          accessor: "teste",
          Cell: ({ cell }) => {
            return (
              <>
                <Button
                  icon="pi pi-check"
                  className="p-button-success"
                  style={{ marginRight: "10px " }}
                />
                <Button icon="pi pi-print" style={{ marginRight: "10px " }} />

                <Button
                  icon="pi pi-search"
                  className="p-button-warning"
                  style={{ marginRight: "10px " }}
                  onClick={() => editarOS(cell.row.values)}
                />
                <Button
                  icon="pi pi-times"
                  className="p-button-danger"
                  onClick={() => deleteItem(cell.row.values)}
                />
              </>
            );
          }
        }
      ]
    }
  ]);
  return (
    <>
      <Table columns={columns} data={dataOs} />
      {itemEdit && <EditarOS itemEdit={itemEdit} hideEditarOs={hideEditarOs} />}
    </>
  );
}
