import React from "react";
import DefaultLayout from "../src/layout/defaultLayout/index";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <DefaultLayout />
      </ScrollToTop>
    </HashRouter>
  );
}
