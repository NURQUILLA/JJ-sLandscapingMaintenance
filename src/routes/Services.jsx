import React, {useState,Suspense,lazy} from 'react';
import "./Services.css";
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";

import {
    handyMan,
    lawnCarePic,
    misc,
    pressureWash,
    tractor,
    treeCutting,
    hand1,
    hand2,
    hand3,
    hand4,
    hand5,
    hand6,
    hand7,
    lawn1,
    lawn2,
    lawn3,
    lawn4,
    lawn5,
    lawn6,
    mulch1,
    mulch2,
    mulch3,
    mulch4,
    mulch5,
    mulch6,
    wash1,
    wash2,
    wash3,
    wash4,
    wash5,
    wash6,
    sod1,
    sod2,
    sod3,
    sod4,
    sod5,
    sod6,
    sod7,
    misc1,
    misc2,
    misc3,
    misc4,
    misc5,
    misc6,
    misc7,
    } from '../assets/images/index.jsx';

const ImageGallery = lazy(() => import('../components/ImageGallery'));

//EXAMPLE GALLERIES SWITCH OUT FOR THE ACTUAL RELATED IMAGES
const imageGalleries = {
    "Lawn Care":[lawn1, lawn2, lawn3,lawn4,lawn5,lawn6],
    "Sod Work":[sod1, sod2,sod3,sod4,sod5,sod6,sod7],
    "Handyman Work":[hand3,hand1,hand2,hand4,hand5,hand6,hand7],
    "Misc Work":[tractor,misc1,misc2,misc3,misc4,misc5,misc6,misc7],
    "Pressure Washing":[wash3,wash1,wash2,wash4,wash5,wash6],
    "Mulch and Pine Straw":[mulch1,mulch2,mulch3,mulch5,mulch4,mulch6]
};

export const Services = () => {
    const[selectedService, setSelectedService] = useState(null);
    const[isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        { title: "Lawn Care", description: "Our Lawn Maintenance services are designed to keep your yard looking pristine, week after week, or every other week—whatever best fits your needs. Our basic service package includes: /n Mowing the Grass: Keeping your lawn neat and evenly cut for a fresh, manicured look.Weedeating the Perimeters: Tackling those hard-to-reach areas along fences, flower beds, and other boundaries to maintain a clean, defined edge.Edging the Driveways/Walkways: Crisp, sharp lines along your driveways and walkways, adding that perfect finishing touch.Blowing Debris: We ensure your driveways and walkways are free of grass clippings, leaves, and other debris, leaving your property looking tidy and inviting.Hedge Trimming (when needed): We can trim your hedges to keep them neat and well-maintained, providing a polished look to your landscape.With our reliable weekly or bi-weekly service, you can enjoy a well-maintained lawn without the hassle. Let us take care of your yard, so you can relax and enjoy the beauty of your outdoor space!", image: lawnCarePic },
        { title: "Sod Work", description: "We offer a variety of high-quality sod options for installation to suit your lawn's needs and aesthetic preferences. Our selection includes:**Bermuda Grass:** Choose from Tiftuf or Celebration varieties, both known for their durability, drought tolerance, and lush green appearance.**Zoysia Grass:** We offer both Emerald Green and Zion Zoysia, perfect for those looking for a dense, low-maintenance lawn with a soft texture and rich color.Whether you're looking to improve the look of your yard or enhance its functionality, we have the right sod for you. Contact us today to schedule your sod installation and transform your lawn into a beautiful, healthy space!", image: sod4 },
        { title: "Handyman Work", description: "We also offer a range of professional handyman services to address various needs around your property. From rebuilding stairs to performing deck overs, we ensure your outdoor spaces are safe and visually appealing. Additionally, we specialize in replacing and repairing mailboxes to meet and exceed your HOA’s standards, adding both functionality and curb appeal. Whatever your handyman needs may be, we’re here to provide reliable, high-quality workmanship.", image: hand2 },
        { title: "Pressure Washing", description: "Our pressure washing services are perfect for giving your property a fresh, clean look. We offer both chemical and chemical-free options to suit your needs. Whether it's removing dirt and grime from driveways, patios, or the sides of your house, or cleaning out your gutters, we have the tools and expertise to get the job done right. Let us restore the shine to your outdoor spaces and improve your home's curb appeal with our professional pressure washing services.", image: pressureWash },
        { title: "Mulch and Pine Straw", description: "We offer a variety of options to make your flower beds stand out and truly shine. Choose from beautiful long needle pine straw for a natural, rustic look, or opt for mulch to retain moisture and add a rich, uniform appearance. For a more modern or low-maintenance option, we provide rock that enhances drainage while creating a clean, durable landscape. We also offer pine bark for a textured, earthy touch that complements your plants. No matter your style or needs, we have the perfect solution to make your flower beds pop and elevate the beauty of your garden.", image: mulch4 },
        { title: "Misc Work", description: "We offer work to help with a variety of outdoor projects. Our services include light brush clearing to clean up overgrown areas, gravel driveway maintenance to ensure a smooth and even surface, spreading and grading new dirt for leveling out soil, and mulch spreading to enhance the look and health of your garden beds. Whether you're looking to tidy up your property or prepare it for new landscaping, our work will get the job done efficiently and effectively.", image: tractor }

    ];

    const openModal = (service) =>{
        setSelectedService(service);
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setSelectedService(null);
        setIsModalOpen(false);
    }
  return (

      <div>
          <Header></Header>
          <div className="service-container">
              <h2>Services</h2>
              <p className="services-subtitle">A look Into Our Work And What We Provide</p>

              <div className="services-grid">
                  {services.map((service, index) => (
                      <div key={index} className="service-card" onClick={()=>openModal(service)} style={{cursor: 'pointer'}}>
                          <img src={service.image} alt={service.title} className="service-img"/>
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                      </div>
                  ))}
              </div>
          </div>

          {isModalOpen && selectedService && (
              <div className="modal-overlay" onClick={closeModal}>
                  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                      <button className="close-btn" onClick={closeModal}>×</button>
                      <h2>{selectedService.title}</h2>

                      <Suspense fallback={<div>Loading gallery...</div>}>
                          <ImageGallery images={imageGalleries[selectedService.title] || []} />
                      </Suspense>
                  </div>
              </div>
          )}

          <Footer></Footer>
      </div>
  )
}

export default Services;