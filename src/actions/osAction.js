import Swal from "sweetalert2";
import hash from "react-router-history";

import api from "../utils/api";
import * as a from "../utils/actionTypes";
import { Button } from "reactstrap";

const { hashHistory } = hash;

export const adicionarOsAction = values => async dispatch => {
  try {
    const {
      descricao,
      numero,
      responsavel,
      valor,
      type,
      description,
      date,
      status,
      url,
      observacao,
      search
    } = values;

    const data = {
      descricao,
      numero,
      responsavel,
      valor,
      type,
      description,
      date,
      status,
      url,
      observacao,
      search
    };
    const response = await api.post("/os", data);

    if (response) {
      //dispatch({ type: a.LOGIN_SET_SUCESS, payload: data.token });

      Swal.fire({
        icon: "success",
        title: `Adicionar com sucesso!`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "Imprimir!",
        cancelButtonText: "não"
      }).then(result => {
        if (result.value === true) {
          //impressão
        }
      });

      hashHistory.push("/os");
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