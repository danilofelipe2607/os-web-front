import jwt from "jsonwebtoken";
import hash from "react-router-history";
import Swal from "sweetalert2";
export const TOKEN_KEY = "Authorization";
const { hashHistory } = hash;

export const isAuthenticated = () => {
  const decodedToken = jwt.decode(sessionStorage.getItem(TOKEN_KEY));

  if (decodedToken) {
    if (decodedToken.exp < new Date().getTime()) {
      return true;
    }
    return false;
  }
  return false;
};

export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

export const login = token => {
  sessionStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  Swal.fire({
    icon: "warning",
    title: `Deseja Sair do sistema?`,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    cancelButtonText: "não",
    confirmButtonText: "Sim"
  }).then(result => {
    if (result.value === true) {
      sessionStorage.removeItem(TOKEN_KEY);
      hashHistory.push("/");
    }
  });
};
