import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const PatientSignUp = ({setPatient}) => {

  const navigate = useNavigate()


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [location, setLocation] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [errors, setErrors] = useState([])

  const handleGenderChange = (e) => {
    if (e.target.value === "male") {
      setGender("male")
    } else if (e.target.value === "female") {
      setGender("female")
    } else if (e.target.value === "other") {
      setGender("other")
    }
  }




  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/patientsignup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          name,
        email,
        password,
        password_confirmation,
        location,
        gender,
        age
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
    <div className='container'>
      {/* Bootstrap */}
      <div className="row">
        <div className="col-12">
          <h1>Patient SignUp</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password_confirmation">Password Confirmation</label>
              <input type="password" className="form-control" id="password_confirmation" placeholder="Password Confirmation" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input type="text" className="form-control" id="location" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender"
              onChange={handleGenderChange}
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" className="form-control" id="age" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            {
              errors.map(error => {
                return <p key={error}>{error}</p>
              }
              )
            }
            <button type="submit" className="btn btn-primary">Submit</button>
            <p>
              Already have an account? <a href="/patient_login">Log In</a>
            </p>
          </form>
          </div>
          </div>


    </div>
  )
}

export default PatientSignUp