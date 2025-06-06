import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import { experienced, family, quality, satisfaction, transparentLogo } from "./assets/images/index.jsx";
function App() {
  return(
   
<div>
<Header></Header>
   <div className="app-container">
       <div className="mainTitle">
       <img src={transparentLogo} alt={"BackgroundLogo"} className="Background-Logo"/>
       </div>
    </div>

   <div class = "wide-image">
       <img src ={experienced} alt={"Wide Image Experienced Team"}className={"wide-image"}/>
   </div>

    <div class="sub-section">
        <h2>About Us</h2>
        <p>What We Pride Ourselves on!</p>
        <div className="card-container">
            <div className="card">
                <img src= {quality} alt="Quality Work"/>
                <h3>Quality Work</h3>
                <p>We take great pride in delivering top-notch work to every client, whether they’re long-time customers or new to our services. Our commitment to quality, attention to detail, and customer satisfaction has earned us a stellar reputation, which is reflected in our 5-star rating on Google with over 40 glowing reviews. We go above and beyond to ensure every project meets the highest standards, and we look forward to continuing to exceed expectations for all our valued clients.</p>
            </div>

            <div className="card">
                <img src= {experienced} alt="Experienced Team"/>
                <h3>Experienced Team</h3>
                <p>Our experienced team is here to provide expert advice and solutions for all your lawn care and landscaping needs. With years of industry knowledge, we can answer any questions you have and offer tailored recommendations to enhance the beauty and health of your property. Whether you need guidance on lawn maintenance, landscaping design, or specific services like sod installation or pressure washing, our team is ready to assist and ensure you get the best results for your outdoor spaces.</p>
            </div>

            <div className="card">
                <img src={satisfaction} alt="Customer Satisfaction"/>
                <h3>Customer Satisfaction</h3>
                <p>At our core, customer satisfaction is our top priority. We are committed to providing exceptional service and ensuring that every client is fully satisfied with the work we do. From the initial consultation to the completion of each project, we take the time to listen to your needs, offer personalized solutions, and go the extra mile to exceed your expectations. Our goal is to build long-lasting relationships with our clients by delivering reliable, high-quality work that leaves you happy and proud of your outdoor spaces. Your satisfaction drives everything we do.</p>
            </div>
        </div>
    </div>

    <div class="sub-section">
        <h2>Our Family</h2>

        <div className="family-content">
            <img src={family} alt="Our Family"/>

            <div className="family-text">
                <h3>The JJ Landscaping Family</h3>
                <p>
                The Johnson family, led by Justin Johnson, is proud to run a small, locally-owned landscaping business that is committed to enhancing the beauty of their community. Alongside his supportive wife, Samantha, and their three beloved dogs, they treat every project like it’s a part of their own home. Their passion for landscaping goes beyond just creating beautiful outdoor spaces—it’s about making their community a better place to live for everyone. They take great pride in their work and look forward to building lasting relationships with future clients, ensuring every project is done with care, quality, and dedication.
                </p>
                <p>
                    
                </p>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>

  );
}

export default App;