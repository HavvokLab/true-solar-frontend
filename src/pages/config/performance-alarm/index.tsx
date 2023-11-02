import {
    getInstalledCapacityAPI,
    updateInstalledCapacityAPI,
} from "@/api/installed-capacity";
import { InstalledCapacity } from "@/types";
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
import { Icon24Hours, IconActivity, IconAlarmAverage, IconHourglass, IconPercentage } from "@tabler/icons-react";
import { useMutation, useQuery } from "react-query";

const PerformanceAlarmConfigPage = () => {
  const { classes } = useStyles();

  // |=> Installed Capacity
  const form = useForm<InstalledCapacity>({
    validate: {
      efficiency_factor: (value) => {
        if (value < 0) return "efficiency factor must be greater than 0";
        return undefined;
      },
      focus_hour: (value) => {
        if (value < 0) return "focus hour must be greater than 0";
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
        if (data.success && result) form.setValues(result);
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
              <form onSubmit={form.onSubmit(onUpdateInstalledCapacity)}>
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
                    {...form.getInputProps("focus_hour")}
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
                    {...form.getInputProps("efficiency_factor")}
                  />

                  <Button
                    type="submit"
                    loading={loadUpdateInstalledCapacity}
                  >
                    Update Installed Capacity
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
              <form>
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
                  />

                  <NumberInput
                    label="Hit Days"
                    hideControls
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
                  />

                  <NumberInput
                    label="Range Days"
                    hideControls
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
                  />

                  <Button>Update</Button>
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
