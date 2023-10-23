import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Chip, IconButton, Button } from "@material-ui/core";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

import AppLayout from "../layout/AppLayout";
import Paper from "../components/Paper";
import AreaDialog from "../components/AreaDialog";
import { api } from "../services";
import sortBy from "lodash/sortBy";
import DataNotFound from "../components/DataNotFound";
import {
  confirmDeleteDialog,
  successDialog,
  failedDialog,
} from "../utils/dialog";

const useStyles = makeStyles((theme) => ({
  typography: {
    fontWeight: "bold",
  },
  areaTitle: {
    borderRadius: "10px 10px 0 0",
    backgroundColor: "#a9e5ca",
    padding: "15px",
    fontWeight: "bold",
    fontSize: "20px",
  },
  areaContainer: {
    background: "#F5F5F5",
    padding: "10px 15px",
    marginBottom: "10px",
    borderRadius: "10px 10px",
  },
  provinceHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  provinceContainer: {
    background: "white",
    border: "1px solid rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    padding: "5px 8px 8px 8px",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "10px",
  },
}));

const ConfigArea = ({ setIsLoading }) => {
  const classes = useStyles();

  const [data, setData] = useState(null);
  const [dialogType, setDialogType] = useState("create");
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    const option = {
      method: "get",
      url: `${process.env.REACT_APP_API}/regions`,
    };
    console.log("option = ", option);
    api(option)
      .then((res) => {
        setIsLoading(false);
        setData(sortBy(res.data.data.regions, ["area"]));
      })
      .catch((err) => {
        console.log("error = ", err);
        console.log("error response = ", err.response);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenDialog = (type, data) => {
    setDialogType(type);
    if (type === "create") {
      setSelectedArea({ area: "", cities: [] });
    } else {
      setSelectedArea({
        ...data,
        cities: data.cities.map((i) => ({ code: i.code, name: i.name })),
      });
    }
    setIsShowDialog(true);
  };
  const handleDelete = (name) => {
    setIsLoading(true);
    const option = {
      method: "delete",
      url: `${process.env.REACT_APP_API}/areas/${name}`,
    };
    console.log("option = ", option);
    api(option)
      .then((res) => {
        setIsLoading(false);
        successDialog("area", name, "delet").then((result) => {
          if (result.isConfirmed) {
            fetchData();
          }
        });
      })
      .catch((err) => {
        console.log("error = ", err);
        console.log("error response = ", err.response);
        setIsLoading(false);
        failedDialog("area", name, "delete");
      });
  };
  const handleConfirmDelete = (name) => {
    setSelectedArea({ area: name });
    confirmDeleteDialog("area", name).then((result) => {
      if (result.isConfirmed) {
        handleDelete(name);
      }
    });
  };

  const renderData = () => {
    if (data && data.length > 0) {
      return (
        <Fragment>
          {data.map((area) => {
            return (
              <Grid key={area.area} item xs={12}>
                <div className={classes.areaContainer}>
                  <div style={{ marginBottom: "10px" }}>
                    <div className={classes.provinceHeader}>
                      {area.area}
                      <div>
                        <IconButton
                          onClick={() => handleOpenDialog("edit", area)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleConfirmDelete(area.area)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                    <div className={classes.provinceContainer}>
                      {area.cities.map((province, index) => {
                        return (
                          <Chip
                            key={`${area.area}-${province.code}`}
                            label={province.code}
                            // color="primary"
                            variant="outlined"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Fragment>
      );
    }
    return <DataNotFound />;
  };

  return (
    <AppLayout>
      <Paper title="Area Configuration">
        <div className={classes.content}>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              disableElevation
              size="large"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => handleOpenDialog("create", null)}
            >
              Create New Area
            </Button>
          </div>
          {renderData()}
          {isShowDialog && (
            <AreaDialog
              type={dialogType}
              open={isShowDialog}
              onClose={setIsShowDialog}
              area={selectedArea}
              setIsLoading={setIsLoading}
              fetchdata={fetchData}
            />
          )}
        </div>
      </Paper>
    </AppLayout>
  );
};

export default ConfigArea;
