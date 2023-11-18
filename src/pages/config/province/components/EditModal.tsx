import { deleteCityAPI, updateCityAPI } from "@/api";
import { SiteRegionMapping, UpdateCityRequest } from "@/types";
import { Button, Flex, Modal, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { useMemo } from "react";
import { useMutation } from "react-query";

type EditModalProps = {
  data: SiteRegionMapping;
  refetch?: () => void;
  isOpen: boolean;
  close: () => void;
};

const EditModal = ({ data, refetch, isOpen, close }: EditModalProps) => {
  const form = useForm({
    initialValues: data,
    validate: {
    },
  });

  useMemo(() => {
    form.setValues(data);
  }, [data]);

  const onClose = () => {
    form.reset();
    close();
  };

  // |=> DELETE
  const { mutateAsync: deleteCity } = useMutation(
    [`delete-city-${data.id}`],
    async () => await deleteCityAPI(data.id),
    {
      onSuccess: () => {
        refetch && refetch();
        notifications.show({
          title: "Successful",
          message: "City deleted successfully",
          color: "green",
        });
      },
      onError: () => {
        notifications.show({
          title: "Failure",
          message: "Failed to delete city",
          color: "red",
        });
      },
    }
  );

  const openDeleteModal = () => {
    onClose();
    modals.openConfirmModal({
      title: "Delete City",
      centered: true,
      children: <Text>Are you sure you want to delete this city?</Text>,
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onConfirm: async () => await deleteCity(),
    });
  };

  // |=> UPDATE
  const { mutateAsync: updateCity } = useMutation(
    [`update-kstar-credential-${data.id}`],
    async (body: UpdateCityRequest) => await updateCityAPI(data.id, body),
    {
      onSuccess: () => {
        refetch && refetch();
        notifications.show({
          title: "Successful",
          message: "City updated successfully",
          color: "green",
        });
      },
      onError: () => {
        notifications.show({
          title: "Failure",
          message: "Failed to update city",
          color: "red",
        });
      },
    }
  );

  const onUpdateKstarCredential = (body: UpdateCityRequest) => {
    onClose();
    modals.openConfirmModal({
      title: "Update City",
      centered: true,
      children: <Text>Are you sure you want to update this city?</Text>,
      labels: { confirm: "Confirm", cancel: "Cancel" },
      confirmProps: { color: "green" },
      onConfirm: async () => await updateCity(body),
    });
  };

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      size="md"
    >
      <form onSubmit={form.onSubmit(onUpdateKstarCredential)}>
        <Stack>
          <TextInput
            label="ID"
            disabled
            {...form.getInputProps("id")}
          />

          <TextInput
            label="Code"
            {...form.getInputProps("code")}
          />

          <TextInput
            label="Name"
            {...form.getInputProps("name")}
          />

          <TextInput
            label="Area"
            {...form.getInputProps("area")}
          />

          <Flex gap="xs">
            <Button
              fullWidth
              variant="subtle"
              color="red"
              onClick={openDeleteModal}
            >
              Delete
            </Button>

            <Button
              fullWidth
              type="submit"
            >
              Update
            </Button>
          </Flex>
        </Stack>
      </form>
    </Modal>
  );
};

export default EditModal;
