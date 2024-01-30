import { getPlantAPI } from "@/api";
import { Plant } from "@/types";
import { Divider, Group, Pagination, Paper, Stack, Table, Title } from "@mantine/core";
import { useState } from "react";
import { useQuery } from "react-query";
import Row from "./components/Row";
import ExportButton from "./components/ExportButton";

const PlantPage = () => {
  const [offset, setOffset] = useState<number>(0);
  const [limit] = useState<number>(25);
  const [total, setTotal] = useState<number>(1);
  const [plants, setPlants] = useState<Plant[]>([]);
  const { refetch } = useQuery(
    ["get-plants", offset, limit],
    async () => await getPlantAPI(offset, limit),
    {
      onSuccess: ({ data }) => {
        const result = data.result;
        if (data.success && result) {
          setPlants(result.plants);
          setTotal(Math.ceil(result.count / limit));
        }
      },
    }
  );

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
          <Title fw={700}>Plant</Title>
          <ExportButton/>
        </Group>

        <Divider />

        <Stack
          justify="center"
          align="center"
          py="md"
          px="sm"
        >
          <Table highlightOnHover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Area</th>
                <th>Vendor</th>
                <th>Installed Capacity</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Owner</th>
                <th>Available</th>
                <th>Updated At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant, key) => (
                <Row
                  key={key}
                  refetch={refetch}
                  plant={plant}
                />
              ))}
            </tbody>
          </Table>

          <Pagination
            total={total}
            value={offset / limit + 1}
            onChange={(val) => setOffset(limit * (val - 1))}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PlantPage;
