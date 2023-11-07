import { SolarmanCredential } from "@/types";
import { getDate } from "@/utils/date";
import { ActionIcon, Overlay, Skeleton, createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEye } from "@tabler/icons-react";
import { Fragment } from "react";
import EditModal from "./EditModal";

type RowProps = {
  data: SolarmanCredential;
  isLoading?: boolean;
  refetch?: () => void;
};

const Row = ({ data, refetch, isLoading = false }: RowProps) => {
  const { classes } = useStyles();
  const [openedEditModal, { open: openEditModal, close: closeEditModal }] =
    useDisclosure();
  const [showedPassword, { open: showPassword }] = useDisclosure();

  const onShowPassword = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    showPassword();
  };

  const passwordOverlay = !showedPassword ? (
    <Overlay
      center
      blur={15}
      opacity={0.1}
      radius="sm"
      m={4}
    >
      <ActionIcon
        variant="transparent"
        onClick={onShowPassword}
      >
        <IconEye />
      </ActionIcon>
    </Overlay>
  ) : null;

  const [showedAppID, { open: showAppID }] = useDisclosure();
  const onShowAppID = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    showAppID();
  };

  const appIDOverlay = !showedAppID ? (
    <Overlay
      center
      blur={15}
      opacity={0.1}
      radius="sm"
      m={4}
    >
      <ActionIcon
        variant="transparent"
        onClick={onShowAppID}
      >
        <IconEye />
      </ActionIcon>
    </Overlay>
  ) : null;

  const [showedAppSecret, { open: showAppSecret }] = useDisclosure();
  const onShowAppSecret = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    showAppSecret();
  };

  const appSecretOverlay = !showedAppSecret ? (
    <Overlay
      center
      blur={15}
      opacity={0.1}
      radius="sm"
      m={4}
    >
      <ActionIcon
        variant="transparent"
        onClick={onShowAppSecret}
      >
        <IconEye />
      </ActionIcon>
    </Overlay>
  ) : null;

  if (isLoading)
    return (
      <Skeleton
        w="100%"
        h={24}
      />
    );

  return (
    <Fragment>
      <tr
        className={classes.root}
        onClick={openEditModal}
      >
        <td>{data.id}</td>
        <td>{data.username}</td>
        <td className={classes.tdPassword}>
          {passwordOverlay}
          {data.password}
        </td>
        <td className={classes.tdPassword}>
          {appIDOverlay}
          {data.app_id}
        </td>
        <td className={classes.tdPassword}>
          {appSecretOverlay}
          {data.app_secret}
        </td>
        <td>{data.owner}</td>
        <td>{getDate(data.created_at)}</td>
        <td>{getDate(data.updated_at)}</td>
      </tr>

      <EditModal
        data={data}
        isOpen={openedEditModal}
        close={closeEditModal}
        refetch={refetch}
      />
    </Fragment>
  );
};

const useStyles = createStyles(() => ({
  root: {
    cursor: "pointer",
  },
  tdPassword: {
    position: "relative",
  },
}));

export default Row;
