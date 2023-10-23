import { useState, useEffect } from "react";
import { TableBody, TableRow, TableCell } from "@material-ui/core";
import moment from "moment";

import useTable from "../components/useTable";
import AppLayout from "../layout/AppLayout";
import Paper from "../components/Paper";
import { api } from "../services";

const headCells = [
  { id: "by_username", label: "Username" },
  { id: "message", label: "Message" },
  { id: "created_at", label: "Date & Time" },
];

const Log = ({ setIsLoading }) => {
  const [rowPerPage, setRowPerPage] = useState(10);
  const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const fetchData = () => {
    setIsLoading(true);
    const option = {
      method: "get",
      url: `${process.env.REACT_APP_API}/access_logs`,
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
  const handleChangeRowPerPage = (event) => {
    setRowPerPage(event.target.value);
    setPage(1);
  };

  useEffect(() => {
    fetchData();
  }, [page, rowPerPage]);

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

  return (
    <AppLayout>
      <Paper title="Activity Log">
        <TableSection>
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center">{item.by_username}</TableCell>
                  <TableCell align="center">{item.message}</TableCell>
                  <TableCell align="center">
                    {moment(item.created_at).format("YYYY-MM-D HH:mm:ss")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
        </TableSection>
        <TblPagination />
      </Paper>
    </AppLayout>
  );
};

export default Log;
