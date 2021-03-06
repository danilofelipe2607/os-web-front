import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image
} from "@react-pdf/renderer";
import { Button } from "primereact/button";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white"
  },
  section: {
    margin: 10,
    justifyContent: "left",
    flexGrow: 1
  },
  header: {
    justifyContent: "left",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderHeight: "20%"
  },
  content: {
    justifyContent: "center",
    marginTop: "1%",
    borderWidth: 1,
    borderColor: "black",
    borderHeight: "20%"
  },
  footer: {
    marginTop: "3%",
    justifyContent: "center"
  }
});

const ButtonDownload = cell => {
  const MyDoc = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.header}>
              <Text>Empresa:</Text>
              <Text>Endereço:</Text>
            </View>
            <View style={styles.content}>
              <Text>ORDEM DE SERVIÇO Nº"TESTE" DATA:"TESTE"</Text>
            </View>
            <View style={styles.content}>
              <Text style={{ size: "12px" }}>DADOS DO CLIENTE:</Text>
              <Text>Cliente:_________________________Cpf:______________</Text>
              <Text>End:_______________________________________</Text>
            </View>

            <View style={styles.content}>
              <Text style={{ marginBottom: "2%" }}>
                Laudo:______________________________________________
                ____________________________________________________
                ____________________________________________________
              </Text>
            </View>
            <View style={styles.footer}>
              <Text> _______________{"              "} ________________</Text>
              <Text>
                {"      "} TECNICO {"                               "}
                RESPONSAVEL
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );
  };

  return (
    <>
      <PDFDownloadLink document={<MyDoc />} fileName="teste.pdf">
        <Button
          icon="pi pi-print"
          label="Imprimir Os"
          className="p-button-print"
        />
      </PDFDownloadLink>
    </>
  );
};
export default React.memo(ButtonDownload);
