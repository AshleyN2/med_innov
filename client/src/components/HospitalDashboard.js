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
        <h1 className='dash mt-3'> Hospital Dashboard</h1>
        <h4 className='hosp text-center'>{hospital.name}</h4>
        <p className='text-center'>Welcome to the {hospital.name} dashboard!</p>
        <p className='text-center'>Upon completion of the page, you can:</p>
        <p className='text-center'>You can view your patients and their appointments here.</p>
        <p className='text-center'>You can also add new patients and appointments.</p>
        <p className='text-center'>You can also edit and delete patients and appointments.</p>
        <p className='text-center'>You can also view your profile and edit it.</p>
        <p className='text-center'>You can also view your appointments and edit them.</p>
        
        <span>
            <button className="btn  ms-4 btn-primary" onClick={handleLogout}>LogOut</button>
        </span>
    </div>
  )
}

export default HospitalDashboard