// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initialValues) => {
  const [inputValues, setInputValues] = useState(initialValues);

  const handleChanges = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return [inputValues, handleChanges];
};
