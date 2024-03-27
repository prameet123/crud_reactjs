import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { getUsers } from "../service/api";

const AllUsers = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    const response = await getUsers();
    setUser(response.data);
    console.log(response);
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Mobile Number</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell >{user.id}</TableCell>
            <TableCell >{user.firstName}</TableCell>
            <TableCell >{user.lastName}</TableCell>
            <TableCell >{user.mobileNumber}</TableCell>
            <TableCell >{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default AllUsers;
