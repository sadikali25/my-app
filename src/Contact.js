import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import slider3 from "../Images/slider3.jpeg";
// import { FaAddressBook } from "react-icons/fa";
import location from "../Images/location.png";
import phone from "../Images/phone.png";
import email from "../Images/gmail.png";
import web from "../Images/web.png";
import Fotter from "../component/Fotter";
function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "enter the name";
    }
    if (!values.email) {
      errors.email = "enter the email";
    }
    if (!values.subject) {
      errors.subject = "enter the subject";
    }
    if (!values.message) {
      errors.message = "enter the message";
    }
    return errors;
  };
  return (
    <>
      <Navbar />
      <div className="carousel-inner">
        <div className="carousel-item active about">
          <img src={slider3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block w-10 ">
            <h1>CONTECT US</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mb-5 mt-5 ">
          <div className="col-lg-3 location">
            <img src={location} alt="" />
            <div className="">
              <strong className="mt-3 mb-3 address">
                Address: 198 West 21th Street, Suite 721 New York NY 10016
              </strong>
            </div>
          </div>
          <div className="col-lg-3 phone">
            <img src={phone} alt="" />
            <div className="">
              <h5 className="mt-3 mb-3">Phone: + 1235 2355 98</h5>
            </div>
          </div>
          <div className="col-lg-3 email">
            <img src={email} alt="" />
            <div className="">
              <h5 className="mt-3 mb-3">Email: info@yoursite.com</h5>
            </div>
          </div>
          <div className="col-lg-3 web">
            <img src={web} alt="" />
            <div className=" ">
              <h5 className="mt-3 mb-3">Website yoursite.com</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 w-100 ">
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117996.95037632967!2d-74.05953969406828!3d40.75468158321536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20Nowy%20Jork%2C%20Stany%20Zjednoczone!5e1!3m2!1spl!2spl!4v1672242444695!5m2!1spl!2spl"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 mt-5 contect-form">
            <form className="" onSubmit={handleSubmit}>
              <input
                className="my-4 "
                placeholder="Your Name"
                type="text"
                name="name"
                onChange={(e) => handlechange(e)}
                value={formValues.name}
              ></input>
              <p style={{color:"red"}}>{formErrors.name}</p>
              <input
                placeholder="Your Email"
                type="text"
                name="email"
                value={formValues.email}
                onChange={(e) => handlechange(e)}
              ></input>
              <p style={{color:"red"}}>{formErrors.email}</p>
              <input
                className="my-4"
                placeholder="Subject"
                type="text"
                name="subject"

                value={formValues.subject}
                onChange={(e) => handlechange(e)}
              ></input>
              <p style={{color:"red"}}>{formErrors.subject}</p>
              <textarea
                placeholder="Message"
                typeof="text"
                name="message"
                value={formValues.message}
                onChange={(e) => handlechange(e)}
              ></textarea>
              <p style={{color:"red"}}>{formErrors.message}</p>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
}

export default Contact;
