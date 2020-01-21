import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import { Paginator } from "primereact/paginator";

import makeData from "./components/makeData";

const Styles = styled.div`
  padding: 1rem;
  table {
    font-weight: bold;
    border-spacing: 2;
    width: 950px;
    border: 2px solid black;
    background: white;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 2px solid black;
      border-right: 2px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Grid() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Lista de Orçamentos de Serviços",
        columns: [
          { Header: "Número OS", accessor: "age" },
          { Header: "Data", accessor: "age" },
          { Header: "Responsável", accessor: "age" },
          { Header: "Status", accessor: "age" },
          { Header: "Impressão", accessor: "age" }
        ]
      }
    ],
    []
  );

  const data = React.useMemo(() => makeData(10), []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default Grid;
