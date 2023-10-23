import { makeStyles } from "@material-ui/core/styles";
import dataNotFoundImg from "../assets/images/no-data-rafiki.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    // padding: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const DataNotFound = ({ width = "50%" }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={dataNotFoundImg} width={width} alt="No Data" />
    </div>
  );
};

export default DataNotFound;
