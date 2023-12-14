import React from "react";
//Import firebase
import { ref, set, push } from "firebase/database";
//Import component for upload data in database
import { FormUploadTask } from "./FormUploadTask";
//Import database object
export function AddTask() {
  return <FormUploadTask></FormUploadTask>;
}
