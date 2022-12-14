import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
return (
    <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white">
        <div className="container">
            <a className="navbar-brand">
                <img className="logo" src="2logo.png" alt="" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={ () => {navigate('/patient_login')}}
            >
                <span className="navbar-toggler-icon" />
                </button>
        </div>
    </nav>
 
    )
}

export default Navbar