import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

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
    <div>
      <h1>Patient LogIn</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        {
          errors.map((error) => {
            return <p>{error}</p>
          }
          )
        }
        <button type='submit'>LogIn</button>
        <p>
          Don't have an account? <button onClick={() => navigate('/patient_signup')}>Sign Up</button>
        </p>
      </form>
    </div>
  )
}

export default PatientLogIn