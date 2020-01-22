import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Button } from "primereact/button";
import logo from "../../assets/img/logo.png";
import "../../layout/adminLayout/style.css";
import { realizarLoginAction } from "../../actions/loginAction";

export default function AdminIndex() {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    senha: ""
  };
  const logar = values => {
    dispatch(realizarLoginAction(values));
  };
  return (
    <div className="box">
      <div className="login-body">
        <div className="login-panel p-fluid">
          <div className="login-panel-header" style={{ textAlign: "center" }}>
            <img src={logo} style={{ width: "80px", height: "70px" }} />
          </div>
          <div className="login-panel-content">
            <Formik initialValues={initialValues} onSubmit={logar}>
              {props => (
                <form onSubmit={props.handleSubmit}>
                  <div className="p-grid">
                    <div className="p-col-12" style={{ textAlign: "center" }}>
                      <h1>OS-Web</h1>
                    </div>

                    <div className="p-col-12" style={{ textAlign: "center" }}>
                      <span className="md-inputfield">
                        <input
                          className="p-inputtext p-component"
                          name="email"
                          value={props.values.email}
                          onChange={props.handleChange}
                        />
                        <label>Email</label>
                      </span>
                    </div>
                    <div className="p-col-12" style={{ textAlign: "center" }}>
                      <span className="md-inputfield">
                        <input
                          className="p-inputtext p-component"
                          name="senha"
                          value={props.values.senha}
                          onChange={props.handleChange}
                        />
                        <label>Senha</label>
                      </span>
                    </div>
                    <div className="p-col-12">
                      <Button
                        className="p-button-warning"
                        label="Entrar"
                        type="submit"
                      />
                    </div>
                    <div className="p-col-12">
                      Não possui Conta? <a href="/#">Cadastre-se</a>.
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
