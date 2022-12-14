import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/LandingPage.css'


function LandingPage() {
  const navigate = useNavigate()
return (
  <div id='page-top'>

    <div style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
    }}
    className="hero vh-100 d-flex align-items-center" id="home">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-7 mx-auto text-center ">
              <h1 className="display-4 text-black">
              Access healthcare services at ease.
              </h1>
              <p className="text-black my-3">
              Medical services &amp; expertise have never been this efficient!
              Providing world class healthcare with transparency. Be healthy, be
              happy.{" "}
              </p >
            <button  className="btn me-3 btn-primary" onClick={ () => {navigate('/patient_login')}}>Patient Login</button>
            <button  className="btn btn-outline-light" onClick={ () => {navigate('/hospital_login')}}>Hospital Login</button>
            </div>
          </div>
        </div>    
    </div>
   

    {/*SERVICES*/}
    <section id="clinicalservices">
      <div className="container ">
        <div className="row  ">
          <div className="col-md-8 mx-auto text-center ">
            <h6 className="text-primary ">CLINICAL SERVICES</h6>
            <h1>Our Services</h1>
            <p>
              Hospital services make up the core of a hospital's offerings. They
              are often shaped by the needs or wishes of its major users to make
              the hospital a one-stop / core institution of its local community or
              medical network. At Med-Innov8, we provide basic services and
              personnel in departments of medicine and surgery—that cater for
              clinical specific diseases and conditions, as well as emergency
              services.
            </p>
          </div>
        </div>
        {/*Outpatient*/}
        <div className="row g-4">
          <div className="col-lg-4 col-sm-6">
            {" "}
            {/*On larger devices it'll cover 4 column spaces & on smaller 6 col. spaces*/}
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bxs-clinic" />
              </div>
              <h5 className="mt-4 mb-2">Inpatient &amp; Outpatient</h5>
              <p>
                Round the clock patient monitoring &amp; care.Open 24/7 for
                walk-ins, admission, room and ward inquiries, check-ups &amp; high
                critical care.
              </p>
            </div>
          </div>
          {/*Pharmacy*/}
          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bxs-capsule" />
              </div>
              <h5 className="mt-4 mb-2">Pharmacy</h5>
              <p>
                Our pharmacy services are available to both inpatients and
                outpatients. 24/7 pharmacy services. Local and international
                prescriptions
              </p>
            </div>
          </div>
          {/*Accident & Emergency Services*/}
          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bxs-ambulance" />
              </div>
              <h5 className="mt-4 mb-2">Accident &amp; Emergency Services</h5>
              <p>
                Fully equipped for medical accidents and emergency care, with
                ambulances &amp; staff to handle complex trauma cases.
              </p>
            </div>
          </div>
          {/*Antenatal & Gynaecology*/}
          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bxs-donate-heart" />
              </div>
              <h5 className="mt-4 mb-2">Antenatal &amp; Gyneacology</h5>
              <p>
                Comprehensive care to mothers from conception, to pregnancy &amp;
                delivery plus postnatal. Reproductive health. Family planning
                services.
              </p>
            </div>
          </div>
          {/*Laboratory*/}
          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bx-test-tube" />
              </div>
              <h5 className="mt-4 mb-2">Laboratory</h5>
              <p>
                We have one of the best equipped and staffed laboratories,
                offering the most specialized tests. Daily internal quality
                controls run to ensure quality of the reports.
              </p>
            </div>
          </div>
          {/*Radiology*/}
          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bxs-dryer" />
              </div>
              <h5 className="mt-4 mb-2">Radiology</h5>
              <p>
                Ultrasound. Magnetic Resonance Imaging(MRI). Breast Imaging.
                General Radiography (x-ray) and Fluoroscopy. Interventional
                Radiology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*SERVICES ENDS HERE*/}  

