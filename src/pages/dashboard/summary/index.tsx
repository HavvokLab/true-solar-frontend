import { Stack, createStyles } from "@mantine/core";
import { summarySource } from "./data";

const SummaryPage = () => {
  const { classes } = useStyles();

  return (
    <Stack>
      <iframe
        className={classes.wrapper}
        src={summarySource}
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

export default SummaryPage;
