import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import sortBy from "lodash/sortBy";
import isEqual from "lodash/isEqual";

import { useForm, Form } from "./useForm";
import Controls from "./controls/Controls";
import { api } from "../services";
import { successDialog, failedDialog } from "../utils/dialog";

const initialFValues = {
  areaName: "",
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
  chips: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const AreaDialog = (props) => {
  const classes = useStyles();
  const {
    type,
    onClose,
    value: valueProp,
    setIsLoading,
    fetchdata,
    area,
    open,
    ...other
  } = props;

  const [data, setData] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("areaName" in fieldValues) {
      temp.areaName =
        fieldValues.areaName && fieldValues.areaName.trimStart()
          ? ""
          : "This name field is required.";
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

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      const option = {
        method: "get",
        url: `${process.env.REACT_APP_API}/cities`,
        params: {
          limit: -1,
          offset: 0,
        },
      };
      console.log("option = ", option);
      api(option)
        .then((res) => {
          setIsLoading(false);
          setData(
            sortBy(
              res.data.data.data.map((i) => ({ code: i.code, name: i.name })),
              ["code"]
            )
          );
          setValues({ areaName: area.area });
          setSelectedProvince(area.cities);
        })
        .catch((err) => {
          console.log("error = ", err);
          console.log("error response = ", err.response);
          setIsLoading(false);
          setData([]);
        });
    };
    fetchData();
  }, []);

  const handleCancel = () => {
    console.log("cancel", selectedProvince);
    onClose(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      const option = {
        method: "put",
        url: `${process.env.REACT_APP_API}/regions`,
        data: {
          area: values.areaName,
          cities: selectedProvince.map((i) => i.code),
        },
      };
      console.log("option = ", option);
      api(option)
        .then((res) => {
          setIsLoading(false);
          onClose(false);
          successDialog(
            "area",
            values.areaName,
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
            "area",
            values.areaName,
            type === "edit" ? "edit" : "create"
          );
        });
    }
  };

  const handleChangeProvince = (e, value) => {
    setSelectedProvince(value);
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
            {type === "create" ? "Create New" : "Edit"} Area
          </h2>
          <Controls.Input
            name="areaName"
            label="Name"
            value={values.areaName}
            onChange={handleInputChange}
            error={errors.areaName}
          />
          <Autocomplete
            multiple
            limitTags={3}
            options={data}
            getOptionLabel={(option) => option.code}
            getOptionSelected={(option, value) => {
              return isEqual(value, option);
            }}
            ChipProps={{
              variant: "outlined",
            }}
            style={{
              width: "100%",
            }}
            onChange={handleChangeProvince}
            renderInput={(params) => (
              <TextField
                fullWidth
                {...params}
                variant="outlined"
                label="Province"
                placeholder="Province"
              />
            )}
            value={selectedProvince}
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

export default AreaDialog;
