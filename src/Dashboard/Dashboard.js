import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (

<div className="container-fluid">
  <div className="row">
    {/* Sidebar */}
    <nav className="col-md-2 d-none d-md-block sidebar py-4">
      <div className="position-sticky">
        <ul className="nav flex-column text-white">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="bi bi-house-door-fill me-2" /> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-image-fill me-2" /> Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-gear-fill me-2" /> Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-person-fill me-2" /> Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
    {/* Main content */}
    <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4 main-content">
      <h1 className="mt-4">Welcome to Dashboard</h1>
      <div className="row">
        
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <center><Link to='/' >
            <img src="/images/HomeIcon.png" className="card-img-top" alt="Sample Image" 
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}/>
            </Link></center>
            <div className="card-body">
              {/* <h5 className="card-title"><Link to='/' >Home</Link></h5> */}
              <center><p className="card-text">Home</p></center>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <center>
            <Link to='/' >
                <img src="/images/CreateUser.jpg" className="card-img-top" alt="Sample Image" 
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}/>
            </Link>
            </center>
            <div className="card-body">
              {/* <h5 className="card-title"><Link to='/createUser' class="btn btn-primary">Create User</Link></h5> */}
              <center><p className="card-text">Create User</p></center>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <center>
            <Link to='/createEmploy' >
                <img src="/images/CreateEmploy.png" className="card-img-top" alt="Sample Image" 
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}/>
            </Link>
            </center>
            <div className="card-body">
              {/* <h5 className="card-title">Create Employ</h5> */}
              <center><p className="card-text">Description of this option.</p></center>
            </div>
          </div>
        </div>
        
        {/* <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Employ Details</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Verify Biodata</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Circle wise division data</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Yearwise inactive employ data</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Circle wise notes download</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Division notes download</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Monthly employ joining report</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Employ details id</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Monthly payroll report</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Payslip Generation</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Circle wise notes download</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Division wise notes download</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Monthly employ joining report</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Circlewise attendance review</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Monthly file upload</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Appointment Letter</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Payslip generation</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Monthly payroll report</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card dashboard-card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sample Image" />
            <div className="card-body">
              <h5 className="card-title">Insurance report</h5>
              <p className="card-text">Description of this option.</p>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  </div>
</div>

  )
}

export default Dashboard
