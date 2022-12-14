import React from 'react'
import {useNavigate} from 'react-router-dom'

const MyAppointments = ({patient}) => {

  const navigate = useNavigate()


  return (
    <div style={{backgroundColor : "lightblue" }}>
      <h1>My Appointments</h1>
      <button className="btn ms-4 mt-2 btn-primary" onClick={() => navigate('/patient_homepage')}>Back to Home</button>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Hospital</th>
            <th scope="col">Date</th>
            <th scope="col">Diagnosis</th>
          </tr>
        </thead>
        <tbody>
          {
           patient.appointments && patient.appointments.map((appointment) => {

            // date to only have year, month, and day
            const date = new Date(appointment.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            appointment.date = `${year}-${month}-${day}`

            
              return (
                <tr key={appointment.id}>
                  <td>{appointment.hospital.name}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.diagnosis}</td>
                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyAppointments