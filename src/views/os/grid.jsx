import React, { useState } from "react";
import Table from "./components/table";
import { format, parseISO } from "date-fns";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { deleteOs } from "../../actions/osAction";
import EditarOS from "./editar";
import ButtonDownload from "./components/print";
import Swal from "sweetalert2";
import { Message } from "primereact/message";
// import ImpressaoAcao from "./components/acoes";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink
} from "@react-pdf/renderer";
import testeimp from "./components/print";

export default function Grid({ data }) {
  const dispatch = useDispatch();

  const [itemEdit, setItemEdit] = useState(null);
  const [count, setCount] = useState(false);

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
    Swal.fire({
      icon: "question",
      title: `Realmente deseja deletar?`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Deletar",
      cancelButtonText: "não"
    }).then(result => {
      if (result.value === true) {
        dispatch(deleteOs(values));
      }
    });
  }

  const columns = React.useMemo(() => [
    {
      Header: "Lista de Os",
      columns: [
        { Header: "Número", accessor: "numero" },
        { Header: "Descrição", accessor: "descricao" },
        { Header: "Valor", accessor: "valor" },

        {
          Header: "Status",
          accessor: "status",
          Cell: ({ cell }) => {
            if (cell.row.values.status === "pendente") {
              return (
                <>
                  <Message severity="info" text="Pendente"></Message>
                </>
              );
            }
            if (cell.row.values.status === "andamento") {
              return (
                <>
                  <Message severity="warn" text="Andamento" />
                </>
              );
            }

            if (cell.row.values.status === "concluida") {
              return (
                <>
                  <Message severity="success" text="Concluida" />
                </>
              );
            }
            if (cell.row.values.status === "cancelada") {
              return (
                <>
                  <Message severity="error" text="Cancelada" />
                </>
              );
            }
          }
        },
        { Header: "Data", accessor: "date" },
        { Header: "Responsável", accessor: "responsavel" },
        { Header: "Técnico", accessor: "tecnico" },
        {
          Header: "Ação",
          accessor: "teste",
          Cell: ({ cell }) => {
            return (
              <>
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
