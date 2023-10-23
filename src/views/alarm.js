import { useState, useEffect } from "react";
import { TableBody, TableRow, TableCell } from "@material-ui/core";
import {
  ArrowDropDown,
  ArrowRight,
  Home,
  CheckBoxOutlineBlank,
  CheckBox,
} from "@material-ui/icons";
import moment from "moment";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

import AppLayout from "../layout/AppLayout";
import Paper from "../components/Paper";
import useTable from "../components/useTable";

const nodes = [
  {
    value: "company",
    label: "Company",
    children: [
      { value: "BMA", label: "BMA" },
      { value: "RNSO-1", label: "RNSO-1" },
      { value: "RNSO-2", label: "RNSO-2" },
    ],
  },
  {
    value: "area",
    label: "Area",
    children: [
      {
        value: "allBMA",
        label: "BMA",
        children: [
          { value: "BMA1", label: "BMA 1" },
          { value: "BMA2", label: "BMA 2" },
          { value: "BMA3", label: "BMA 3" },
          { value: "BMA4", label: "BMA 4" },
          { value: "BMA5", label: "BMA 5" },
        ],
      },
      {
        value: "UPC",
        label: "UPC",
        children: [
          { value: "UPC1", label: "UPC 1" },
          { value: "UPC2", label: "UPC 2" },
          { value: "UPC3", label: "UPC 3" },
          { value: "UPC4", label: "UPC 4" },
          { value: "UPC5", label: "UPC 5" },
          { value: "UPC6", label: "UPC 6" },
          { value: "UPC7", label: "UPC 7" },
          { value: "UPC8", label: "UPC 8" },
          { value: "UPC9", label: "UPC 9" },
          { value: "UPC10", label: "UPC 10" },
        ],
      },
    ],
  },
  {
    value: "vendor",
    label: "Vendor",
    children: [
      { value: "Huawei", label: "Huawei" },
      { value: "Growatt", label: "Growatt" },
      { value: "INVT", label: "INVT" },
      { value: "KSTAR", label: "KSTAR" },
      { value: "wipanda", label: "wipanda" },
    ],
  },
];

const mockData = [
  {
    siteID: "CBR2001",
    company: "BMA",
    area: "BMA1",
    vendor: "HUAWEI",
    deviceSN: "I11026179c176070000221",
    deviceName: "4G CPN6743",
    alarmName: "FOO Grid Under Volt",
    time: 1776354680,
  },
  {
    siteID: "SMK6718-NB1P4",
    company: "BMA",
    area: "BMA1",
    vendor: "HUAWEI",
    deviceSN: "I110261077A3418990020621",
    deviceName: "4G SMK6718",
    alarmName: "FOO Grid Under Volt",
    time: 967299636,
  },
  {
    siteID: "TRG7144-NB1P4",
    company: "BMA",
    area: "BMA1",
    vendor: "HUAWEI",
    deviceSN: "I11026179c176070000221",
    deviceName: "4G TRG7144",
    alarmName: "F02 Grid Under Freq",
    time: 1438677302,
  },
  {
    siteID: "TRG7144-NB1P4",
    company: "BMA",
    area: "BMA1",
    vendor: "HUAWEI",
    deviceSN: "I11026179c176070000221",
    deviceName: "4G TRG7144",
    alarmName: "FOO Grid Under Volt",
    time: 1267334570,
  },
  {
    siteID: "CNT6708-NB1P4",
    company: "BMA",
    area: "BMA1",
    vendor: "HUAWEI",
    deviceSN: "I110261077A3488550008821",
    deviceName: "CNT6708",
    alarmName: "FOO Grid Under Volt",
    time: 1213330286,
  },
  {
    siteID: "KCN6004-NB1P4",
    company: "BMA",
    area: "BMA1",
    vendor: "HUAWEI",
    deviceSN: "I1102610779C083140003321",
    deviceName: "4G KCN6004",
    alarmName: "F01 Grid Over Volt",
    time: 1326153675,
  },
  {
    siteID: "I1102610779C083140016021",
    company: "BMA",
    area: "BMA1",
    vendor: "HUAWEI",
    deviceSN: "NKS6734-NB1P4",
    deviceName: "4G NKS6734",
    alarmName: "F07 insulation Resistance Low",
    time: 1204528910,
  },
];

const headCells = [
  { id: "siteID", label: "Site ID" },
  { id: "company", label: "Company" },
  { id: "area", label: "Area" },
  { id: "vendor", label: "Vendor" },
  { id: "deviceSN", label: "Device Serial No." },
  { id: "deviceName", label: "Device Name" },
  { id: "alarmName", label: "Alarm Name" },
  { id: "time", label: "Date & Time" },
  // { id: 'department', label: 'Department', disableSorting: true },
];

const Alarm = () => {
  const [records, setRecords] = useState(mockData);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const [state, setState] = useState({
    checked: [],
    expanded: [],
  });

  useEffect(() => {
    console.log("state", state);
  }, [state]);

  const onCheck = (checked) => {
    console.log("checked", checked);
    setState({ expanded: state.expanded, checked: checked });
  };

  const onExpand = (expanded) => {
    setState({ expanded });
    console.log("expanded", expanded);
    // if(state.expanded.includes(...expanded)){
    //   state.expanded.splice(state.expanded.indexOf(...expanded),1)
    // } else {
    //   setState({ expanded: [...state.expanded, ...expanded], checked: state.checked });
    // }
  };

  const {
    // EnhancedTableToolbar,
    TableSection,
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  return (
    <AppLayout>
      <Paper title="Alarm List">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.12)",
              minWidth: "180px",
              padding: "20px 10px",
            }}
          >
            <CheckboxTree
              nodes={nodes}
              checked={state.checked}
              expanded={state.expanded}
              onCheck={onCheck}
              onExpand={onExpand}
              // showNodeTitle={true}
              showNodeIcon={false}
              icons={{
                check: <CheckBox style={{ fontSize: "14" }} />,
                uncheck: <CheckBoxOutlineBlank style={{ fontSize: "14" }} />,
                halfCheck: <CheckBoxOutlineBlank style={{ fontSize: "14" }} />,
                expandClose: <ArrowRight />,
                expandOpen: <ArrowDropDown />,
                expandAll: <ArrowRight />,
                // collapseAll: <FlightTakeoffIcon />,
                parentClose: <Home />,
                parentOpen: <Home />,
                // leaf: <FlightTakeoffIcon />
              }}
            />
          </div>
          <TableSection>
            {/* <EnhancedTableToolbar /> */}
            <TblContainer>
              <TblHead />
              <TableBody>
                {recordsAfterPagingAndSorting().map((item) => (
                  <TableRow key={item.deviceSN}>
                    <TableCell align="center">{item.siteID}</TableCell>
                    <TableCell align="center">{item.company}</TableCell>
                    <TableCell align="center">{item.area}</TableCell>
                    <TableCell align="center">{item.vendor}</TableCell>
                    <TableCell align="center">{item.deviceSN}</TableCell>
                    <TableCell align="center">{item.deviceName}</TableCell>
                    <TableCell>{item.alarmName}</TableCell>
                    <TableCell align="center">
                      {moment(item.time).format("YYYY-MM-D HH:mm:ss")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TblContainer>
            <TblPagination />
          </TableSection>
        </div>
      </Paper>
    </AppLayout>
  );
};

export default Alarm;
