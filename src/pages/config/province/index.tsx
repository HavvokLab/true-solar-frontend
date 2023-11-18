import { getCityAPI } from "@/api";
import { SiteRegionMapping } from "@/types";
import {
  Button,
  Group,
  Paper,
  Stack,
  Title,
  Divider,
  Table,
  Pagination,
} from "@mantine/core";
import { IconMapPlus } from "@tabler/icons-react";
import { useState } from "react";
import { useQuery } from "react-query";
import Row from "./components/Row";
import { useDisclosure } from "@mantine/hooks";
import CreateModal from "./components/CreateModal";

const ProvinceConfigPage = () => {
  // |=> Create City
  const [createOpened, { open: openCreate, close: closeCreate }] = useDisclosure();

  // |=> Get City
  const [offset, setOffset] = useState<number>(0);
  const [limit] = useState<number>(12);
  const [total, setTotal] = useState<number>(1);
  const [cities, setCities] = useState<SiteRegionMapping[]>([]);
  const { refetch } = useQuery(
    ["get-cities", offset, limit],
    async () => await getCityAPI(offset, limit),
    {
      onSuccess: ({ data }) => {
        const result = data.result;
        if (data.success && result) {
          setCities(result.site_region_mappings);
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
          <Title fw={700}>Province Configuration</Title>

          <Button
            leftIcon={<IconMapPlus />}
            onClick={openCreate}
          >
            Create
          </Button>
        </Group>

        <Divider />

        <Stack
          align="center"
          justify="center"
          py="md"
          px="sm"
        >
          <Table highlightOnHover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Code</th>
                <th>Name</th>
                <th>Area</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>

            <tbody>
              {cities.map((city, idx) => (
                <Row
                  key={idx}
                  city={city}
                  refetch={refetch}
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

      <CreateModal
        close={closeCreate}
        isOpen={createOpened}
        refetch={refetch}
      />
    </Paper>
  );
};

export default ProvinceConfigPage;
