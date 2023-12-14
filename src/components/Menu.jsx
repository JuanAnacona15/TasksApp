import React, { useEffect, useState } from "react";
import { Task } from "./Task";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebase";

export function Menu() {
  /*This function returns component with all task in databse */
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    /*This function updates the component when database is updated */
    const tasksRef = ref(db, "tasks/");
    const unsubscribe = onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTasks(data);
      }
    });

    return () => {
      // Clean suscription when component is dismantle
      unsubscribe();
    };
  }, []); // The dependence empy ensures that useEffect excecute just once a monat the component

  return (
    <div>
      {Object.keys(tasks).map((tasksKey) => {
        const tasksData = tasks[tasksKey];
        return Object.keys(tasksData).map((tasksSubKey) => (
          <Task
            key={tasksSubKey}
            titleTask={tasksData[tasksSubKey].titleTask}
            description={tasksData[tasksSubKey].description}
            deliveryDay={tasksData[tasksSubKey].deliveryDay}
          />
        ));
      })}
    </div>
  );
}

