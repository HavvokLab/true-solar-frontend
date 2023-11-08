import { Stack, createStyles } from "@mantine/core";
import { monthlyProductionSource } from "./data";


const MonthlyProductionPage = () => {
  const { classes } = useStyles();

  return (
    <Stack>
      <iframe
        className={classes.wrapper}
        src={monthlyProductionSource}
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

export default MonthlyProductionPage;
