import { useEffect, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import ConfigPerformanceAlarmForm from "./ConfigPerformanceAlarmForm";
import ConfigInstalledCapacityForm from "./ConfigInstalledCapacityForm";
import { api } from "../services";
import { successDialog, failedDialog } from "../utils/dialog";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "10px 20px",
    paddingTop: "20px",
    marginBottom: "10px",
    borderRadius: "0 0 10px 10px",
    border: "1px solid #ededed",
  },
  sectionTitle: {
    backgroundColor: "#a9e5ca",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px 10px 0 0",
    fontWeight: "bold",
    fontSize: "20px",
  },
  groupTitle: {
    backgroundColor: "#ededed",
    padding: "10px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px 5px 0 0",
    fontWeight: "bold",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    // marginTop: "10px",
    backgroundColor: "#3a8e69",
    "&:hover": {
      backgroundColor: "#2a664b",
    },
  },
}));

const ConfigAlarmForm = ({ setIsLoading }) => {
  const classes = useStyles();

  const [values, setValues] = useState(null);

  useEffect(() => {
    const fetchAlarmConfig = () => {
      setIsLoading(true);
      const performanceAlarmOpt = {
        method: "get",
        url: `${process.env.REACT_APP_API}/configs/performance`,
      };
      const installedCapacityOpt = {
        method: "get",
        url: `${process.env.REACT_APP_API}/configs/installed_capacity`,
      };
      console.log("installedCapacityOpt = ", installedCapacityOpt);
      console.log("performanceAlarmOpt = ", performanceAlarmOpt);
      const installedCapacityReq = api(installedCapacityOpt);
      const performanceAlarmReq = api(performanceAlarmOpt);
      return axios
        .all([installedCapacityReq, performanceAlarmReq])
        .then(
          axios.spread((installedCapacityRes, performanceAlarmRes) => {
            console.log(
              "installedCapacityRes, performanceAlarmRes",
              installedCapacityRes,
              performanceAlarmRes
            );
            const installedCapacityData = installedCapacityRes.data.data;
            const performanceAlarmData = performanceAlarmRes.data.data;
            const d = {
              focusHour: installedCapacityData.focus_hour,
              efficiencyFactor: installedCapacityData.efficiency_factor,

              alarm1Name: performanceAlarmData.alarm1_name,
              alarm1Percentage: performanceAlarmData.alarm1_percentage,
              alarm1Day: performanceAlarmData.alarm1_hit_day,
              alarm1Duration: performanceAlarmData.alarm1_duration,
              alarm1Interval: performanceAlarmData.alarm1_interval,

              alarm2Name: performanceAlarmData.alarm2_name,
              alarm2Interval: performanceAlarmData.alarm2_interval,
              alarm2Percentage: performanceAlarmData.alarm2_percentage,
              alarm2Duration: performanceAlarmData.alarm2_duration,
            };
            console.log("d", d);
            setIsLoading(false);
            setValues(d);
          })
        )
        .catch((err) => {
          setIsLoading(false);
        });
    };
    fetchAlarmConfig();
  }, []);

  const handleSubmitPerformanceAlarm = (data) => {
    const performanceAlarmOpt = {
      method: "put",
      url: `${process.env.REACT_APP_API}/configs/performance`,
      // url: `/configs/performance`,
      data: data,
    };
    console.log("SubmitForm option = ", performanceAlarmOpt);
    api(performanceAlarmOpt)
      .then((res) => {
        setIsLoading(false);
        successDialog(
          "Performance Alarm Threshold Configuration",
          null,
          "edit"
        );
      })
      .catch((err) => {
        console.log("error = ", err);
        console.log("error response = ", err.response);
        setIsLoading(false);
        failedDialog("Performance Alarm Threshold Configuration", null, "edit");
      });
  };
  const handleSubmitInstalledCapacity = (data) => {
    const installedCapacityOpt = {
      method: "put",
      url: `${process.env.REACT_APP_API}/configs/installed_capacity`,
      // url: `/configs/installed_capacity`,
      data: data,
    };
    console.log("SubmitForm option = ", installedCapacityOpt);
    api(installedCapacityOpt)
      .then((res) => {
        setIsLoading(false);
        successDialog("Estimated System KWh", null, "edit");
      })
      .catch((err) => {
        console.log("error = ", err);
        console.log("error response = ", err.response);
        setIsLoading(false);
        failedDialog("Estimated System KWh", null, "edit");
      });
  };
  return (
    <Fragment>
      <ConfigInstalledCapacityForm
        classes={classes}
        data={
          values
            ? {
                focusHour: values.focusHour,
                efficiencyFactor: values.efficiencyFactor,
              }
            : null
        }
        submitformfn={handleSubmitInstalledCapacity}
      />
      <ConfigPerformanceAlarmForm
        classes={classes}
        data={
          values
            ? {
                alarm1Name: values.alarm1Name,
                alarm1Interval: values.alarm1Interval,
                alarm1Day: values.alarm1Day,
                alarm1Percentage: values.alarm1Percentage,
                alarm1Duration: values.alarm1Duration,

                alarm2Name: values.alarm2Name,
                alarm2Interval: values.alarm2Interval,
                alarm2Percentage: values.alarm2Percentage,
                alarm2Duration: values.alarm2Duration,
              }
            : null
        }
        submitformfn={handleSubmitPerformanceAlarm}
      />
    </Fragment>
  );
};

export default ConfigAlarmForm;
