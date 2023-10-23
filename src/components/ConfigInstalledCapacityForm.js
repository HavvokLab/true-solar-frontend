import { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import isEmpty from "lodash/isEmpty";

import { useForm, Form } from "./useForm";
import Controls from "./controls/Controls";
import { DecimalFormatCustom, HourFormatCustom } from "./FormatInput";
import { validateHour, validateEfficiencyFactor } from "../utils/validateForm";
import DataNotFound from "./DataNotFound";

const initialFValues = {};

const ConfigInstalledCapacityForm = (props) => {
  // console.log("props", props);
  const { data, submitformfn, classes } = props;

  const validate = (fieldValues = values) => {
    // console.log("values", values);
    let temp = { ...errors };

    if ("focusHour" in fieldValues) {
      const formatValue = fieldValues.focusHour;
      temp.focusHour = validateHour(formatValue);
    }
    if ("efficiencyFactor" in fieldValues) {
      const formatValue = fieldValues.efficiencyFactor;
      temp.efficiencyFactor = validateEfficiencyFactor(formatValue);
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
    handleInputNumberChange,
  } = useForm(initialFValues, true, validate);

  useEffect(() => {
    setValues(data);
  }, [data]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (validate()) {
      const installedCapacityData = {
        efficiency_factor: Number(values.efficiencyFactor),
        focus_hour: Number(values.focusHour),
      };
      submitformfn(installedCapacityData);
    }
  };
  if (!isEmpty(values)) {
    return (
      <Form onSubmit={handleSubmitForm}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <div className={classes.sectionTitle}>Estimated System KWh</div>
            <div className={classes.container}>
              <div style={{ width: "60%" }}>
                <Controls.Input
                  name="focusHour"
                  label="Average Daily Production Hours"
                  value={values.focusHour}
                  onChange={handleInputNumberChange}
                  error={errors.focusHour}
                  InputProps={{
                    inputComponent: HourFormatCustom,
                  }}
                />
                <Controls.Input
                  name="efficiencyFactor"
                  label="Efficiency Factor"
                  value={values.efficiencyFactor}
                  onChange={handleInputChange}
                  error={errors.efficiencyFactor}
                  InputProps={{
                    inputComponent: DecimalFormatCustom,
                  }}
                />
                <Button
                  classes={{ root: classes.button }}
                  variant="contained"
                  disableElevation
                  color="primary"
                  type="submit"
                  text="Submit"
                  disabled={errors.efficiencyFactor || errors.focusHour}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Form>
    );
  }
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <div className={classes.sectionTitle}>Estimated System KWh</div>
        <div className={classes.container}>
          <DataNotFound width="100%" />
        </div>
      </Grid>
    </Grid>
  );
};

export default ConfigInstalledCapacityForm;
