import {
  getInstalledCapacityAPI,
  getPerformanceAlarmLowAPI,
  updateInstalledCapacityAPI,
  updatePerformanceAlarmLowAPI,
} from "@/api";
import { InstalledCapacity, PerformanceAlarm } from "@/types";
import {
  Button,
  Divider,
  Group,
  NumberInput,
  Paper,
  Stack,
  Title,
  createStyles,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  Icon24Hours,
  IconActivity,
  IconAlarmAverage,
  IconHourglass,
  IconPercentage,
} from "@tabler/icons-react";
import { useMutation, useQuery } from "react-query";

const PerformanceAlarmConfigPage = () => {
  const { classes } = useStyles();

  // |=> Installed Capacity
  const installedCapacityForm = useForm<InstalledCapacity>({
    validate: {
      efficiency_factor: (value) => {
        if (value < 0) return "Efficiency Factor must be greater than 0";
        return undefined;
      },
      focus_hour: (value) => {
        if (value < 0) return "Average Daily Production Hours must be greater than 0";
        return undefined;
      },
    },
  });

  const { refetch: reInstalledCapacity } = useQuery(
    ["get-installed-capacity"],
    getInstalledCapacityAPI,
    {
      onSuccess: ({ data }) => {
        const result = data.result;
        if (data.success && result) installedCapacityForm.setValues(result);
      },
      onError: () => {
        notifications.show({
          color: "red",
          title: "Failure",
          message: "Failed to fetch installed capacity",
        });
      },
    }
  );

  const { mutateAsync: updateInstalledCapacity, isLoading: loadUpdateInstalledCapacity } =
    useMutation(["update-installed-capacity"], updateInstalledCapacityAPI, {
      onSuccess: () => {
        reInstalledCapacity();
        notifications.show({
          color: "green",
          title: "Successful",
          message: "Installed capacity updated",
        });
      },
      onError: () => {
        notifications.show({
          color: "red",
          title: "Failure",
          message: "Failed to update installed capacity",
        });
      },
    });

  const onUpdateInstalledCapacity = async (fields: InstalledCapacity) =>
    await updateInstalledCapacity(fields);

  // |=> Low Performance Alarm
  const performanceAlarmLowForm = useForm<PerformanceAlarm>({
    validate: {
      percentage: (value) => {
        if (!value || value < 0 || value > 100)
          return "KWh Production Percentage must be in range 1-100";
        return undefined;
      },
      hit_day: (value) => {
        if (!value || value < 0) return "Hit Days must be greater than 0";
        return undefined;
      },
      duration: (value) => {
        if (!value || value < 0) return "Range Days must be greater than 0";
        return undefined;
      },
    },
  });

  const { refetch: rePerformanceAlarmLow } = useQuery(
    ["get-performance-alarm-low"],
    getPerformanceAlarmLowAPI,
    {
      onSuccess: ({ data }) => {
        const result = data.result;
        if (data.success && result) performanceAlarmLowForm.setValues(result);
      },
      onError: () => {
        notifications.show({
          color: "red",
          title: "Failure",
          message: "Failed to fetch performance alarm low",
        });
      },
    }
  );

  const {
    mutateAsync: updatePerformanceAlarmLow,
    isLoading: loadUpdatePerformanceAlarmLow,
  } = useMutation(["update-performance-alarm-low"], updatePerformanceAlarmLowAPI, {
    onSuccess: () => {
      rePerformanceAlarmLow();
      notifications.show({
        color: "green",
        title: "Successful",
        message: "Performance alarm low updated",
      });
    },
    onError: () => {
      notifications.show({
        color: "red",
        title: "Failure",
        message: "Failed to update performance alarm low",
      });
    },
  });

  const onUpdatePerformanceAlarmLow = async (fields: PerformanceAlarm) =>
    updatePerformanceAlarmLow(fields);

  return (
    <Paper
      w="100%"
      shadow="md"
      withBorder
    >
      <Stack spacing={0}>
        <Group
          px="md"
          py="sm"
        >
          <Title fw={700}>Performance Alarm Configuration</Title>
        </Group>
        <Divider />

        <Stack
          w="100%"
          align="center"
          justify="center"
          py="xl"
        >
          <Paper
            w="90%"
            shadow="sm"
            withBorder
          >
            <Stack spacing={0}>
              <Group
                className={classes.header}
                px="md"
                py="sm"
                align="center"
                position="center"
              >
                <Title fz="xl">Installed Capacity</Title>
              </Group>
              <Divider />
              <form onSubmit={installedCapacityForm.onSubmit(onUpdateInstalledCapacity)}>
                <Stack
                  px="sm"
                  py="sm"
                >
                  <NumberInput
                    label="Average Daily Production Hours"
                    hideControls
                    rightSection={
                      <Group
                        pr="sm"
                        align="center"
                      >
                        <IconHourglass
                          size={20}
                          color="gray"
                        />
                      </Group>
                    }
                    {...installedCapacityForm.getInputProps("focus_hour")}
                  />

                  <NumberInput
                    label="Efficiency Factor"
                    hideControls
                    precision={2}
                    rightSection={
                      <Group
                        pr="sm"
                        align="center"
                      >
                        <IconActivity
                          size={20}
                          color="gray"
                        />
                      </Group>
                    }
                    {...installedCapacityForm.getInputProps("efficiency_factor")}
                  />

                  <Button
                    type="submit"
                    loading={loadUpdateInstalledCapacity}
                  >
                    Update Configuration
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Paper>

          <Paper
            w="90%"
            shadow="sm"
            withBorder
          >
            <Stack spacing={0}>
              <Group
                className={classes.header}
                px="md"
                py="sm"
                align="center"
                position="center"
              >
                <Title fz="xl">Low Performance Alarm</Title>
              </Group>
              <Divider />
              <form
                onSubmit={performanceAlarmLowForm.onSubmit(onUpdatePerformanceAlarmLow)}
              >
                <Stack
                  px="sm"
                  py="sm"
                >
                  <NumberInput
                    label="KWh Production Percentage"
                    hideControls
                    min={0}
                    max={100}
                    rightSection={
                      <Group
                        pr="sm"
                        align="center"
                      >
                        <IconPercentage
                          size={20}
                          color="gray"
                        />
                      </Group>
                    }
                    {...performanceAlarmLowForm.getInputProps("percentage")}
                  />

                  <NumberInput
                    label="Hit Days"
                    hideControls
                    min={1}
                    rightSection={
                      <Group
                        pr="sm"
                        align="center"
                      >
                        <IconAlarmAverage
                          size={20}
                          color="gray"
                        />
                      </Group>
                    }
                    {...performanceAlarmLowForm.getInputProps("hit_day")}
                  />

                  <NumberInput
                    label="Range Days"
                    hideControls
                    min={1}
                    rightSection={
                      <Group
                        pr="sm"
                        align="center"
                      >
                        <Icon24Hours
                          size={20}
                          color="gray"
                        />
                      </Group>
                    }
                    {...performanceAlarmLowForm.getInputProps("duration")}
                  />

                  <Button
                    type="submit"
                    loading={loadUpdatePerformanceAlarmLow}
                  >
                    Update Configuration
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </Paper>
  );
};

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.gray[1],
  },
}));

export default PerformanceAlarmConfigPage;
