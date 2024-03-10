import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Navbar from './pages/components/Navbar';
import Thread from './pages/Thread';
import Profile from './pages/components/Profile';

function App() {
  return (
    <Router>
      <nav>
        <Navbar/>
      </nav>
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/thread" element={<Thread/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
