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
		await editUser(id, user);
		navigate('/all-users');
	};
	return (
		<Container>
			<Typography variant="h3">Edit User</Typography>
			<FormControl>
				<InputLabel>First Name</InputLabel>
				<Input onChange={(e) => onChangeValue(e)} name="firstName" value={user.firstName} />
			</FormControl>
			<FormControl>
				<InputLabel>Last Name</InputLabel>
				<Input onChange={(e) => onChangeValue(e)} name="lastName" value={user.lastName} />
			</FormControl>
			<FormControl>
				<InputLabel>Mobile Number</InputLabel>
				<Input onChange={(e) => onChangeValue(e)} name="mobileNumber" value={user.mobileNumber} />
			</FormControl>
			<FormControl>
				<InputLabel>Email ID</InputLabel>
				<Input onChange={(e) => onChangeValue(e)} name="email" value={user.email} />
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
