import React from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const colstyle = {
  width: "30%"
};
const tableStyle = {
  width: "100%"
};
const Prints = () => (
  <table
    id="tab_customers"
    class="table table-striped"
    style={{ width: "1800px" }}
  >
    <colgroup>
      <col span="1" style={colstyle} />
      <col span="1" style={colstyle} />
    </colgroup>
    <thead>
      <tr class="warning">
        <th>ORDEM DE SERVIÇO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data do Serviço:______/______/______ </td>
      </tr>
      <tr>
        <td>Data do Serviço:______/______/______ </td>
      </tr>
    </tbody>
  </table>
);

export const print = () => {
  const string = renderToString(<Prints />);
  const pdf = new jsPDF("p", "mm", "a4");
  pdf.fromHTML(string);
  pdf.save("pdf");
};

const Impressao = () => <button onClick={print}>print</button>;

render(<Impressao />, document.getElementById("root"));
