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
    <div style={{backgroundColor : "lightblue" }}
    className='container '>
      {/* Bootstrap */}
      <div className="row ">
        <div className="col-md-6 mt-3 offset-md-3">
          <h1>Patient SignUp</h1>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6 mt-3 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-1 col-md-7">
              <input type="text" className="form-control" id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group mt-3 col-md-7">
              <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group mt-3 col-md-7">
              <input type="text" className="form-control" id="location" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-group ms-2 col-md-5 mb-4 ">
              <label htmlFor="gender">Gender</label>
              <select className="option ms-3 mt-3" name="gender" id="gender"
              onChange={handleGenderChange}
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <div className="form-group mt-3 col-md-4">
              <input type="number" className="form-control" id="age" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="form-group mt-3 col-md-7">
              <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group mt-3 col-md-7">
              <input type="password" className="form-control" id="password_confirmation" placeholder="Enter Password Confirmation" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </div>
            {
              errors.map(error => {
                return <p key={error}>{error}</p>
              }
              )
            }
            <button type="submit" className="btn ms-4 mt-5 btn-primary ">Submit</button>
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