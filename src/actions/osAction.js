import Swal from "sweetalert2";
import hash from "react-router-history";

import { format, parseISO, parse } from "date-fns";
import api from "../utils/api";
import * as a from "../utils/actionTypes";

const { hashHistory } = hash;

export const adicionarOsAction = values => async dispatch => {
  try {
    if (values.numero <= 0) {
      Swal.fire({
        icon: "error",
        text: "Não foi possivel Adicionar uma  OS sem número!."
      });
      return;
    }
    const data = {
      ...values
    };
    const response = await api.post("/os", data);
    if (response) {
      Swal.fire({
        icon: "success",
        title: `Adicionado com sucesso!`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "Imprimir",
        cancelButtonText: "não"
      }).then(result => {
        if (result.value === true) {
          //impressão
        }
      });

      dispatch(setEstadoInicial());
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Não foi possivel Adicionar nova OS!."
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text:
        "Ocorreu um erro ao tentar adicionar a nova os! Tente novamente mais tarde."
    });
  }
};
export const setDadosOS = data => ({
  type: a.GET_SUCESS,
  payload: data
});
export const setEstadoInicial = () => ({
  type: a.INITIAL_STATE
});

export const getOsAction = () => async dispatch => {
  try {
    const { data } = await api.get("/os");
    dispatch(setDadosOS(data));
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text:
        "Ocorreu um erro ao tentar buscar as os! Tente novamente mais tarde."
    });
  }
};

export const getBuscarFiltro = values => async dispatch => {
  try {
    const { data } = await api.post("/osfiltro", values);
    dispatch(setDadosOS(data));
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text:
        "Ocorreu um erro ao tentar buscar as os! Tente novamente mais tarde."
    });
  }
};

export const deleteOs = item => async dispatch => {
  try {
    const id = item.id;
    const { data } = await api.delete(`/os/${id}`);
    if (data) {
      dispatch(setDadosOS(data));
      Swal.fire({
        icon: "success",
        title: `Deletado com sucesso!`
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text:
        "Ocorreu um erro ao tentar buscar as os! Tente novamente mais tarde."
    });
  }
};

export const editAction = item => async dispatch => {
  try {
    console.log(item, "itemmmmmmmmmm");
    const teste = format(item.data, "dd/MM/YYYY HH:mm");
    console.log(teste, "testeteee");
    const { data } = await api.put("/os/", item);
    console.log(data, "resposta");
    if (data) {
      dispatch(setDadosOS(data));
      Swal.fire({
        icon: "success",
        title: `Deletado com sucesso!`
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text:
        "Ocorreu um erro ao tentar buscar as os! Tente novamente mais tarde."
    });
  }
};
