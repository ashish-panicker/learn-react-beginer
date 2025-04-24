import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  console.log(errors);

  const validateField = (name, value) => {
    let error = "";

    if (name === "fullName" && !value.trim()) {
      error = "Full Name is required.";
    }

    if (name === "email") {
      if (!value.trim()) error = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Email is not valid.";
    }

    if (name === "gender" && !value) {
      error = "Please select your gender.";
    }

    if (name === "password") {
      if (!value) error = "Password is required.";
      else if (value.length < 6)
        error = "Password must be at least 6 characters.";
    }

    if (name === "confirmPassword") {
      if (value !== formData.password) error = "Passwords do not match.";
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    for (const key in formData) {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Registration Successful!");
      console.log(formData);
    }
  };

  const errorSummary = Object.values(errors).filter(Boolean);

  return (
    <div className="form-container">
      <h2>Register</h2>

      {errorSummary.length > 0 && (
        <div className="error-summary">
          <p>Please fix the following:</p>
          <ul>
            {errorSummary.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.fullName ? (errors.fullName ? "invalid" : "valid") : ""
            }
            // if(touched.fullName){
            //   if(errors.fullName !== "") {
            //     classlist.add(invalid)
            //   }else{
            //     classlist.add(valid)
            //   }
            // }
          />
          {touched.fullName && errors.fullName && (
            <p className="error">{errors.fullName}</p>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.email ? (errors.email ? "invalid" : "valid") : ""
            }
          />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div
            className={`radio-group ${
              touched.gender ? (errors.gender ? "invalid" : "valid") : ""
            }`}
          >
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Other
            </label>
          </div>
          {touched.gender && errors.gender && (
            <p className="error">{errors.gender}</p>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.password ? (errors.password ? "invalid" : "valid") : ""
            }
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
