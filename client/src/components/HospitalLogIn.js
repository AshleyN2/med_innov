import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const HospitalLogIn = ({setHospital}) => {

  const navigate = useNavigate()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errors,setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/hospitallogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          email,
          password
        }
      )
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          setErrors(data.errors)
        } else {
          console.log(data)
          setHospital(data)
          navigate('/hospital_dashboard')
        }
      }
      )
  }



  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Hospital LogIn</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {
              errors.map((error) => {
                return <p>{error}</p>
              }
              )
            }
            <div className="form-group">
              <button type='submit' className="btn btn-primary">LogIn</button>
            </div>
            <div className="form-group">
              <p>
                Don't have an account? <button onClick={() => navigate('/hospital_signup')}>Sign Up</button>
              </p>
              </div>
          </form>
          </div>
          </div>


    </div>
  )
}

export default HospitalLogIn