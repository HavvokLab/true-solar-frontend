import { deletePlantAPI } from "@/api";
import { Plant } from "@/types";
import { getDate } from "@/utils/date";
import { ActionIcon, Badge } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconTrash } from "@tabler/icons-react";
import { useMutation } from "react-query";

type RowProps = {
  plant: Plant;
  refetch: () => void;
};

const Row = ({ plant }: RowProps) => {
  const { mutateAsync: deletePlant } = useMutation(
    ["delete-plant"],
    async () => await deletePlantAPI(plant.id),
    {
      onSuccess: () => {
        notifications.show({
          title: "Successful",
          message: "Plant deleted successfully",
          color: "green",
        });
      },
      onError: () => {
        notifications.show({
          title: "Failure",
          message: "Failed to delete plant",
          color: "red",
        });
      },
    }
  );

  const onDelete = async () => {
    await deletePlant();
  };

  return (
    <tr>
      <td>{plant.id}</td>
      <td>{plant.name}</td>
      <td>{plant.area}</td>
      <td>{plant.vendor_type}</td>
      <td>{plant.installed_capacity}</td>
      <td>{plant.lat}</td>
      <td>{plant.long}</td>
      <td>{plant.owner}</td>
      <td>
        {plant.available ? (
          <Badge color="green">Online</Badge>
        ) : (
          <Badge color="red">Offline</Badge>
        )}
      </td>
      <td>{getDate(plant.updated_at)}</td>
      <td>
        <ActionIcon
          color="red"
          variant="light"
          size="sm"
          onClick={onDelete}
        >
          <IconTrash />
        </ActionIcon>
      </td>
    </tr>
  );
};

export default Row;
