import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Toolbar,
  Tooltip,
  IconButton,
  Select,
  MenuItem,
  OutlinedInput,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { FilterList as FilterListIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  table: {
    "& thead th": {
      // fontWeight: "600",
      fontWeight: "bold",
      color: theme.palette.tableTextColor,
      borderBottom: `2px solid ${theme.palette.tableBorderColor}`,
      borderTop: `1px solid ${theme.palette.tableBorderColor}`,
      backgroundColor: theme.palette.tableBackgroundColor,
    },
    "& tbody td": {
      fontWeight: "300",
      color: theme.palette.tableTextColor,
      borderColor: theme.palette.tableBorderColor,
    },
    "& tbody tr:hover": {
      // backgroundColor: theme.palette.yellow,
      // cursor: "pointer",
    },
    "& tbody tr:last-child td": {
      // border: 0,
    },
  },
  tableContainer: {
    width: "auto",
    overflowX: "scroll",
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: theme.palette.tableTextColor,
      background: "transparent",
      borderColor: theme.palette.tableBorderColor,
    },
    "& .MuiPaginationItem-ellipsis": {
      border: 0,
    },
    "& .MuiPaginationItem-page.Mui-selected": {
      background: theme.palette.tableBackgroundColor,
    },
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20px",
  },
  paginationRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const useRowPerPageStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  },
  text: {
    fontSize: "14px",
    color: theme.palette.tableTextColor,
  },
}));

const useOutlinedInputStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.tableTextColor,
    fontSize: "14px",
    "& $notchedOutline": {
      borderColor: theme.palette.tableBorderColor,
    },
    "&:hover $notchedOutline": {
      borderColor: theme.palette.tableBorderColor,
    },
    "&$focused $notchedOutline": {
      borderColor: theme.palette.tableBorderColor,
    },
  },
  input: {
    padding: "6px 15px 6px 10px",
  },
  focused: {},
  notchedOutline: {},
}));

export default function useTable(
  headCells,
  records,
  totalLength,
  filterFn,
  page,
  handleChangePage,
  rowPerPage,
  handleChangeRowPerPage
) {
  const classes = useStyles();
  const outlinedInputClasses = useOutlinedInputStyles();
  const rowPerPageClasses = useRowPerPageStyles();

  const rowPerPageOption = [10, 25, 50, 100, 1000, 10000];
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const TableSection = ({ children }) => {
    return <div className={classes.tableContainer}>{children}</div>;
  };

  const EnhancedTableToolbar = (props) => {
    return (
      <Toolbar className={classes.root}>
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    );
  };

  const TblContainer = (props) => (
    <Table className={classes.table}>{props.children}</Table>
  );

  const TblHead = (props) => {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(cellId);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
              align="center"
            >
              {headCell.disableSorting ? (
                headCell.label
              ) : (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={() => {
                    handleSortRequest(headCell.id);
                  }}
                >
                  {headCell.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const TblPagination = () => (
    <div className={classes.paginationContainer}>
      <div className={rowPerPageClasses.container}>
        <div className={rowPerPageClasses.text}>Rows per page</div>
        <Select
          variant="outlined"
          value={rowPerPage}
          onChange={handleChangeRowPerPage}
          input={
            <OutlinedInput
              // labelWidth={labelWidth}
              name="age"
              id="outlined-age-simple"
              classes={outlinedInputClasses}
            />
          }
        >
          {rowPerPageOption.map((i) => {
            return (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <Pagination
        classes={{ root: classes.paginationRoot, ul: classes.pagination }}
        variant="outlined"
        shape="rounded"
        count={renderPageCount(totalLength, rowPerPage)}
        page={page}
        onChange={handleChangePage}
      />
    </div>
  );

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const recordsAfterPagingAndSorting = () => {
    console.log("order, orderBy", order, orderBy);
    return stableSort(filterFn.fn(records), getComparator(order, orderBy));
  };

  const renderPageCount = (length, row) => {
    const mod = length % row;
    const quotient = parseInt(length / row);
    console.log("renderPageCount", length, row, quotient, mod);

    if (mod > 0) {
      return quotient + 1;
    }
    return quotient;
  };

  return {
    EnhancedTableToolbar,
    TableSection,
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
    renderPageCount,
  };
}
