import { getAllPlantAPI } from "@/api";
import { arrayToCsv, downloadCSV } from "@/utils/csv";
import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconFileExport } from "@tabler/icons-react";
import { useMutation } from "react-query";

const ExportButton = () => {
  const { mutate } = useMutation(getAllPlantAPI, {
    onSuccess: ({ data }) => {
      const headers = [
        "id",
        "name",
        "area",
        "vendor_type",
        "installed_capacity",
        "lat",
        "long",
        "owner",
        "available",
        "created_at",
        "updated_at",
      ];
      if (data.success && data.result) {
        const csv_data = arrayToCsv(headers, data.result);
        downloadCSV("master-site.csv", csv_data);
      }
    },
    onError: () => {
      notifications.show({
        title: "Failure",
        message: "Fail to fetch plants data",
        color: "red",
      });
    },
  });

  const onClick = () => mutate();

  return (
    <Button
      onClick={onClick}
      leftIcon={<IconFileExport size={20} />}
    >
      Export
    </Button>
  );
};

export default ExportButton;
