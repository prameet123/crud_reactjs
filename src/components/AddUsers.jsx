import {
	FormGroup,
	InputLabel,
	Input,
	Button,
	FormControl,
	Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addUser } from '../service/api.js';
import Loader from './Loader.jsx';
import styled from 'styled-components';
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
    position: relative; /* Ensure position relative for absolute positioning */
  }
`;

const initialValue = {
	firstName: '',
	lastName: '',
	mobileNumber: '',
	email: '',
};
const LoaderContainer = styled.div` // Update styled.div to div
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const AddUsers = () => {
	const [user, setUser] = useState(initialValue);
	const [error, setError] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const onChangeValue = (value) => {
		setUser({ ...user, [value.target.name]: value.target.value });
	};
	const userDetails = async () => {
		if (!user.firstName || user.firstName.length === 0) {
			setError({ firstName: 'first name blank' });
			return false;
		}
		if (!user.lastName || user.lastName.length === 0) {
			setError({ lastName: 'lastName name blank' });
			return false;
		}
		if (!user.mobileNumber || user.mobileNumber.length === 0) {
			setError({ mobileNumber: 'Mobile Number blank' });
			return false;
		}
		if (!user.email || user.email.length === 0) {
			setError({ email: 'Email is blank' });
			return false;
		}
		setIsLoading(true);
		try {
			const response = await addUser(user);
				if (response) {
				setIsLoading(false);
				navigate('/all-users');
			}
		} catch (error) {
			console.error('Error adding user:', error);
			setIsLoading(false);
		}
	};
	return (
		<Container>
			<Typography variant="h3">Add User</Typography>
      <div>
        {isLoading && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
      </div>
			<FormControl>
				<InputLabel>First Name</InputLabel>
				<Input onChange={(e) => onChangeValue(e)} name="firstName" error={!!error.firstName} />
				{error.firstName && (
					<Typography variant="caption" color="error">
						{error.firstName}
					</Typography>
				)}
			</FormControl>
			<FormControl>
				<InputLabel>Last Name</InputLabel>
				<Input onChange={(e) => onChangeValue(e)} name="lastName" error={!!error.lastName} />
				{error.lastName && (
					<Typography variant="caption" color="error">
						{error.lastName}
					</Typography>
				)}
			</FormControl>
			<FormControl>
				<InputLabel>Mobile Number</InputLabel>
				<Input
					onChange={(e) => onChangeValue(e)}
					name="mobileNumber"
					error={!!error.mobileNumber}
				/>
				{error.mobileNumber && (
					<Typography variant="caption" color="error">
						{error.mobileNumber}
					</Typography>
				)}
			</FormControl>
			<FormControl>
				<InputLabel>Email ID</InputLabel>
				<Input onChange={(e) => onChangeValue(e)} name="email" error={!!error.email} />
				{error.email && (
					<Typography variant="caption" color="error">
						{error.email}
					</Typography>
				)}
			</FormControl>
			<FormControl>
				<Button onClick={() => userDetails()} variant="contained">
					Submit
				</Button>
			</FormControl>
		</Container>
	);
};
export default AddUsers;
