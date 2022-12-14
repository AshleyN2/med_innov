import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const HospitalSignUp = ({setHospital}) => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/hospitalsignup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          name,
          email,
          location,
          password,
          password_confirmation,
          image_url: imageUrl
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
          <h1>Hospital SignUp</h1>
        </div>
        </div>
        <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <input type='text' placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-group">
              <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <input type='password' placeholder='password_confirmation' value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </div>
            <div className="form-group">
              <input type='text' placeholder='image_url' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </div>
            {
              errors.map((error) => {
                return <p>{error}</p>
              }
              )
            }
            <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button> 
            </div>
          </form>
          <p>
            Already have an account? <a href='/hospital_login'>LogIn</a>
          </p>
        </div>
        </div>

    </div>
  )
}

export default HospitalSignUp