{/*ABOUT US*/}
<section className="row w-100 py-0 bg-light" id="aboutus">
    <div className="col-lg-6 col-img" />
    <div className="col-lg-6 py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h6 className="text-primary">
              Want excellent healthcare services?
            </h6>
            <h1>Experience is your best bet</h1>
            <p>
              Hospital services make up the core of a hospital's offerings. They
              are often shaped by the needs or wishes of its major users to make
              the hospital a one-stop / core institution of its local community
              or medical network. At Med-Innov8, we provide basic services and
              personnel in departments of medicine and surgery—that cater for
              clinical specific diseases and conditions, as well as emergency
              services.
            </p>
            <div className="about d-flex mt-5">
              <div className="iconbox me-3">
                <i className="bx bxs-user-plus" />
              </div>
              <div>
                <h5>Personalized Service</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore suscipit blanditiis.
                </p>
              </div>
            </div>
            <div className="about d-flex mt-2">
              <div className="iconbox me-3">
                <i className="bx bx-calendar-star" />
              </div>
              <div>
                <h5>Ease of Access</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore suscipit blanditiis.
                </p>
              </div>
            </div>
            <div className="about d-flex mt-2">
              <div className="iconbox me-3">
                <i className="bx bx-globe" />
              </div>
              <div>
                <h5>World-class Healthcare </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore suscipit blanditiis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*ABOUT US ENDS HERE*/}

   {/*MANAGEMENT BOARD*/}
   <section id="board">
    <div className="container">
      <div className="row-mb-5">
        <div className="col-md-8 mx-auto text-center">
          <h6 className="text-primary">Management Board</h6>
          <h1>Meet Our Board of Management</h1>
          <p>
            Board of Management is in charge of the hospital’s corporate
            governance. The board members attach great importance to the need to
            conduct the hospital’s business operations with integrity and in
            accordance with generally accepted corporate practice. They also
            endorse the internationally developed principles of good corporate
            governance.
          </p>
        </div>
      </div>
      <div className="row text-center g-4">
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="1board.png" alt="" />
            <h5 className="mb-0 ">Wambui Njeri</h5>
            <h6>Chairperson</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="2board.png" alt="" />
            <h5 className="mb-0 ">Obi Rhamaphosa</h5>
            <h6>Vice Chairperson</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="6board.png" alt="" />
            <h5 className="mb-0 ">Anne Joubert</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="4board.png" alt="" />
            <h5 className="mb-0 ">Tesfaye Habimana</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="5board.png" alt="" />
            <h5 className="mb-0 ">John Stone</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="3board.png" alt="" />
            <h5 className="mb-0 ">Kody Dikeledi</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="7board.png" alt="" />
            <h5 className="mb-0 ">Isaac Sachs</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          {" "}
          {/*On larger devices it'll cover 4 column spaces & on smaller 6 col. spaces*/}
          <div className="board-member card-effect">
            <img src="8board.png" alt="" />
            <h5>Sonmi Wannity</h5>
            <h6>Board Member</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*MANAGEMENT BOARD ENDS HERE*/}

   {/*CONTACT US*/}
   <section id="contact">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-8 mx-auto text-center">
          <h6 className="text-primary">Contact Us</h6>
          <h1>Get In Touch</h1>
        </div>
      </div>
      <form action="" className="row g-3 justify-content-center">
        <div className="col-md-5">
          <input type="text" className="form-control" placeholder="Full Name" />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your E-mail Address"
          />
        </div>
        <div className="col-md-10">
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
        <div className="col-md-10">
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            className="form-control"
            placeholder="Enter Message"
            defaultValue={""}
          />
        </div>
        <div className="col-md-10 d-grid mb-5">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </section>
  {/*CONTACT US ENDS HERE*/}

   {/*FOOTER*/}
   <footer>
    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <img className="logo" src="2logo.png" alt="" />
          </div>
          <div className="col-md-2">
            <h5 className="text-black">Who We Are</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Board</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="text-black">More</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Privacy &amp; Policy</a>
              </li>
              <li>
                <a href="#">T's &amp; C's</a>
              </li>
              <li>
                <a href="#">Career Portal</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-black">Contact</h5>
            <ul className="list-unstyled">
              <li className="text-black">
                Address: 5471 Daktari Street, Kenya
              </li>
              <li className="text-black">Email: support@medinnov8.ke</li>
              <li className="text-black">Phone: 010-2839-1938</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6">ⓒ 2022 Created by Njeri .A. Njoroge</div>
        </div>
      </div>
    </div>
  </footer>
  {/*FOOTER ENDS HERE*/}
  </div> 
  )
}

export default LandingPage