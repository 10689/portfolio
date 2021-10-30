import "./contact.css";
// import Phone from "../../img/phone.png";
// import Email from "../../img/email.png";
// import Address from "../../img/address.png";
import Contactinfo from "../../svg/Contact.svg"
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_3nhsg6m",
        "template_dm4rvgv",
        formRef.current,
        "user_AOYGn2tKzWpIDs5iswLvh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );

      
  };

  return (
   
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div>
              <img src={Contactinfo} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="c-right">
          <h2 className="c-desc">
            <b> Hire me!</b> 
          </h2>
          <form className="c-form-info"ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#E8EAF6"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#E8EAF6"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#E8EAF6"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#E8EAF6"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
