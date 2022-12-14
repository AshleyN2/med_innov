import React from 'react'
import { useNavigate} from 'react-router-dom'
import '../css/PatientHomePage.css'


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
       <div style={{backgroundColor : "lightblue" }}
       className="container">
        <div className="row">
            <div className="col-12">
                <h1>Patient Home Page</h1>
                <span>
                    <button className="btn me-5 btn-outline-primary " onClick={handleLogOut}>Log Out</button>
                    <a href="/my_appointments">My appointments</a>
                </span>
            </div>
        </div>
        <div className="row">
            <div className="mb-1 mt-3 col-12">
                <h5>Hello {patient.name}, welcome!</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-12 mb-1 mt-2">
                <h5>Here are the hospitals in your area:</h5>
            </div>
        </div>
        <div className="row">
            {
                hospitals &&  hospitals.map(
                    (hospital) => {
                        return(
                            hospital && hospital.location === patient.location &&
                            <div key={hospital.id} className="col-lg-3 col-sm-6 mb-3">
                            {/* Bootstrap card */}
                            <div className="card h-100  card-effect">
                            <img  src={hospital.image_url} alt={hospital.name}/>
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
            <div className="col-12 mb-3 mt-3">
                <h5>Other Hospitals:</h5>
            </div>
        </div>
        <div className="row ">
            {
                hospitals.map(
                    (hospital) => {
                        return(
                            hospital && hospital.location !== patient.location &&
                            <div key={hospital.id} className="col-lg-3 col-sm-6 mb-3">
                            {/* Bootstrap card */}
                            <div className="card h-100 card-effect">
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