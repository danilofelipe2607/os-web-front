import React, { useState } from "react";
import Table from "./components/table";
import { format, parseISO } from "date-fns";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { deleteOs } from "../../actions/osAction";
import EditarOS from "./editar";

export default function Grid({ data }) {
  const dispatch = useDispatch();

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
        { Header: "Técnico", accessor: "tecnico" },
        {
          Header: "Status",
          accessor: "status",
          Cell: ({ cell }) => {
            if (cell.row.values.status === "pendente") {
              return (
                <>
                  <span style={{ fontWeight: "bold", color: "yellow" }}>
                    Pendente
                  </span>
                </>
              );
            }
            if (cell.row.values.status === "andamento") {
              return (
                <>
                  <span style={{ fontWeight: "bold", color: "blue" }}>
                    Andamento
                  </span>
                </>
              );
            }

            if (cell.row.values.status === "concluida") {
              return (
                <>
                  <span style={{ fontWeight: "bold", color: "green" }}>
                    Concluida
                  </span>
                </>
              );
            }
            if (cell.row.values.status === "cancelada") {
              return (
                <>
                  <span style={{ fontWeight: "bold", color: "red" }}>
                    Cancelada
                  </span>
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
                  style={{
                    marginRight: "10px ",
                    height: "25px",
                    width: "25px"
                  }}
                />
                <Button
                  icon="pi pi-print"
                  style={{
                    marginRight: "10px ",
                    height: "25px",
                    width: "25px"
                  }}
                />

                <Button
                  icon="pi pi-search"
                  className="p-button-warning"
                  style={{
                    marginRight: "10px ",
                    height: "25px",
                    width: "25px"
                  }}
                  onClick={() => editarOS(cell.row.values)}
                />
                <Button
                  icon="pi pi-times"
                  className="p-button-danger"
                  onClick={() => deleteItem(cell.row.values)}
                  style={{
                    marginRight: "10px ",
                    height: "25px",
                    width: "25px"
                  }}
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
