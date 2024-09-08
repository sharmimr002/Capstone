import './App.css';
import './Style/Style.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Contact from './Components/Contact';
// import CreateUser from './Components/CreateUser';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CreateUser from './Components/CreateUser';
import TicketForm from './Components/TicketForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} exact/>
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/signup" element={<CreateUser />} />
        <Route path="/createTicket" element={<TicketForm />} />
      </Routes>
    </Router>
  );
}

export default App;
