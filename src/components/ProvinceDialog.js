import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, Button } from "@material-ui/core";

import { useForm, Form } from "./useForm";
import Controls from "./controls/Controls";
import { api } from "../services";
import { successDialog, failedDialog } from "../utils/dialog";

const initialFValues = {
  provinceName: "",
  provinceCode: "",
};

const useStyles = makeStyles((theme) => ({
  dialog: {
    minWidth: "320px",
    width: "50%",
    padding: 20,
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: 0,
    padding: ".8em 1em",
    color: "#595959",
    fontSize: "1.875em",
    fontWeight: 600,
    textAlign: "center",
    textTransform: "none",
    wordWrap: "break-word",
  },
  buttonContainer: {
    paddingTop: ".8em",
  },
}));

const ProvinceDialog = (props) => {
  const classes = useStyles();

  const {
    onClose,
    value: valueProp,
    open,
    setIsLoading,
    fetchdata,
    province,
    type,
    ...other
  } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("provinceName" in fieldValues) {
      temp.provinceName =
        fieldValues.provinceName && fieldValues.provinceName.trimStart()
          ? ""
          : "This name field is required.";
    }

    if ("provinceCode" in fieldValues) {
      temp.provinceCode = fieldValues.provinceCode
        ? ""
        : "This code field is required.";
    }

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    // resetForm
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      const option = {
        method: type === "edit" ? "put" : "post",
        url: `${process.env.REACT_APP_API}/cities${
          type === "edit" ? `/${province.id}` : ""
        }`,
        data: {
          code: values.provinceCode,
          name: values.provinceName,
        },
      };
      console.log("option = ", option);
      api(option)
        .then((res) => {
          setIsLoading(false);
          onClose(false);
          successDialog(
            "province",
            values.provinceName,
            type === "edit" ? "edit" : "creat"
          ).then((result) => {
            if (result.isConfirmed) {
              fetchdata();
            }
          });
        })
        .catch((err) => {
          console.log("error = ", err);
          console.log("error response = ", err.response);
          setIsLoading(false);
          onClose(false);
          failedDialog(
            "province",
            values.provinceName,
            type === "edit" ? "edit" : "create"
          );
        });
    }
  };

  useEffect(() => {
    console.log("province", province);
    if (type === "edit") {
      setValues({
        provinceName: province.name,
        provinceCode: province.code,
      });
    }
  }, [open]);

  const handleCancel = () => {
    onClose(false);
  };

  return (
    <Dialog
      maxWidth="lg"
      classes={{ paper: classes.dialog }}
      open={open}
      {...other}
    >
      <Form onSubmit={handleSubmit}>
        <div className={classes.formContent}>
          <h2 className={classes.title}>
            {type === "edit" ? "Edit" : "Create New"} Province
          </h2>
          <Controls.Input
            name="provinceName"
            label="Name"
            value={values.provinceName}
            onChange={handleInputChange}
            error={errors.provinceName}
          />
          <Controls.Input
            name="provinceCode"
            label="Code"
            value={values.provinceCode}
            onChange={handleInputChange}
            error={errors.provinceCode}
          />
          <div className={classes.buttonContainer}>
            <Button
              style={{ margin: "5px" }}
              variant="contained"
              disableElevation
              color="secondary"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              style={{ margin: "5px" }}
              variant="contained"
              disableElevation
              type="submit"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </Dialog>
  );
};

export default ProvinceDialog;
