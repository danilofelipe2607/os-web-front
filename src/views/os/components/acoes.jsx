import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ButtonDownload from "./print";
import Teste from "./print";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image
} from "@react-pdf/renderer";

export const ImpressaoAcao = cell => {
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
      console.log("aqui");
      return <ButtonDownload cell={cell} />;
    }
  });
};
