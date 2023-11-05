import { deleteHuaweiCredentialAPI, updateHuaweiCredentialAPI } from "@/api";
import { OwnerOptions } from "@/data/owner";
import { HuaweiCredential } from "@/types";
import { validateOwner } from "@/utils/validate";
import { Button, Flex, Modal, Select, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { useMemo } from "react";
import { useMutation } from "react-query";

type EditModalProps = {
  data: HuaweiCredential;
  refetch?: () => void;
  isOpen: boolean;
  close: () => void;
};

const EditModal = ({ data, refetch, isOpen, close }: EditModalProps) => {
  const form = useForm({
    initialValues: data,
    validate: {
      id: (value) => (value != data.id ? "ID cannot be changed" : null),
      username: (value) => {
        if (!value) return "Username is required";
      },
      password: (value) => {
        if (!value) return "Password is required";
      },
      owner: (value) => validateOwner(value),
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
  const { mutateAsync: deleteHuaweiCredential } = useMutation(
    [`delete-huawei-credential-${data.id}`],
    async () => await deleteHuaweiCredentialAPI(data.id),
    {
      onSuccess: () => {
        refetch && refetch();
        notifications.show({
          title: "Successful",
          message: "Credential deleted successfully",
          color: "green",
        });
      },
      onError: () => {
        notifications.show({
          title: "Failure",
          message: "Failed to delete credential",
          color: "red",
        });
      },
    }
  );

  const openDeleteModal = () => {
    onClose();
    modals.openConfirmModal({
      title: "Delete Credential",
      centered: true,
      children: <Text>Are you sure you want to delete this credential?</Text>,
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onConfirm: async () => await deleteHuaweiCredential(),
    });
  };

  // |=> UPDATE
  const { mutateAsync: updateHuaweiCredential } = useMutation(
    [`update-huawei-credential-${data.id}`],
    async (body: HuaweiCredential) => await updateHuaweiCredentialAPI(data.id, body),
    {
      onSuccess: () => {
        refetch && refetch();
        notifications.show({
          title: "Successful",
          message: "Credential updated successfully",
          color: "green",
        });
      },
      onError: () => {
        notifications.show({
          title: "Failure",
          message: "Failed to update credential",
          color: "red",
        });
      },
    }
  );

  const onUpdateHuaweiCredential = (body: HuaweiCredential) => {
    onClose();
    modals.openConfirmModal({
      title: "Update Credential",
      centered: true,
      children: <Text>Are you sure you want to update this credential?</Text>,
      labels: { confirm: "Confirm", cancel: "Cancel" },
      confirmProps: { color: "green" },
      onConfirm: async () => await updateHuaweiCredential(body),
    });
  };

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      size="md"
    >
      <form onSubmit={form.onSubmit(onUpdateHuaweiCredential)}>
        <Stack>
          <TextInput
            label="ID"
            disabled
            {...form.getInputProps("id")}
          />

          <TextInput
            label="Username"
            {...form.getInputProps("username")}
          />

          <TextInput
            label="Password"
            {...form.getInputProps("password")}
          />

          <Select
            label="Owner"
            data={OwnerOptions}
            searchable
            {...form.getInputProps("owner")}
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
