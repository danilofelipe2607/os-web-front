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
    const dataFormatada = new Date(values.Date);
    const data = {
      ...values,
      dataFormatada
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

export const setEstadoModalInicial = () => ({
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
    console.log(values, "vlaue");
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
      console.log(data);
      Swal.fire({
        icon: "success",
        title: `Deletado com sucesso!`
      });
      hashHistory.push("/os");
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
    console.log("itemmmmmmmmmmmmmmmmmmmmmm", item);
    const {
      descricao,
      numero,
      responsavel,
      valor,
      type,
      description,
      status,
      tecnico,
      url,
      observacao,
      search
    } = item;
    const dataFormatada = new Date(item.date);

    const itemEditado = {
      descricao,
      numero,
      responsavel,
      valor,
      type,
      description,
      dataFormatada,
      status,
      tecnico,
      url,
      observacao,
      search
    };
    console.log(itemEditado);
    const { data } = await api.put(`/os/${item.id}`, itemEditado);
    if (data) {
      dispatch(setDadosOS(data));
      Swal.fire({
        icon: "success",
        title: `Editado com sucesso!`,
        timer: 1000
      });

      window.location.reload();
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
