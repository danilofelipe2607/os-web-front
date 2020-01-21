import axios from "axios";
import Swal from "sweetalert2";
import hash from "react-router-history";

import Api from "../utils/api";
import * as types from "../utils/actionTypes";

const { hashHistory } = hash;

export const realizarLoginAction = values => async dispatch => {
  try {
    const { email, senha } = values;

    const { data } = await axios.get(`${Api}users/login/${email}/${senha}`);
    if (data.auth) {
      dispatch({
        type: types.LOGIN_SET_EMAIL_SENHA,
        payload: { email, senha }
      });
      Swal.fire({
        icon: "success",
        title: "Logado com sucesso!",
        showConfirmButton: false,
        timer: 750
      });
      localStorage.setItem("Authorization", data.token);
      hashHistory.push("/dashboard");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuário ou senha inválidos!"
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
