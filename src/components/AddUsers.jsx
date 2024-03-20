import {
  FormGroup,
  InputLabel,
  Input,
  styled,
  Button,
  FormControl,
  Typography,
} from "@mui/material";

import { useState } from "react";
import {addUser} from '../service/addUserApi'

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
  const onChangeValue = (value) => {
    console.log(value.target.name, value.target.value);
    setUser({...initialValue,[value.target.name]:value.target.value})
  
  };
  const userDetails = async()=>{
    await addUser(user);
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
