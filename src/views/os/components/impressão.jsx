import React from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import { Button } from "primereact/button";
import jsPDF from "jspdf";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const colstyle = {
  width: "30%"
};
const tableStyle = {
  backgroundColor: "red",
  borderRadius: 20,
  borderWidth: 20,
  borderColor: "black"
};
const Prints = () => (
  <html>
    <div style={{ width: "1800px" }}>
      <div>
        <span>Teste</span>
      </div>
      <div>
        <p>Data do Serviço:______/______/______</p>
      </div>
    </div>
  </html>
);

export const print = () => {
  const string = renderToString(<Prints />);
  const pdf = new jsPDF("p", "mm", "a4");
  pdf.fromHTML(renderToString(<Prints />));
  pdf.save("pdf");
};

const Impressao = () => <button onClick={print}>print</button>;

render(<Impressao />, document.getElementById("root"));
