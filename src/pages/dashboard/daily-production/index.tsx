import { Stack, createStyles } from "@mantine/core";
import { dailyProductionSource } from "./data";


const DailyProductionPage = () => {
  const { classes } = useStyles();

  return (
    <Stack>
      <iframe
        className={classes.wrapper}
        src={dailyProductionSource}
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

export default DailyProductionPage;
