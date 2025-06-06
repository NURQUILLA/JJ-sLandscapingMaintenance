import React from 'react'
import ReviewsWidget from '../components/ReviewsWidget';
import Header from "../components/Header";
import "./Reviews.css";
import Footer from "../components/Footer.jsx";

export const Reviews = () => {
  return (

      <div>
          <Header></Header>
          <div className={'review-container'}>
          <div>
              <h2>Reviews</h2>
          </div>

          <div class = "review-widget">
              <ReviewsWidget/>
          </div>
        </div>
        <Footer></Footer>
      </div>
  )
}

export default Reviews;