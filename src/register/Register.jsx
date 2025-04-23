import React from 'react'
import './register.css'

function Register() {

  const [formData, setFormData] = React.useState(
    {
      name: '',
      email: '',
      password: '',
      gender: '',
      country: '',
      about: '',
      terms: false
    }
  )

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target //destructure
    setFormData(prevFormData => ({ ...prevFormData, [name]: type === 'checkbox' ? checked : value }))
    /**
     * 
    setFormData(function(prevFormData) {
      return { ...prevFormData, [name]: type === 'checkbox' ? checked : value }
    })
    */
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required value={formData.name}
          onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required value={formData.email}
          onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required value={formData.password}
          onChange={handleChange} />
      </div>
      <div>
        <label>Gender</label>
        <div className="radio-group">
          <label><input type="radio" name="gender" value="male" required
            onChange={handleChange} /> Male</label>
          <label><input type="radio" name="gender" value="female"
            onChange={handleChange} /> Female</label>
          <label><input type="radio" name="gender" value="other"
            onChange={handleChange} /> Other</label>
        </div>
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select id="country" name="country" required onChange={handleChange}>
          <option value>--Select--</option>
          <option value="india">India</option>
          <option value="usa">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="australia">Australia</option>
        </select>
      </div>
      <div>

        <label htmlFor="about">About You</label>
        <textarea id="about" name="about" rows={4}
          placeholder="Tell us something about yourself..."
          value={formData.about} onChange={handleChange} />
      </div>
      <div className="checkbox">
        <input type="checkbox" id="terms" name="terms" required onChange={handleChange} />
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>
      <button type="submit" disabled={!formData.terms}>Register</button>
    </form>
  )
}

export default Register