import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,ButtonGroup } from '@mui/material'; // Import Dialog components
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../service/api';

export default function DataTable() {
	const [users, setUsers] = useState([]);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false); // State for delete dialog
	const [selectedUserId, setSelectedUserId] = useState(null); // State to store selected user ID

	useEffect(() => {
		getUserDetails();
	}, []);

	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'firstName', headerName: 'First name', width: 130 },
		{ field: 'lastName', headerName: 'Last name', width: 130 },
		{ field: 'mobileNumber', headerName: 'Mobile Number', width: 90 },
		{ field: 'email', headerName: 'Email', width: 260 },
		{
			field: 'action',
			headerName: 'Action',
			width: 320,
			renderCell: (params) => (
				<ButtonGroup>
					<Button
						variant="contained"
						color="secondary"
						component={Link}
						to={`/edit-user/${params.row.id}`}
						style={{ marginRight: 10 }}
					>
						Edit
					</Button>
					<Button
						variant="contained"
						onClick={() => handleDeleteDialogOpen(params.row.id)} // Open delete dialog with user ID
					>
						Delete
					</Button>
				</ButtonGroup>
			),
		},
	];

	const getUserDetails = async () => {
		try {
			const response = await getUsers();
			setUsers(response.data);
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	};

	const handleDeleteDialogOpen = (id) => {
		setSelectedUserId(id); // Set selected user ID
		setDeleteDialogOpen(true); // Open delete dialog
	};

	const handleDeleteDialogClose = () => {
		setDeleteDialogOpen(false); // Close delete dialog
	};

	const deleteUserButton = async () => {
		try {
			await deleteUser(selectedUserId); // Delete user using selected user ID
			await getUserDetails(); // Refresh user data
			setDeleteDialogOpen(false); // Close delete dialog
		} catch (error) {
			console.error('Error deleting user:', error);
		}
	};

	return (
		<div style={{ height: '100%', width: '100%' }}>
			<DataGrid
				rows={users}
				columns={columns}
				initialState={{
					pagination: {
						page: 0,
						pageSize: 5,
					},
				}}
				pageSizeOptions={[5, 10]}
				checkboxSelection
			/>

			{/* Delete Dialog */}
			<Dialog
				open={deleteDialogOpen}
				onClose={handleDeleteDialogClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Delete User</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Are you sure you want to delete this user?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleDeleteDialogClose} color="primary">
						Cancel
					</Button>
					<Button onClick={deleteUserButton} color="primary" autoFocus>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
