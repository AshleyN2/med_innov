import React from 'react'
import { useNavigate } from 'react-router-dom'

const HospitalDashboard = ({setHospital,hospital}) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        fetch('/hospitallogout', {
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setHospital(null)
                navigate('/')
            })
    }

  return (
    <div>
        <h1> HospitalDashboard</h1>
        <span>
            <button onClick={handleLogout}>LogOut</button>
        </span>
        <h5>{hospital.name}</h5>
    </div>
  )
}

export default HospitalDashboard