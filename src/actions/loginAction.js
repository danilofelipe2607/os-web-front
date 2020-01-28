import axios from "axios";
import Swal from "sweetalert2";
import hash from "react-router-history";

import api from "../utils/api";
import * as a from "../utils/actionTypes";

const { hashHistory } = hash;

export const realizarLoginAction = values => async dispatch => {
  try {
    const { email, senha } = values;
    console.log(email, senha);
    const { data } = await api.post(`/auth/${email}/${senha}`);
    console.log("data", data);
    if (data.token) {
      dispatch({ type: a.LOGIN_SET_SUCESS, payload: data });
      sessionStorage.setItem("Authorization", data.token);
      hashHistory.push("/dashboard");
      Swal.fire({
        icon: "success",
        title: "Logado com sucesso!",
        showConfirmButton: false,
        timer: 750
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuário não encontrado!."
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text:
        "Ocorreu um erro ao tentar acessar o sistema! Tente novamente mais tarde."
    });
  }
};
