import {
  createKstarCredentialAPI
} from "@/api";
import { OwnerOptions } from "@/data/owner";
import { KstarCredential } from "@/types";
import { validateOwner } from "@/utils/validate";
import { Button, Modal, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation } from "react-query";

type CreateModalProps = {
  refetch?: () => void;
  isOpen: boolean;
  close: () => void;
};

const CreateModal = ({ refetch, isOpen, close }: CreateModalProps) => {
  const form = useForm<KstarCredential>({
    validate: {
      username: (value) => {
        if (!value) return "Username is required";
      },
      password: (value) => {
        if (!value) return "Password is required";
      },
      owner: (value) => validateOwner(value),
    },
  });

  const onClose = () => {
    form.reset();
    close();
  };

  // |=> CREATE
  const { mutateAsync } = useMutation(
    ["create-kstar-credential"],
    createKstarCredentialAPI,
    {
      onSuccess: () => {
        refetch && refetch();
        notifications.show({
          title: "Successful",
          message: "Credential created successfully",
          color: "green",
        });
      },
      onError: () => {
        notifications.show({
          title: "Failure",
          message: "Failed to create credential",
          color: "red",
        });
      },
    }
  );

  const onSubmit = async (body: KstarCredential) => {
    await mutateAsync(body);
    onClose();
  };

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      size="md"
    >
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
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

          <Button type="submit">Create</Button>
        </Stack>
      </form>
    </Modal>
  );
};

export default CreateModal;
