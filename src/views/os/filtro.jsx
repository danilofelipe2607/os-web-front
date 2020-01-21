import React, { useState } from "react";
import { Button } from "primereact/button";
import { Formik } from "formik";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

export default function Filtro() {
  const citySelectItems = [
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" }
  ];
  return (
    <>
      <Formik>
        {props => (
          <form>
            <div className="p-grid p-align-center">
              <div className="p-col-3">
                <label>Número da OS</label>
                <span>
                  <InputText
                    id="in"
                    value={[]}
                    onChange={e => this.setState({ value: e.target.value })}
                  />
                </span>
              </div>

              <div className="p-col-3">
                <label htmlFor="in">Data Final da OS</label>
                <span>
                  <Calendar
                    value={[]}
                    onChange={e => this.setState({ date: e.value })}
                  ></Calendar>
                </span>
              </div>
              <div className="p-col-3">
                <label htmlFor="in">Data Inicial da OS</label>
                <span>
                  <Calendar
                    value={[]}
                    onChange={e => this.setState({ date: e.value })}
                  ></Calendar>
                </span>
              </div>
            </div>
            <div className="p-grid p-align-center">
              <div className="p-col-3">
                <label htmlFor="in">Responsável pela OS</label>
                <span>
                  <InputText
                    id="in"
                    value={[]}
                    onChange={e => this.setState({ value: e.target.value })}
                  />
                </span>
              </div>
              <div className="p-col-3">
                <label htmlFor="in">Status da OS</label>
                <Dropdown
                  value={[]}
                  options={citySelectItems}
                  onChange={e => {
                    this.setState({ city: e.value });
                  }}
                  placeholder="Status da OS"
                />
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px"
              }}
            >
              <div className="p-col-12">
                <Button
                  className="p-button-info"
                  label="Buscar"
                  type="submit"
                  style={{ width: "170px" }}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
