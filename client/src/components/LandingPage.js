import React from 'react'
import { useNavigate } from 'react'



function LandingPage() {
  const navigate = useNavigate()
  return (
    <div>

        <button onclick={()=>{navigate('/patient_login')}}>Patient Login</button>
        <button  onclick={()=>{navigate('/hospital_login')}}>Hospital Login</button>
    </div>
  )


}

export default LandingPage