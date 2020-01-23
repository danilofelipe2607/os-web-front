import React from "react";
import styled from "styled-components";
import Table from "./components/table";
import { format, parseISO } from "date-fns";
import { Button } from "reactstrap";

function Grid({ data }) {
  const dataOs = data.map(item => {
    return {
      ...item,
      date: item.date != null ? format(parseISO(item.date), "dd/MM/yyyy") : null
    };
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "Lista de Orçamentos de Serviços",
        columns: [
          { Header: "Número OS", accessor: "numero" },
          { Header: "Data", accessor: "date" },
          { Header: "Responsável", accessor: "responsavel" },
          { Header: "Status", accessor: "status" },
          {
            Header: "Ação",
            accessor: "teste",
            Cell: ({ cell }) => {
              return (
                <div>
                  <Button id="id">Editar</Button>
                </div>
              );
            }
          }
        ]
      }
    ],
    []
  );

  return <Table columns={columns} data={dataOs} />;
}

export default Grid;
