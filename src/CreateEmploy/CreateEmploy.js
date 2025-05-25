import React from 'react'
import './CreateEmploy.css'

const CreateEmploy = () => {
  return (

   <div className="container mt-5">
  <h2 className="text-center mb-4">Registration Form</h2>
  <form>
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" required />
      </div>
      <div className="col-md-6">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" required />
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" required />
    </div>
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" required />
      </div>
      <div className="col-md-6">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" required />
      </div>
    </div>
    <div className="mb-3">
      <label className="form-label d-block">Gender</label>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="gender" id="male" defaultValue="male" required />
        <label className="form-check-label" htmlFor="male">Male</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="gender" id="female" defaultValue="female" />
        <label className="form-check-label" htmlFor="female">Female</label>
      </div>
    </div>
    <div className="mb-3">
      <label className="form-label d-block">Interests</label>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="interest1" defaultValue="coding" />
        <label className="form-check-label" htmlFor="interest1">Coding</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="interest2" defaultValue="music" />
        <label className="form-check-label" htmlFor="interest2">Music</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="interest3" defaultValue="sports" />
        <label className="form-check-label" htmlFor="interest3">Sports</label>
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="country" className="form-label">Country</label>
      <select className="form-select" id="country" required>
        <option value>Select a country</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
        <option value="india">India</option>
        <option value="australia">Australia</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="profilePic" className="form-label">Profile Picture</label>
      <input className="form-control" type="file" id="profilePic" />
    </div>
    <div className="mb-3">
      <label htmlFor="about" className="form-label">About You</label>
      <textarea className="form-control" id="about" rows={4} placeholder="Tell us about yourself..." defaultValue={""} />
    </div>
    <div className="d-flex justify-content-between">
      <button type="reset" className="btn btn-secondary">Reset</button>
      <button type="submit" className="btn btn-primary">Register</button>
    </div>
  </form>
</div>


  )
}

export default CreateEmploy
