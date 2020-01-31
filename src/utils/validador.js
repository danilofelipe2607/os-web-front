import * as Yup from "yup";

export const loginValidator = Yup.object().shape({
  email: Yup.string()
    .email("Informe um e-mail válido.")
    .required("Email Obrigatório."),
  numero: Yup.string().required("Senha Obrigatória.")
});

export const filtroValidator = Yup.object().shape({
  dateInicial: Yup.string().required("Informe uma data válida."),

  dataFinal: Yup.string().required("Informe uma data válida."),
  numero: Yup.number().required("somente número")
});

export const adicionarOsValidador = Yup.object().shape({
  date: Yup.string().required("Informe uma data válida."),

  descricao: Yup.string().required("Informe uma descrição"),
  status: Yup.string().required("Informe um Status."),
  numero: Yup.number().required("Número Obrigatório")
});

export const registerValidator = Yup.object().shape({
  usuario: Yup.string()
    .required("Usuário Obrigatório.")
    .min(7, "Mínimo 7 caractéres.")
    .max(20, "Máximo de 20 caractéres."),
  email: Yup.string()
    .email("Informe um e-mail válido.")
    .required("Email Obrigatório."),
  senha: Yup.string()
    .min(7, "Mínimo 7 caractéres.")
    .max(20, "Máximo de 20 caractéres.")
    .required("Senha Obrigatória."),
  rSenha: Yup.string()
    .min(7, "Mínimo 7 caractéres.")
    .max(20, "Máximo de 20 caractéres.")
    .required("Confirmação de Senha Obrigatória.")
});
