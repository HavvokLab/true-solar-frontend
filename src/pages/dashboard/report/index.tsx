import { Stack, createStyles } from "@mantine/core";
import { reportSource } from "./data";

const ReportPage = () => {
  const { classes } = useStyles();

  return (
    <Stack>
      <iframe
        className={classes.wrapper}
        src={reportSource}
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

export default ReportPage;
