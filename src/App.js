import React from "react";
import DefaultLayout from "../src/layout/defaultLayout/index";
import AdminLayout from "../src/layout/adminLayout/index";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <AdminLayout />
      </ScrollToTop>
    </HashRouter>
  );
}
