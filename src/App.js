import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';


// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Companies from './pages/Companies';
import Apptitude from './pages/Apptitude';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Registration" element={<Registration/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Companies" element={<Companies/>} />
            <Route path="/Apptitude" element={<Apptitude/>} />


          </Routes>

      </Router>
    </>
  );
}

export default App;
