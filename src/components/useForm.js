import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    // console.log("values", values);
    const { name, value } = e.target;
    // console.log("name, value", name, value);
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const handleInputNumberChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value.replace(/^0+/, ""),
    });
    if (validateOnChange) validate({ [name]: value.replace(/^0+/, "") });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  const setSpecificValue = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    setSpecificValue,
    errors,
    setErrors,
    handleInputChange,
    handleInputNumberChange,
    resetForm,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up("lg")]: {
        marginBottom: 16,
      },
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
