import React,{useState} from 'react'
import {useNavigate, useParams } from 'react-router-dom'

const AppointmentForm = ({patient,hospitals}) => {

    const navigate = useNavigate()
    const params = useParams()

    const[date, setDate] = useState('')
    const [diagnosis, setDiagnosis] = useState('')
    const [errors, setErrors] = useState([])

    const hospital = hospitals.find(hospital => hospital.id === parseInt(params.id))

    const handsubmit = (e) => {
        e.preventDefault()
        fetch('/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    patient_id: patient.id,
                    hospital_id: hospital.id,
                    date: date,
                    diagnosis: diagnosis
                }
            )
        })
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                console.log(data)
                navigate('/my_appointments')
                window.location.reload()
            }
        }
        )
    }

console.log(errors)

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Appointment Form</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={handsubmit}>
                    <div className="form-group">
                        <input type='date' placeholder='date' value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type='text' placeholder='diagnosis' value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type='submit' value='Submit' />
                    </div>
                </form>
                </div>
                </div>
        
    </div>
  )
}

export default AppointmentForm