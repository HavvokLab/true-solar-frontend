import { getGrowattCredentialAPI } from "@/api";
import { GrowattCredential } from "@/types";
import { Button, Divider, Group, Paper, Stack, Table, Title } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons-react";
import { useState } from "react";
import { useQuery } from "react-query";
import Row from "./components/Row";
import CreateModal from "./components/CreateModal";
import { useDisclosure } from "@mantine/hooks";

const GrowattConfigPage = () => {
  const [openedCreateModal, { open: openCreateModal, close: closeCreateModal }] =
    useDisclosure();
  const [credentials, setCredentials] = useState<GrowattCredential[]>([]);
  const { isLoading, refetch } = useQuery(
    ["get-growatt-credentials"],
    getGrowattCredentialAPI,
    {
      onSuccess: ({ data }) => {
        const result = data.result;
        if (data.success && result) setCredentials(result);
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
          <Title fw={700}>Growatt Configuration</Title>

          <Button
            leftIcon={<IconUserPlus />}
            onClick={openCreateModal}
          >
            Create
          </Button>
        </Group>

        <Divider />

        <Stack
          px="sm"
          py="sm"
        >
          <Table highlightOnHover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Token</th>
                <th>Owner</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>

            <tbody>
              {credentials.map((item) => (
                <Row
                  data={item}
                  refetch={refetch}
                  isLoading={isLoading}
                />
              ))}
            </tbody>
          </Table>
        </Stack>
      </Stack>

      <CreateModal
        isOpen={openedCreateModal}
        close={closeCreateModal}
        refetch={refetch}
      />
    </Paper>
  );
};

export default GrowattConfigPage;
