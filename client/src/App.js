import React,{useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import PatientLogIn from './components/PatientLogIn';
import PatientSignUp from './components/PatientSignUp';
import HospitalLogIn from './components/HospitalLogIn';
import HospitalSignUp from './components/HospitalSignUp';
import PatientHomePage from './components/PatientHomePage';
import HospitalDashboard from './components/HospitalDashboard';
import AppointmentForm from './components/AppointmentForm';
import MyAppointments from './components/MyAppointments';


function App() {

  // patient

  const [patient, setPatient] = useState([])

  const getPatient = async () => {
    const response = await fetch(`/patients/${patient.id}`)
    const data = await response.json()
    setPatient(data)
  }

  useEffect(() => {
    getPatient()
  }, [])

  // hospital

  const [hospital, setHospital] = useState([])
  const getHospital = async () => {
    const response = await fetch(`/hospitals/${hospital.id}`)
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
      <Navbar/>
      <Routes>
        < Route path='/' element={<LandingPage/>} />
       
        < Route path='/patient_login' element={<PatientLogIn setPatient={setPatient} />} />
        < Route path='/patient_signup' element={<PatientSignUp  setPatient={setPatient} />} />
        < Route path='/hospital_login' element={<HospitalLogIn setHospital={setHospital}  />} />
        < Route path='/hospital_signup' element={<HospitalSignUp setHospital={setHospital}   />} />
        < Route path='/patient_homepage' element={<PatientHomePage setPatient={setPatient} hospitals={hospitals} patient={patient} />} />
        < Route path='/hospital_dashboard' element={<HospitalDashboard setHospital={setHospital} hospital={hospital} />} />
        < Route path='/appointment_form/:id' element={<AppointmentForm setPatient={setPatient} patient={patient} hospitals={hospitals} setHospital={setHospital} />} />
        < Route path='/my_appointments' element={<MyAppointments patient={patient} />} />
      </Routes>
    
    </div>
  );
}

export default App;