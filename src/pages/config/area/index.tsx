import { getRegionAPI } from "@/api";
import { AreaWithCity } from "@/types";
import { Divider, Group, Paper, Stack, Title } from "@mantine/core";
import _ from "lodash";
import { useState } from "react";
import { useQuery } from "react-query";
import AreaPaper from "./components/AreaPaper";

const AreaConfigPage = () => {
  const [areas, setAreas] = useState<AreaWithCity[]>([]);
  useQuery(["get-regions"], getRegionAPI, {
    onSuccess: ({ data }) => {
      const result = data.result;
      if (data.success && result) {
        setAreas(_.sortBy(result.regions, ["area"]));
      }
    },
  });

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
          position="apart"
          align="center"
        >
          <Title fw={700}>Province Configuration</Title>

          {/* <Button leftIcon={<IconMapPlus />}>Create</Button> */}
        </Group>

        <Divider />

        <Stack
          px="sm"
          py="sm"
        >
          {areas.map((area, key) => (
            <AreaPaper
              key={key}
              area={area}
            />
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AreaConfigPage;
