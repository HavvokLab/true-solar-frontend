import { createCityAPI } from "@/api";
import { CreateCityRequest } from "@/types";
import { Button, Modal, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation } from "react-query";

type CreateModalProps = {
  refetch?: () => void;
  isOpen: boolean;
  close: () => void;
};

const CreateModal = ({ refetch, isOpen, close }: CreateModalProps) => {
  const form = useForm<CreateCityRequest>({
    validate: {
      code: (val) => (val ? undefined : "Code is required"),
    },
  });

  const onClose = () => {
    form.reset();
    close();
  };

  // |=> CREATE
  const { mutateAsync } = useMutation(["create-city"], createCityAPI, {
    onSuccess: () => {
      refetch && refetch();
      notifications.show({
        title: "Successful",
        message: "City created successfully",
        color: "green",
      });
    },
    onError: () => {
      notifications.show({
        title: "Failure",
        message: "Failed to create create",
        color: "red",
      });
    },
  });

  const onSubmit = async (body: CreateCityRequest) => {
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
            label="Code"
            withAsterisk
            {...form.getInputProps("code")}
          />

          <TextInput
            label="City"
            {...form.getInputProps("city")}
          />

          <TextInput
            label="Area"
            {...form.getInputProps("area")}
          />

          <Button type="submit">Create</Button>
        </Stack>
      </form>
    </Modal>
  );
};

export default CreateModal;
