import { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import isEmpty from "lodash/isEmpty";

import { useForm, Form } from "./useForm";
import Controls from "./controls/Controls";
import {
  NumberFormatCustom,
  HourFormatCustom,
  PercentageFormatCustom,
} from "./FormatInput";
import {
  validateNumber,
  validatePercentage,
  validateHour,
} from "../utils/validateForm";
import DataNotFound from "./DataNotFound";

const size = {
  xs: 12,
  sm: 12,
  md: 4,
  lg: 4,
};

const initialFValues = {};

const ConfigAlarmForm = (props) => {
  // console.log("props", props);
  const { data, submitformfn, classes } = props;

  const validate = (fieldValues = values) => {
    // console.log("values", values);
    let temp = { ...errors };

    if ("alarm1Day" in fieldValues) {
      const formatValue = fieldValues.alarm1Day;
      temp.alarm1Day = validateNumber(formatValue);
    }
    if ("alarm1Day" in fieldValues) {
      const formatValue = fieldValues.alarm1Day;
      temp.alarm1Day = validateNumber(formatValue);
    }

    if ("alarm1Percentage" in fieldValues) {
      const formatValue = fieldValues.alarm1Percentage;
      temp.alarm1Percentage = validatePercentage(formatValue);
    }
    if ("alarm1Percentage" in fieldValues) {
      const formatValue = fieldValues.alarm1Percentage;
      temp.alarm1Percentage = validatePercentage(formatValue);
    }
    if ("alarm2Percentage" in fieldValues) {
      const formatValue = fieldValues.alarm2Percentage;
      temp.alarm2Percentage = validatePercentage(formatValue);
    }

    if ("alarm1Duration" in fieldValues) {
      const formatValue = fieldValues.alarm1Duration;
      temp.alarm1Duration = validateNumber(formatValue);
    }
    if ("alarm2Duration" in fieldValues) {
      const formatValue = fieldValues.alarm2Duration;
      temp.alarm2Duration = validateNumber(formatValue);
    }

    if ("alarm1Interval" in fieldValues) {
      const formatValue = fieldValues.alarm1Interval;
      temp.alarm1Interval = validateHour(formatValue);
    }
    if ("alarm1Interval" in fieldValues) {
      const formatValue = fieldValues.alarm1Interval;
      temp.alarm1Interval = validateHour(formatValue);
    }
    if ("alarm2Interval" in fieldValues) {
      const formatValue = fieldValues.alarm2Interval;
      temp.alarm2Interval = validateHour(formatValue);
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
    console.log("data", data);
    setValues(data);
  }, [data]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (validate()) {
      const performanceAlarmData = {
        alarm1_interval: Number(values.alarm1Interval),
        alarm1_hit_day: Number(values.alarm1Day),
        alarm1_percentage: Number(values.alarm1Percentage),
        alarm1_duration: Number(values.alarm1Duration),

        alarm2_interval: Number(values.alarm2Interval),
        alarm2_percentage: Number(values.alarm2Percentage),
        alarm2_duration: Number(values.alarm2Duration),
      };
      submitformfn(performanceAlarmData);
    }
  };
  if (!isEmpty(values)) {
    return (
      <Form onSubmit={handleSubmitForm}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <div className={classes.sectionTitle}>
              Performance Alarm Threshold Configuration
            </div>
            <div className={classes.container}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={size.xs} sm={size.sm} md={size.md} lg={size.lg}>
                  <div className={classes.groupTitle}>Performance Low</div>
                  <div className={classes.container}>
                    <Controls.Input
                      name="alarm1Percentage"
                      label="% KWh Production"
                      value={values.alarm1Percentage}
                      onChange={handleInputChange}
                      error={errors.alarm1Percentage}
                      InputProps={{
                        inputComponent: PercentageFormatCustom,
                      }}
                    />
                    <Controls.Input
                      name="alarm1Day"
                      label="Continued for"
                      value={values.alarm1Day}
                      onChange={handleInputNumberChange}
                      error={errors.alarm1Day}
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                    />
                    <Controls.Input
                      name="alarm1Duration"
                      label="Duration"
                      value={values.alarm1Duration}
                      onChange={handleInputNumberChange}
                      error={errors.alarm1Duration}
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                    />
                    <Controls.Input
                      name="alarm1Interval"
                      label="Alarm Generation Cycle"
                      value={values.alarm1Interval}
                      onChange={handleInputNumberChange}
                      error={errors.alarm1Interval}
                      InputProps={{
                        inputComponent: HourFormatCustom,
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={size.xs} sm={size.sm} md={size.md} lg={size.lg}>
                  <div className={classes.groupTitle}>Sum Performance Low</div>
                  <div className={classes.container}>
                    <Controls.Input
                      name="alarm2Percentage"
                      label="% KWh Production"
                      value={values.alarm2Percentage}
                      onChange={handleInputChange}
                      error={errors.alarm2Percentage}
                      InputProps={{
                        inputComponent: PercentageFormatCustom,
                      }}
                    />
                    <Controls.Input
                      name="alarm2Duration"
                      label="Duration"
                      value={values.alarm2Duration}
                      onChange={handleInputNumberChange}
                      error={errors.alarm2Duration}
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                    />
                    <Controls.Input
                      name="alarm2Interval"
                      label="Alarm Generation Cycle"
                      value={values.alarm2Interval}
                      onChange={handleInputNumberChange}
                      error={errors.alarm2Interval}
                      InputProps={{
                        inputComponent: HourFormatCustom,
                      }}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{ width: "60%" }}
                    classes={{ root: classes.button }}
                    variant="contained"
                    disableElevation
                    color="primary"
                    type="submit"
                    text="Submit"
                    disabled={Object.values(errors).find((i) => i !== "")}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Form>
    );
  }
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <div className={classes.sectionTitle}>
          Performance Alarm Threshold Configuration
        </div>
        <div className={classes.container}>
          <DataNotFound width="100%" />
        </div>
      </Grid>
    </Grid>
  );
};

export default ConfigAlarmForm;
