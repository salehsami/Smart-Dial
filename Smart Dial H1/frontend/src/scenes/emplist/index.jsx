import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Side from "../global/Side";
import Topbar from "../global/Topbar";

import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@mui/material";

const StyledTableHead = styled(TableHead)`
  background-color: #3e4396;
  color: white;
`;

const StyledTableBody = styled(TableBody)`
  background-color: #1f2a40;
  color: white;
`;

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [isSide, setIsSide] = useState(true);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/employee"
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleUpdate = (employeeId) => {
    // Handle update logic for the selected employee
    console.log("Update employee with ID:", employeeId);
  };

  const handleDelete = async (employeeId) => {
    try {
      // Send a DELETE request to the backend API
      await axios.delete(`http://localhost:8080/api/employee/${employeeId}`);

      // Remove the deleted employee from the table
      const updatedEmployees = employees.filter(
        (employee) => employee._id !== employeeId
      );
      setEmployees(updatedEmployees);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    
       <div className="app">
      <Side isSide={isSide} />
      <main className="content">
        <Topbar setIsSide={setIsSide} />
        <Box m="20px">
          <Header title="EMPLOYEE" subtitle="Employee's list" />
      
      <TableContainer component={Paper}>
        <Table>
          <StyledTableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {employees.map((employee) => (
              <TableRow key={employee._id}>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.contact}</TableCell>
                <TableCell>{employee.salary}</TableCell>
                <TableCell>{employee.address}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpdate(employee._id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(employee._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </StyledTableBody>
        </Table>
      </TableContainer>
    </Box>
    </main>
    </div>
  );
};

export default Employee;
