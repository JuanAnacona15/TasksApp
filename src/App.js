import React from "react";
import { AddTask } from "./components/AddTask";
import { Menu } from "./components/Menu.jsx";

export function App() {
  return (
    <div id="app" className="col">
      <div className="row">
        <div className="col">
          <AddTask></AddTask>
        </div>
        <div className="col">
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
}
