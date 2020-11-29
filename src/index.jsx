import React from "react";
import ReactDOM from "react-dom";

import Router from "./Router";

import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";

ReactDOM.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
    document.getElementById("root")
);
