import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

import AppLayout from "../layout/AppLayout";
import useTable from "../components/useTable";
import Paper from "../components/Paper";
import ProvinceDialog from "../components/ProvinceDialog";
import {
  confirmDeleteDialog,
  successDialog,
  failedDialog,
} from "../utils/dialog";
import { api } from "../services";

const headCells = [
  { id: "name", label: "Name" },
  { id: "code", label: "Code" },
  { id: "action", label: "Action", disableSorting: true },
];

const useStyles = makeStyles((muiTheme) => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "10px",
  },
  iconButton: {
    color: `${muiTheme.palette.tableTextColor}`,
  },
}));

const ConfigProvince = ({ setIsLoading }) => {
  const classes = useStyles();

  const [rowPerPage, setRowPerPage] = useState(10);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [selectedProvince, setSelectedProvince] = useState(false);
  const [records, setRecords] = useState([]);
  const [total, setTotal] = useState(0);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [page, setPage] = useState(1);

  const fetchData = () => {
    console.log("page = ", page);
    setIsLoading(true);
    const option = {
      method: "get",
      url: `${process.env.REACT_APP_API}/cities`,
      params: {
        limit: rowPerPage,
        offset: (page - 1) * rowPerPage,
      },
    };
    console.log("option = ", option);
    api(option)
      .then((res) => {
        setIsLoading(false);
        setRecords(res.data.data.data);
        setTotal(res.data.data.total);
      })
      .catch((err) => {
        console.log("error = ", err);
        console.log("error response = ", err.response);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page, rowPerPage]);

  const handleChangePage = (event, value) => {
    console.log("handleChangePage", value);
    setPage(value);
  };

  const handleChangeRowPerPage = (event) => {
    setRowPerPage(event.target.value);
    setPage(1);
  };

  const {
    TableSection,
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(
    headCells,
    records,
    total,
    filterFn,
    page,
    handleChangePage,
    rowPerPage,
    handleChangeRowPerPage
  );

  const handleOpenDialog = (d, type) => {
    setDialogType(type);
    setSelectedProvince(d);
    setIsShowDialog(true);
  };

  const handleDelete = (d) => {
    setIsLoading(true);
    const option = {
      method: "delete",
      url: `${process.env.REACT_APP_API}/cities/${d.id}`,
    };
    console.log("option = ", option);
    api(option)
      .then((res) => {
        setIsLoading(false);
        successDialog("province", d.name, "delet").then((result) => {
          if (result.isConfirmed) {
            fetchData();
          }
        });
      })
      .catch((err) => {
        console.log("error = ", err);
        console.log("error response = ", err.response);
        setIsLoading(false);
        failedDialog("province", d.name, "delete");
      });
  };

  const confirmDelete = (d) => {
    confirmDeleteDialog("province", d.name).then((result) => {
      if (result.isConfirmed) {
        handleDelete(d);
      }
    });
  };

  const handleConfirmDelete = (d) => {
    setSelectedProvince(d);
    confirmDelete(d);
  };

  return (
    <AppLayout>
      <Paper title="Province Configuration">
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            disableElevation
            size="large"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog(null, "create")}
          >
            Create New Province
          </Button>
        </div>
        <TableSection>
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center">
                    {item.name ? item.name : "-"}
                  </TableCell>
                  <TableCell align="center">
                    {item.code ? item.code : "-"}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      classes={{ root: classes.iconButton }}
                      onClick={() => handleOpenDialog(item, "edit")}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      classes={{ root: classes.iconButton }}
                      onClick={() => handleConfirmDelete(item)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
        </TableSection>
        <TblPagination />
        {isShowDialog && (
          <ProvinceDialog
            fetchdata={fetchData}
            setIsLoading={setIsLoading}
            type={dialogType}
            open={isShowDialog}
            onClose={setIsShowDialog}
            province={selectedProvince}
          />
        )}
      </Paper>
    </AppLayout>
  );
};

export default ConfigProvince;
