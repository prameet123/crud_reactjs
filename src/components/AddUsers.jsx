import {FormGroup, InputLabel, Input,styled,Button, FormControl,Typography} from '@mui/material'

const Container= styled(FormGroup)`
 width:50%;
 margin: 5% auto 0 auto;
 & > div{
  margin-top: 20px;
 }
`
const AddUsers = ()=>{
 return (
    <Container>
      <Typography variant ="h3">Add User</Typography>
      <FormControl>
      <InputLabel>First Name</InputLabel>
      <Input/>
      </FormControl>
      <FormControl>
      <InputLabel>Last Name</InputLabel>
      <Input/>
      </FormControl>
      <FormControl>
      <InputLabel>Mobile Number</InputLabel>
      <Input/>
      </FormControl>
      <FormControl>
      <InputLabel>Email ID</InputLabel>
      <Input/>
      </FormControl>
      <FormControl>
      <Button variant="contained">Submit</Button>
      </FormControl>
    </Container>
 )
}
export default AddUsers;