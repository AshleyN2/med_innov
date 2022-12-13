import './App.css';
import React,{useState, useEffect} from 'react';
import LandingPage from './components/LandingPage';
import PatientLogin from './components/PatientLogin';
import PatientHomePage from './components/PatientHomePage';
import PatientSignup from './components/PatientSignup'
import HospitalLogin from './components/HospitalLogin'
import HospitalSignup from './components/HospitalSignup'
import {Routes, Route} from 'react-router-dom'

function App() {

  // patient

  const [patient, setPatient] = useState([])

  const getPatient = async () => {
    const response = await fetch('/patient')
    const data = await response.json()
    setPatient(data)
  }

  useEffect(() => {
    getPatient()
  }, [])

  // hospital

  const [hospital, setHospital] = useState([])
  const getHospital = async () => {
    const response = await fetch('/hospital')
    const data = await response.json()
    setHospital(data)
  }

  useEffect(() => {
    getHospital()
  }, [])

  // hospitals

  const [hospitals, setHospitals] = useState([])
  const getHospitals = async () => {
    const response = await fetch('/hospitals')
    const data = await response.json()
    setHospitals(data)
  }

  useEffect(() => {
    getHospitals()
  }, [])

  return (
    <div className="App">
      <Routes>
        < Route path='/' element={<LandingPage/>} />
        < Route path='/patient_login' element={<PatientLogin setPatient={setPatient} />} />
        < Route path='/patient_homepage' element={<PatientHomePage setPatient={setPatient} hospitals={hospitals} patient={patient} />} />
        < Route path='/hospital_login' element={<HospitalLogin setHospital={setHospital}  />} />
      </Routes>
    
    </div>
  );
}

export default App;
