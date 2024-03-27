import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';
const TableCss = styled(Table)`
	width: 90%;
	margin: 50px auto 0 auto;
`;
const Thead = styled(TableRow)`
	background: #000;
	& > th {
		color: #fff;
		font-size: 20px;
	}
`;
const Tbody = styled(TableRow)`
	& > td {
		font-size: 20px;
	}
`;
const AllUsers = () => {
	const [users, setUser] = useState([]);
	useEffect(() => {
		getUserDetails();
	}, []);

	const getUserDetails = async () => {
		const response = await getUsers();
		setUser(response.data);
	};
	const deleteUserButton = async (id) => {
		await deleteUser(id);
		await getUserDetails();
	};
	return (
		<TableCss>
			<TableHead>
				<Thead>
					<TableCell>ID</TableCell>
					<TableCell>First Name</TableCell>
					<TableCell>Last Name</TableCell>
					<TableCell>Mobile Number</TableCell>
					<TableCell>Email</TableCell>
					<TableCell>Action</TableCell>
				</Thead>
			</TableHead>
			<TableBody>
				{users.map((user) => (
					<Tbody>
						<TableCell>{user.id}</TableCell>
						<TableCell>{user.firstName}</TableCell>
						<TableCell>{user.lastName}</TableCell>
						<TableCell>{user.mobileNumber}</TableCell>
						<TableCell>{user.email}</TableCell>
						<TableCell>
							
							<Button
								variant="contained"
								color="secondary"
								component={Link}
								to={`/edit-user/${user.id}`}
                style={{ marginRight: 10 }}>
								Edit
							</Button>
              <Button
								variant="contained"
								
								onClick={() => deleteUserButton(user.id)}
							>
								Delete
							</Button>
						</TableCell>
					</Tbody>
				))}
			</TableBody>
		</TableCss>
	);
};
export default AllUsers;
