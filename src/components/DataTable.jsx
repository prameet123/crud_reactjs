import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../service/api';




export default function DataTable() {
    
    const [users, setUser] = useState([]);
	useEffect(() => {
		getUserDetails();
	}, []);
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'mobileNumber',
          headerName: 'mobileNumber',
          width: 90,
        },
        {
          field: 'email',
          headerName: 'email',
          description: 'This column has a value getter and is not sortable.',
          width: 260,
        },
        {
          field: 'actiom',
          headerName: 'Action',
          description: 'This column has a value getter and is not sortable.',
          width: 320,
          renderCell: (params) => (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link} // Use Link component for navigation
                  to={`/edit-user/${params.row.id}`} // Access id from params
                  style={{ marginRight: 10 }}
                  
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  onClick={() => deleteUserButton(params.row.id)}  // Call deleteUserButton with id
                >
                  Delete
                </Button>
              </>
            )
        },
      ];
      
	const getUserDetails = async () => {
		const response = await getUsers();
		setUser(response.data);
	};
	const deleteUserButton = async (id) => {
        try {
          await deleteUser(id);
          await getUserDetails();
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      };
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
