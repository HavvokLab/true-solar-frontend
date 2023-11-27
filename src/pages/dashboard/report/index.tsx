import { Group, Paper, Stack, Title, createStyles } from "@mantine/core";
import { reportSource } from "./data";

const ReportPage = () => {
  const { classes } = useStyles();

  return (
    <Paper
      withBorder
      shadow="md"
    >
      <Stack spacing={0}>
        <Group
          className={classes.titleWrapper}
          px="sm"
          py="md"
        >
          <Title>Report</Title>
        </Group>
        <iframe
          className={classes.wrapper}
          src={reportSource}
        />
      </Stack>
    </Paper>
  );
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: "100vh",
    border: "none",
  },
  titleWrapper: {
    borderBottom: `1px solid ${theme.colors.dark[0]}`,
  },
}));

export default ReportPage;
