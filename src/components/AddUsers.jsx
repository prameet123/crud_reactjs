import {
  FormGroup,
  InputLabel,
  Input,
  styled,
  Button,
  FormControl,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {addUser} from '../service/api.js'

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialValue = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
};

const AddUsers = () => {
  const [user, setUser ] = useState(initialValue);
  const navigate = useNavigate();
  const onChangeValue = (value) => {
    setUser({...user,[value.target.name]:value.target.value})
  
  };
  const userDetails = async()=>{
    await addUser(user);
    navigate('/all-users');
  }
  return (
    <Container>
      <Typography variant="h3">Add User</Typography>
      <FormControl>
        <InputLabel>First Name</InputLabel>
        <Input onChange={(e) => onChangeValue(e)} name="firstName"/>
      </FormControl>
      <FormControl>
        <InputLabel>Last Name</InputLabel>
        <Input onChange={(e) => onChangeValue(e)} name="lastName"/>
      </FormControl>
      <FormControl>
        <InputLabel>Mobile Number</InputLabel>
        <Input onChange={(e) => onChangeValue(e)} name="mobileNumber"/>
      </FormControl>
      <FormControl>
        <InputLabel>Email ID</InputLabel>
        <Input onChange={(e) => onChangeValue(e)} name="email"/>
      </FormControl>
      <FormControl>
        <Button onClick={()=>userDetails()} variant="contained">Submit</Button>
      </FormControl>
    </Container>
  );
};
export default AddUsers;
