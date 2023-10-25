import { Stack, createStyles } from "@mantine/core";
import { performanceAlarmSource } from "./data";


const PerformanceAlarmPage = () => {
  const { classes } = useStyles();

  return (
    <Stack>
      <iframe
        className={classes.wrapper}
        src={performanceAlarmSource}
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

export default PerformanceAlarmPage;
