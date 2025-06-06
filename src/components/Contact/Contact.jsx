import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2';

export const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1da9f6a7-ddab-45b6-8306-2c1032a24610");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success",
                text: "Youre Message Was Sent Successfully",
                icon: "success",
              }).then(() => {
                window.location.reload();
              });
          };
        }
        


  return (
      <section className='quote-container'>
          <h2>Contact Us</h2>
          <form className="quote-form" onSubmit={onSubmit}>
              <label>Name</label>
              <input type="text" className="field" placeholder="Enter Your Name" name="name" required/>

              <label>Surname</label>
              <input type="text" className="field" placeholder="Enter Your Surname" name="surname" required/>

              <label>Email</label>
              <input type="email" className="field" placeholder="Enter Your Email" name="email" required/>

              <label>Contact</label>
              <input type="text" className="field" placeholder="Enter Your Phone Number" name="contact" required/>

              <label>Message</label>
              <textarea name="message" placeholder="Enter Your Message" required></textarea>

              <button type="submit">Submit</button>
          </form>
          <div className="quote-footer">
              <h4>Contact Us</h4>
              <p>678-123-1234</p>
          </div>
      </section>
  )
}

export default Contact