import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: "Por favor, preencha um email válido.",
  },
};

const UseForm = (typeForm) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  }

  function validate(value) {
    if (typeForm === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[typeForm] && !types[typeForm].regex.test(value)) {
      setError(types[typeForm].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default UseForm;
