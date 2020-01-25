import React from "react";
import styled from "styled-components";
import Table from "./components/table";
import { format, parseISO } from "date-fns";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { deleteOs } from "../../actions/osAction";

export default function Grid({ data }) {
  const dispatch = useDispatch();

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
        { Header: "Data", accessor: "date" },
        { Header: "Responsável", accessor: "responsavel" },
        {
          Header: "Status",
          accessor: "status"
        },
        {
          Header: "Ação",
          accessor: "teste",
          Cell: ({ cell }) => {
            return (
              <>
                <Button
                  icon="pi pi-search"
                  className="p-button-warning"
                  style={{ marginRight: "10px " }}
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

  return <Table columns={columns} data={dataOs} />;
}
