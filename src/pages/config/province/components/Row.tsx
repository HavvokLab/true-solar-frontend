import { SiteRegionMapping } from "@/types";
import { getDate } from "@/utils/date";
import { createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Fragment } from "react";
import EditModal from "./EditModal";

export type RowProps = {
  city: SiteRegionMapping;
  refetch: () => void;
};
const Row = ({ city, refetch }: RowProps) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure();

  return (
    <Fragment>
      <tr
        className={classes.root}
        onClick={open}
      >
        <td>{city.id}</td>
        <td>{city.code || "-"}</td>
        <td>{city.name || "-"}</td>
        <td>{city.area || "-"}</td>
        <td>{getDate(city.created_at)}</td>
        <td>{getDate(city.updated_at)}</td>
      </tr>

      <EditModal
        isOpen={opened}
        close={close}
        data={city}
        refetch={refetch}
      />
    </Fragment>
  );
};

const useStyles = createStyles(() => ({
  root: {
    cursor: "pointer",
  },
}));

export default Row;
