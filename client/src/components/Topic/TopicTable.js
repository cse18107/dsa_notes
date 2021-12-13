import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Link} from 'react-router-dom';

function createData(id, topic, name, link, solved, solution) {
  return { id, topic, name, link, solved, solution };
}

const rows = [
  createData(1, "Array", "Reverse the array", "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/", false, false),
  createData(
    2,
    "Array",
    "Find the maximum and minimum element in an array",
    "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
    true,
    false
  ),
  createData(
    3,
    "Array",
    "Find the Kth max and min element of an array ",
    "https://practice.geeksforgeeks.org/problems/kth-smallest-element/0",
    false,
    false
  ),
  createData(
    4,
    "Array",
    "Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo",
    "https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0",
    false,
    false
  ),
  createData(
    5,
    "Array",
    "Move all the negative elements to one side of the array ",
    "https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/",
    true,
    false
  ),
];

var res=rows.filter((row)=>row.topic==="Array");


function TopicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h2 style={{"color":"blue"}}>ID</h2></TableCell>
            <TableCell align="right"><h2 style={{"color":"blue"}}>Topic</h2></TableCell>
            <TableCell align="right"><h2 style={{"color":"blue"}}>Name</h2></TableCell>
            <TableCell align="right"><h2 style={{"color":"blue"}}>Solved</h2></TableCell>
            <TableCell align="right"><h2 style={{"color":"blue"}}>Solution</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {res.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <h3>{row.id}</h3>
              </TableCell>
              <TableCell align="right"><h3>{row.topic}</h3></TableCell>
              <TableCell align="right"><h3><a style={{"text-decoration":"none" , "font-size":"1.1rem"}} href={row.link} rel="noopener noreferrer" true target={"_blank"}>{row.name}</a></h3></TableCell>
              <TableCell align="right">
                {row.solved ? (
                  <input
                    style={{ height: "22px", width: "22px" }}
                    checked
                    type="checkbox"
                  />
                ) : (
                  <input
                    style={{ height: "22px", width: "22px" }}
                    type="checkbox"
                  />
                )}
              </TableCell>
              <TableCell align="right">button</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TopicTable;
