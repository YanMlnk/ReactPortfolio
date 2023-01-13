import { useState } from "react";
import ModalButton from "./ModalButton";

const ContactForm = () => {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true)
  
    
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
        <div>
          <h3 className="mainText">Contact Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={handleChange}

          />
        </div>
        <div>
        <textarea rows="5" cols="50"
            type="text"
            name="message"
            placeholder="Message"
            value={contactInfo.message}
            onChange={handleChange}>
        </textarea>
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>

{formSubmitted &&
<div className="card" key={contactInfo.name}>
            <p className="card-name">{contactInfo.name}</p>
            <p>{contactInfo.email}</p>
            <p>{contactInfo.message}</p>
          </div>
        }
<ModalButton/>
          </div>

  );

};





export default ContactForm; 
