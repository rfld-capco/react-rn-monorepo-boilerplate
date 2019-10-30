import React from "react";
import NavComponent from "../components/navbar/index";
import Main from "./Main";

export default ({ children }) => {
  return (
    <div className="container">
      <NavComponent />
      <Main />
    </div>
  );
};
