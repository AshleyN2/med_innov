import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = ({ user, setUser }) =>{
  const navigate = useNavigate()
return (
    <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-secondary">
        <div className="container">
        <a className="navbar-brand" href="#">
            <img className="logo" src="https://images.unsplash.com/photo-1612490566683-0b3ceabea435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" width="30" height="24" />
        </a>
            <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <h2 className="logo_rep logo_rep ">Med-Innov8.</h2>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light ms-2"
              onClick={ () => {navigate('/clinicalservices')}}> Clinical Services</button>
            </li>
            <li className="nav-item">
              <a href="/aboutus" className="btn btn-outline-light ms-3">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/board" className="btn btn-outline-light ms-3">
                Management Board
              </a>
            </li>
            <li className="nav-item">
              <a  href="/contact" className="btn btn-outline-light ms-3">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        </div>
    </nav>
 
    )
}

export default Navbar