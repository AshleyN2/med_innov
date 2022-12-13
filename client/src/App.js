import logo from './logo.svg';
import './App.css';
import PatientLogin from './components/PatientLogin'
import PatientSignup from './components/PatientSignup'
import HospitalLogin from './components/HospitalLogin'
import HospitalSignup from './components/HospitalSignup'
import LandingPage from './components/LandingPage'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
