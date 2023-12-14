import React from "react";
import { useState } from "react";
import firebaseService from "../config/firebaseClass";

export function FormUploadTask() {
  /* This function returns a functional form for upload tasks in database*/

  //Default values of the form
  const defaultValues = {
    titleTask: "",
    deliveryDay: "",
    description: "",
    assignature: "",
  };
  const [values, setValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    /*This funnction update the values depending of the input id*/
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const handleSubmith = (e) => {
    e.preventDefault();
    // Collect the alls data the input -----------
    const formElements = e.target.elements;
    const formValues = {};
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.id) {
        formValues[element.id] = element.value;
      }
    } //-------------------------------------------

    //Evaluate if there is empy data
    const isEmpty = areValuesEmpty(defaultValues);
    if (isEmpty) {
      setValues(formValues);
      firebaseService.set(
        `tasks/${formValues.assignature}/${formValues.titleTask}`,
        formValues
      );
      setValues(defaultValues);
    } else {
      alert("Fill out all the fields of the form");
    }
  };

  const areValuesEmpty = (values) => {
    //This function evaluate if there is empy data
    for (const key in values) {
      if (!values[key]) {
        return true; // Returns true if there is empy data
      }
    }
    return false; // Returns true if no there is empirical data
  };

  return (
    <form className="form-group w-75" onSubmit={handleSubmith}>
      <h1 className="mb-3">Upload Task</h1>

      <div className="mb-3">
        <label htmlFor="titleTask" className="form-label">
          Title for Task
        </label>
        <input
          type="text"
          id="titleTask"
          className="form-control"
          placeholder="Simple Title"
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="deadline" className="form-label">
          Delivery Day
        </label>
        <input
          type="date"
          id="deliveryDay"
          className="form-control"
          placeholder="Title the Task"
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          className="form-control"
          rows="4"
          placeholder="Enter task description"
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="assignature" className="form-label">
          Assignature
        </label>
        <select
          id="assignature"
          className="form-select"
          onChange={handleInputChange}
        >
          <option id="EconomiaOption" value="Economia">
            Economia
          </option>
          <option id="FilosofiaOption" value="Filosofia">
            Filosofia
          </option>
          <option id="TrigonometriaOption" value="Trigonometria">
            Trigonometria
          </option>
          <option id="QuimicaOption" value="Quimica">
            Quimica
          </option>
          <option id="FisicaOption" value="Fisica">
            Fisica
          </option>
          <option id="TallerOption" value="Taller">
            Taller
          </option>
          <option id="EspanolOption" value="Espanol">
            Español
          </option>
          <option id="InglesOption" value="Ingles">
            Ingles
          </option>
          <option id="EstadisticaOption" value="Estadistica">
            Estadistica
          </option>
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        Upload
      </button>
    </form>
  );
}
