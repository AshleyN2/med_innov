import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/PatientLogin.css'

const PatientLogIn = ({setPatient}) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  // handlesubmit,seterrors and navigate to patient homepage

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/patientlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          email: email,
          password: password
        }
      )
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          setErrors(data.errors)
        } else {
          console.log(data)
          setPatient(data)
          navigate('/patient_homepage')
        }
      }
      )   
  }


  return (
    <div style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
    }}
    className="hero vh-100 d-flex align-items-center">
    <div style={{backgroundColor : ''}} 
    className="container mb-5 ">
      <h1 className='mt-1 mb-3' >Patient Login</h1>
      <h6>Enter your patient details below</h6>
      <form onSubmit={handleSubmit}>
        <input  className='ms-3'type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='m-3'type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        {
          errors.map((error) => {
            return <p>{error}</p>
          }
          )
        }
        <button className="btn ms-3 btn-primary" type='submit'>LogIn</button>
        <p>
          Don't have an account? <button className="btn ms-3 btn-primary"  onClick={() => navigate('/patient_signup')}>Sign Up</button>
        </p>
      </form>
    </div>
    </div>
  )
}

export default PatientLogIn