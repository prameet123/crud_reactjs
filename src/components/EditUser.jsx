import {
	FormGroup,
	InputLabel,
	Input,
	styled,
	Button,
	FormControl,
	Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { editUser, getUser } from '../service/api.js';

const Container = styled(FormGroup)`
	width: 50%;
	margin: 5% auto 0 auto;
	& > div {
		margin-top: 20px;
	}
`;

const initialValue = {
	firstName: '',
	lastName: '',
	mobileNumber: '',
	email: '',
};

const EditUser = () => {
	const [user, setUser] = useState(initialValue);
	const [error, setError] = useState([]);
	const { id } = useParams();
	const getUserDetail = async () => {
		const response = await getUser(id);
		setUser(response?.data);
	};
	useEffect(() => {
		getUserDetail();
		// eslint-disable-next-line
	}, []);

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
		await editUser(id, user);
		navigate('/all-users');
	};
	return (
		<Container>
			<Typography variant="h3">Edit User</Typography>
			<FormControl>
				<InputLabel>First Name</InputLabel>
				<Input onChange={(e) => onChangeValue(e)} name="firstName" value={user.firstName} />
				{error.firstName && (
					<Typography variant="caption" color="error">
						{error.firstName}
					</Typography>
				)}
			</FormControl>
			<FormControl>
				<InputLabel>Last Name</InputLabel>
				<Input onChange={(e) => onChangeValue(e)} name="lastName" value={user.lastName} />
				{error.lastName && (
					<Typography variant="caption" color="error">
						{error.lastName}
					</Typography>
				)}
			</FormControl>
			<FormControl>
				<InputLabel>Mobile Number</InputLabel>
				<Input onChange={(e) => onChangeValue(e)} name="mobileNumber" value={user.mobileNumber} />
				{error.mobileNumber && (
					<Typography variant="caption" color="error">
						{error.mobileNumber}
					</Typography>
				)}
			</FormControl>
			<FormControl>
				<InputLabel>Email ID</InputLabel>
				<Input onChange={(e) => onChangeValue(e)} name="email" value={user.email} />
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
export default EditUser;
