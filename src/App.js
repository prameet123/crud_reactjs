import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import CodeForInterview from './components/CodeForInterview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/add-user" element={<AddUsers />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/" element={<CodeForInterview />} />
      </Routes>
    </Router>
  );
}

export default App;
