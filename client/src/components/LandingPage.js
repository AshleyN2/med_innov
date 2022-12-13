import React from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()
return (
    <div>
        <h1>Landing Page</h1>
        <button onclick={ () => {navigate('/patient_login')}}>Patient Login</button>
        <button  onclick={ () => {navigate('/hospital_login')}}>Hospital Login</button>
    </div>
  )
}

export default LandingPage