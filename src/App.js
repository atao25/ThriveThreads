import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Navbar from './pages/components/Navbar';

function App() {
  return (
    <Router>
      <nav>
        <Navbar/>
      </nav>
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        {/* <div className="cmdf">
          <Home />
        
        </div> */}
      </Routes>
    </Router>
  );
}

export default App;
