import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';


function Login() {
    const initialValues = {email:"",password:""}
    const [formValues,setFormValues]= useState(initialValues)
    const [formErrors,setFormErrors]= useState({})
    const [isSubmit,setIsSubmit]= useState(false)

    const handlechange= (e)=>{
    //    console.log(e.target);
      const {name,value}= e.target;
      setFormValues({...formValues,[name] : value});
    //    console.log(formValues);
      

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        // fetch('https://66c42cedb026f3cc6cee3eda.mockapi.io/Register',{
        //   method:"GET",
        //   headers:{'content-type':'application/json'},
        //   body:JSON.stringify(initialValues),
          
        //  }).then((res)=>{
        //      toast.success('Login successfully')


        //  }).catch((err)=>{
        //   toast.err("connection failed",err)
        //  })
        // axios.post('https://66c42cedb026f3cc6cee3eda.mockapi.io/Register',{})
        
    };


    useEffect(() => {

        console.log(formErrors);
        
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
        
    }
    }, [formErrors]);


    const validate =(values)=>{
     const errors = {};
     
     if (!values.email) {
        errors.email="email is not a required";
     }
     if (!values.password) {
        errors.password="password is not a required";
        
     }
     else if(values.password.length < 4){
     errors.password="password must be more then 4 characters"
     }
     else if(values.password.length > 10){
        errors.password="password cannot exceed more then 10 characters"
        }
     return errors;
    }
  return (
    <>

      <div className="container-fluid login-container d-flex justify-content-center align-items-center">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='ui message success'>Signed in successfully</div>
      ):(
        <pre>{ JSON.stringify(formValues,undefined,2)}</pre>
        
        )} */}
      <div className="login-box animate__animated animate__fadeIn">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              name='email'
              className="form-control"
              placeholder="Enter email"
              value={formValues.email}
              onChange={(e)=>handlechange(e)}
              required
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="form-group mb-4">
            <label>Password</label>
            <input
              type="password"
              name='password'
              className="form-control"
              placeholder="Password"
              value={formValues.password}
              onChange={(e)=>handlechange(e)}
              required
            />
            <p>{formErrors.password}</p>
            <NavLink to="/Register">please Register Click</NavLink>
          </div>
          
          <button type="submit" className="btn btn-primary btn-block w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login



// import React, { useState, useEffect } from 'react';

// function ColorfulButtons() {
//   // Initialize an array of 9 buttons with default color (e.g., 'white')
//   const [buttonColors, setButtonColors] = useState(Array(9).fill('white'));

//   // Function to handle button click
//   const handleClick = (index) => {
//     const newColors = [...buttonColors]; // Copy current button colors
//     newColors[index] = 'white'; // Change the clicked button color to 'blue'
//     setButtonColors(newColors); // Update the state

//     // After 3 seconds, revert the button color to 'white'
//     setTimeout(() => {
//       const resetColors = [...newColors];
//       resetColors[index] = 'blue';
//       setButtonColors(resetColors);
//     }, 3000);
//   };

//   return (
//     <div>
//       {buttonColors.map((color, index) => (
//         <button
//           key={index}
//           style={{
//             backgroundColor: color,
//             width: '100px',
//             height: '100px',
//             margin: '10px',
//           }}
//           onClick={() => handleClick(index)}
//         >
//           Button {index + 1}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default ColorfulButtons;
