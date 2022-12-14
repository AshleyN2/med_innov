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
    <div style={{backgroundColor : "lightblue" }}
    className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Appointment Form</h1>
            </div>
        </div>
        <div style={{backgroundColor : "lightyellow" }}
        className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={handsubmit}>
                    <div className="form-control mb-3 col-md-5">
                        <input type='date' placeholder='date' value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="form-control mb-3 col-md-5">
                        <input type='text' placeholder='Ailment' value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
                    </div>

                    <div >
                        <button type="submit" className="btn ms-4 mt-2 btn-primary" onClick={() => navigate('/my_appointments')}>Submit</button>
                    </div>
                    
                </form>
                </div>
                </div>
        
    </div>
  )
}

export default AppointmentForm