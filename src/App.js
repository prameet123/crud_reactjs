import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import EditUser from './components/EditUser';
import CodeForInterview from './components/CodeForInterview';
import DataTable from './components/DataTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />  
      <Routes>
        <Route path="/add-user" element={<AddUsers />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/" element={<DataTable />} />
      </Routes>
    </Router>
  );
}

export default App;
