import { AreaWithCity } from "@/types";
import {
    Badge,
    Collapse,
    Divider,
    Group,
    Paper,
    Stack,
    Title,
    createStyles
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";

type AreaPaperProps = {
  area: AreaWithCity;
};

const AreaPaper = ({ area }: AreaPaperProps) => {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(area.area === "BMA-01");
  return (
    <Paper
      w="100%"
      shadow="md"
      withBorder
    >
      <Stack spacing={2}>
        <Group
          className={classes.titleGroup}
          px="md"
          py="sm"
          position="apart"
          align="center"
          onClick={toggle}
        >
          <Title fw={700} fz="xl">{area.area}</Title>
          <IconChevronDown style={{ rotate: opened ? "180deg" : "0deg" }} />
        </Group>

        <Divider />

        <Collapse in={opened}>
          <Group
            spacing="xs"
            px="sm"
            py="sm"
          >
            {area.cities.map((city, key) => (
              <Badge
                variant="outline"
                size="lg"
                color="green"
                key={key}
              >
                {city.code}
              </Badge>
            ))}
          </Group>
        </Collapse>
      </Stack>
    </Paper>
  );
};

const useStyles = createStyles(() => ({
  titleGroup: {
    cursor: "pointer",
    userSelect: "none",
  },
}));

export default AreaPaper;
