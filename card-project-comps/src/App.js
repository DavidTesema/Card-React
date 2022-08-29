import React from "react";
import "./comps/ex-one/css/style.css";
import CardContainer from "./comps/ex-one/CardContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="d-flex justify-content-center">
      <div className="app-container">
        <CardContainer />
      </div>
    </div>
  );
}


