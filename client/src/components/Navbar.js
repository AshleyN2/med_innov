import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = ({ user, setUser }) =>{
  const navigate = useNavigate()
return (
    <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-black">
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#clinicalservices">
                Clinical Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#board">
                Management Board
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
          <button className="btn btn-primary ms-lg-3">Book Appointment</button>
        </div>
        </div>
    </nav>
 
    )
}

export default Navbar