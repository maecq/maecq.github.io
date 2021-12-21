//import { useState } from "react";
import "./contact.scss";

export default function Contact() {
/* 
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
 */  
return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/GitHub5.jpg" alt=""  />
      </div>
      <div className="right">
        <h2>GitHub Projects</h2>
        <br></br>
        <a href="https://github.com/maecq/website">Simple Website</a>
        <a href="https://github.com/maecq/CourseRegistration">Course Registration</a>
        <a href="https://github.com/maecq/RestaurantAPI">Restaurant API</a>
        <a href="https://github.com/maecq/currency-converter">Simple Currency Converter</a>
        <a href="https://github.com/maecq/reactcounter">REACT Counter App</a>
      </div>
      
    </div>
    
  );
}