import React from 'react'
import { useNavigate} from 'react-router-dom'


const PatientHomePage = ({setPatient, patient, hospitals}) => {

    const navigate = useNavigate()

    function handleLogOut(){
        fetch('/patientlogout', {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPatient([])
            navigate('/')
        })
    }

  return (
    <div>
       <div className="container">
        <div className="row">
            <div className="col-12">
                <h1>PatientHomePage</h1>
                <span>
                    <button onClick={handleLogOut}>Log Out</button>
                    <a href="/my_appointments">My appointments</a>
                </span>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h5>Hello {patient.name}</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h5>Here are the hospitals in your area</h5>
            </div>
        </div>
        <div className="row">
            {
                hospitals.map(
                    (hospital) => {
                        return(
                            hospital && hospital.location === patient.location &&
                            <div key={hospital.id} className="col-lg-3 col-md-6 mb-4">
                            {/* Bootstrap card */}
                            <div className="card h-100">
                            <img className="card-img-top" src={hospital.image_url} alt={hospital.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{hospital.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{hospital.location}</h6>
                                    <button onClick={()=>{navigate(`/appointment_form/${hospital.id}`)}} className="btn btn-primary">Book appointment</button>
                                </div>
                            </div>
                        </div>
                        )
                    }

                )
            }
        </div>
        <div className="row">
            <div className="col-12">
                <h5>Other Hospitals</h5>
            </div>
        </div>
        <div className="row">
            {
                hospitals.map(
                    (hospital) => {
                        return(
                            hospital && hospital.location !== patient.location &&
                            <div key={hospital.id} className="col-lg-3 col-md-6 mb-4">
                            {/* Bootstrap card */}
                            <div className="card h-100">
                            <img className="card-img-top" src={hospital.image_url} alt={hospital.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{hospital.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{hospital.location}</h6>
                                    <button onClick={()=>{navigate(`/appointment_form/${hospital.id}`)}} className="btn btn-primary">Book appointment</button>
                                </div>
                            </div>
                        </div>
                        )
                    }

                )
            }
        </div>
        
        
       </div>
    </div>
  )
}

export default PatientHomePage