import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import capitalize from "lodash/capitalize";

import theme from "../constants/theme";

const swal = withReactContent(Swal);

export const successDialog = (type, name, method) => {
  return swal.fire({
    icon: "success",
    title: "Success",
    text: name
      ? `${capitalize(type)} "${name}" has been ${method}ed.`
      : `${capitalize(type)} has been ${method}ed.`,
    showConfirmButton: true,
    confirmButtonColor: theme.palette.primary.main,
    confirmButtonText: "Close",
  });
};

export const failedDialog = (type, name, method) => {
  return swal.fire({
    icon: "error",
    title: "Failed",
    text: name
      ? `Cannot ${method} ${type} "${name}".`
      : `Cannot ${method} ${type}.`,
    showConfirmButton: true,
    confirmButtonColor: theme.palette.primary.main,
    confirmButtonText: "Close",
  });
};

export const confirmDeleteDialog = (type, name) => {
  return swal.fire({
    title: "Are you sure?",
    text: `you want to delete ${type} "${name}"`,
    icon: "warning",
    showConfirmButton: true,
    confirmButtonColor: theme.palette.primary.main,
    confirmButtonText: "Confirm",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    cancelButtonColor: theme.palette.secondary.main,
    reverseButtons: true,
  });
};

export const failedOnLoginDialog = () => {
  return swal.fire({
    icon: "error",
    title: "Failed",
    text: `Cannot login.`,
    showConfirmButton: true,
    confirmButtonColor: theme.palette.primary.main,
    confirmButtonText: "Close",
  });
};

export const sessionExpiredDialog = () => {
  return swal.fire({
    icon: "info",
    title: "Session Expired",
    text: `Your session is expired. Please login again.`,
    showConfirmButton: true,
    confirmButtonColor: theme.palette.primary.main,
    confirmButtonText: "Close",
  });
};
