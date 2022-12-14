import React from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()
return (
    <div style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
    }}
    className="hero vh-100 d-flex align-items-center" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h1 className="display-4 text-black">
              Access healthcare services at ease.
              </h1>
              <p className="text-black my-3">
              Medical services &amp; expertise have never been this efficient!
              Providing world class healthcare with transparency. Be healthy, be
              happy.{" "}
              </p>
            <button  className="btn me-3 btn-primary" onClick={ () => {navigate('/patient_login')}}>Patient Login</button>
            <button  className="btn btn-outline-light" onClick={ () => {navigate('/hospital_login')}}>Hospital Login</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage