import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2';

export const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d688077e-988f-452e-b64a-ed1d85ce9601");
    
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
                text: "Your Message Was Sent Successfully",
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
              <a href="tel:number" >(678) 982-3112</a>
          </div>
      </section>
  )
}

export default Contact