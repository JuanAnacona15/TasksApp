//Import librarys
import React from "react";
import ReactDOM from "react-dom/client";
//>Import components
import { App } from "./App";
import firebaseService from "./config/firebaseClass";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App></App>);
