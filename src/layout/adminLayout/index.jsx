import React from "react";

import { Button } from "primereact/button";
import logo from "../../assets/img/logo.png";

import "./style.css";
export default function AdminLayout() {
  return (
    <div className="container">
      <div className="box">
        <div className="login-body">
          <div className="login-panel p-fluid">
            <div className="login-panel-header" style={{ textAlign: "center" }}>
              <img src={logo} style={{ width: "80px", height: "70px" }} />
            </div>
            <div className="login-panel-content">
              <div className="p-grid">
                <div className="p-col-12" style={{ textAlign: "center" }}>
                  <h1>OS-Web</h1>
                </div>
                <div className="p-col-12" style={{ textAlign: "center" }}>
                  <span className="md-inputfield">
                    <input className="p-inputtext p-component" />
                    <label>Email</label>
                  </span>
                </div>
                <div className="p-col-12" style={{ textAlign: "center" }}>
                  <span className="md-inputfield">
                    <input className="p-inputtext p-component" />
                    <label>Senha</label>
                  </span>
                </div>
                <div className="p-col-12">
                  <Button className="p-button-warning" label="Entrar" />
                </div>
                <div className="p-col-12">
                  Não possui Conta? <a href="/#">Cadastre-se</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
