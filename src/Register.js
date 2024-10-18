import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';

function Register() {
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
   
    // fetch('https://66c42cedb026f3cc6cee3eda.mockapi.io/Register',{
    //   method:"POST",
    //   headers:{'content-type' :'application/json'},
    //   body:JSON.stringify(formValues)
    // }).then((res)=>{
    //   toast.success("register is succesfully");
      
    //    navigate('Login')
      
    // }).catch((err)=>{
    //  toast.err('Failed',+err.message)
  
    // })
    const register =axios.post('https://66c42cedb026f3cc6cee3eda.mockapi.io/Register',{formValues})
    .then(res => {
      toast.success("register is suucessfully",res)
      navigate('/Login')
    }).catch((err)=>{
    toast.err('Failed',err)
    })

    if (register !== ('email')) {
         console.log('email is allredy exist ');
         
    }
    else{
      
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.fullname) {
      errors.fullname = "enter the Full name";
    }
    if (!values.email) {
      errors.email = "enter the email";
    }
    if (!values.password) {
      errors.password = "enter the password";
    }
    if (!values.confirm_password) {
      errors.confirm_password = "enter the Confirm-password";
    } else if (values.password.length < 4) {
      errors.password = "password length is more then 4";
    } else if (values.password.length > 10) {
      errors.password = "password cannot exceed more then 10 characters";
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = "password and Confirm-password is must be same";
    }
    return errors;
  };

 
  return (
    <>
      <div className="container-fluid register-container d-flex justify-content-center align-items-center">
        <div className="register-box animate__animated animate__fadeIn">
          <h2 className="text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="Enter full name"
                onChange={handlechange}
                value={formValues.fullname}
                required
              />
            </div>
            <p style={{color:"red"}}>{formErrors.fullname}</p>
            <div className="form-group mb-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                onChange={handlechange}
                value={formValues.email}
                required
              />
            </div>
            <p style={{color:"red"}}>{formErrors.email}</p>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={handlechange}
                value={formValues.password}
                required
              />
            </div>
            <p style={{color:"red"}}>{formErrors.password}</p>
            <div className="form-group mb-4">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                className="form-control"
                placeholder="Confirm password"
                onChange={(e) => handlechange(e)}
                value={formValues.confirm_password}
                required
              />
            </div>
            <p style={{color:"red"}}>{formErrors.confirm_password}</p>
            <button type="submit" className="btn btn-primary btn-block w-100">
              Register

              <ToastContainer/>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
