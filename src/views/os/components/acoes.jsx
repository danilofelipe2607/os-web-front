import React from "react";
import Swal from "sweetalert2";
import ButtonDownload from "./teste";

export const ImpressaoAcao = () => {
  return Swal.fire({
    icon: "question",
    title: `Realment deseja Imprimir?`,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: "Imprimir",
    cancelButtonText: "não"
  }).then(result => {
    if (result.value === true) {
      return <ButtonDownload />;
    }
  });
};
