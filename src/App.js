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
import ScrollToTop from './components/ScrollToTop';
import Subjects from './pages/Subjects';
import Footer from './components/Footer';
import Quants from './pages/Quants';
import Logical from './pages/Logical';
import Verbal from './pages/Verbal';
import Accenture from './pages/Accenture';
import Deloitte from './pages/Deloitte';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Registration" element={<Registration/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Companies" element={<Companies/>} />
            <Route path="/Apptitude" element={<Apptitude/>} />
            <Route path="/Subjects" element={<Subjects/>}/>
            <Route path="/Quants" element={<Quants/>}/>
            <Route path="/Logical" element={<Logical/>}/>
            <Route path="/Verbal" element={<Verbal/>}/>
            <Route path="/Accenture" element={<Accenture/>}/>
            <Route path="/Deloitte" element={<Deloitte/>}/>



          </Routes>
          <Footer/>

      </Router>
    </>
  );
}

export default App;
