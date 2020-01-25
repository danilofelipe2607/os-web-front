import React, { useState, useEffect } from "react";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { getOsAction } from "../../actions/osAction";
import { ProgressBar } from "primereact/progressbar";

export default function DashboardIndex() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function load() {
      dispatch(getOsAction());
    }
    load();
  }, []);
  const data = useSelector(state => state.OsReducer.data);
  console.log(data);
  const totalOsAberta = data.filter(c => c.status === "pendente").length;
  const totalOsAndamento = data.filter(c => c.status === "andamento").length;
  const totalOsFinalizadas = data.filter(c => c.status === "concluida").length;

  console.log("teds", totalOsFinalizadas);
  return (
    <div className="p-grid p-fluid dashboard">
      <div className="p-col-12 p-lg-4">
        <div className="card summary">
          <span className="title">OS</span>
          <span className="detail">Número de os abertas</span>
          <span className="count visitors">{totalOsAberta}</span>
        </div>
      </div>
      <div className="p-col-12 p-lg-4">
        <div className="card summary">
          <span className="title">OS</span>
          <span className="detail">Número de os em andamento</span>
          <span className="count purchases">{totalOsAndamento}</span>
        </div>
      </div>
      <div className="p-col-12 p-lg-4">
        <div className="card summary">
          <span className="title">OS</span>
          <span className="detail">Número de os concluídas</span>
          <span className="count revenue">{totalOsFinalizadas}</span>
        </div>
      </div>
      {/* 
      <div className="p-col-12 p-lg-6" style={{ width: "645px" }}>
        <div className="card">
          <h1 style={{ fontSize: "16px" }}>Orçamentos Recentes</h1>
          <DataTable
            value={[]}
            style={{ marginBottom: "20px" }}
            responsive={true}
            selectionMode="single"
            selection={[]}
            onSelectionChange={e => this.setState({ selectedCar: e.value })}
          >
            <Column field="vin" header="Vin" sortable={true} />
            <Column field="year" header="Year" sortable={true} />
            <Column field="brand" header="Brand" sortable={true} />
            <Column field="color" header="Color" sortable={true} />
          </DataTable>
        </div>
      </div>

      <div className="p-col-12 p-lg-4" style={{ width: "430px" }}>
        <Panel
          header="Últimas Atividades"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="activity-header">
            <div className="p-grid">
              <div className="p-col-6" style={{ textAlign: "right" }}>
                <Button label="Atualizar" icon="pi pi-refresh" />
              </div>
            </div>
          </div>

          <ul className="activity-list">
            <li>
              <div className="count">$900</div>
              <div className="p-grid">
                <div className="p-col-6">
                  <ProgressBar value={[]} />
                </div>
                <div className="p-col-6">95%</div>
              </div>
            </li>
            <li>
              <div className="count" style={{ backgroundColor: "#f9c851" }}>
                $250
              </div>
              <div className="p-grid">
                <div className="p-col-6">Tax</div>
                <div className="p-col-6">24%</div>
              </div>
            </li>
            <li>
              <div className="count" style={{ backgroundColor: "#20d077" }}>
                $125
              </div>
              <div className="p-grid">
                <div className="p-col-6">Invoices</div>
                <div className="p-col-6">55%</div>
              </div>
            </li>
            <li>
              <div className="count" style={{ backgroundColor: "#f9c851" }}>
                $250
              </div>
              <div className="p-grid">
                <div className="p-col-6">Expenses</div>
                <div className="p-col-6">15%</div>
              </div>
            </li>
            <li>
              <div className="count" style={{ backgroundColor: "#007be5" }}>
                $350
              </div>
              <div className="p-grid">
                <div className="p-col-6">Bonus</div>
                <div className="p-col-6">5%</div>
              </div>
            </li>
            <li>
              <div className="count" style={{ backgroundColor: "#ef6262" }}>
                $500
              </div>
              <div className="p-grid">
                <div className="p-col-6">Revenue</div>
                <div className="p-col-6">25%</div>
              </div>
            </li>
          </ul>
        </Panel>
      </div> */}
    </div>
  );
}
