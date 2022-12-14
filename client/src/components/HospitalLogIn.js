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
    <div style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
    }}
    className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-2 mb-3 ">
          <h1>Hospital Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3 ">
          <form onSubmit={handleSubmit}>
            <div className="form-group ">
              <input className='ms-3 mb-3' type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <input className='ms-3 mb-3' type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {
              errors.map((error) => {
                return <p>{error}</p>
              }
              )
            }
            <div className="form-group">
              <button type='submit' className="btn ms-3  btn-primary">Login</button>
            </div>
            <div className="form-group">
              <p>
                Don't have an account? <button className="btn ms-3 btn-primary"  onClick={() => navigate('/hospital_signup')}>Sign Up</button>
              </p>
              </div>
          </form>
          </div>
          </div>


    </div>
  )
}

export default HospitalLogIn