import React from "react";

const Task = ({ titleTask, description, deliveryDay }) => (
  //This function return a component for show tasks
  <div className="task card">
    <div className="card-body">
      <h3 className="card-title">{titleTask}</h3>
      <p className="card-text">{description}</p>
      <p className="card-subtitle">{deliveryDay}</p>
    </div>
  </div>
);

export { Task };

