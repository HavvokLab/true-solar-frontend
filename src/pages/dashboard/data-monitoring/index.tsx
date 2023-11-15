import { Stack, createStyles } from "@mantine/core";
import { dataMonitoringSource } from "./data";


const DataMonitoringPage = () => {
  const { classes } = useStyles();

  return (
    <Stack>
      <iframe
        className={classes.wrapper}
        src={dataMonitoringSource}
      />
    </Stack>
  );
};

const useStyles = createStyles(() => ({
  wrapper: {
    width: "100%",
    height: "100vh",
    border: "none",
  },
}));

export default DataMonitoringPage;
