import React from 'react'
import Contact from '../components/Contact/Contact';
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import "./Quotes.css";

export const Quotes = () => {
  return (

      <div>
          <Header></Header>
          <div className='quote-container'>

          <div>
              <Contact/>
          </div>
          </div>
          <Footer></Footer>
      </div>
  )
}

export default Quotes;