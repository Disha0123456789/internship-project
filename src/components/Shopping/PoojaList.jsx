import React from "react";
import { Link } from "react-router-dom";

function PoojaList() {
    let Data = [
    {
      name: "Durga Pooja",
      price: "500",
      image:
        "/shopping/durga.png",
    },
    {
      name: "Gopal Pooja",
      price: "500",
      image:
      "/shopping/gopal.jpg",
    },
    {
      name: "Vastu Pooja",
      price: "500",
      image:
      "/shopping/vastu.jpeg",
    },
    {
      name: "Chandra Pooja",
      price: "500",
      image:
      "/shopping/chandra.png",
    },
    {
      name: "Mahalakshmi Pooja",
      price: "500",
      image:
        "/shopping/mahalakshmi.png",
    },
    {
      name: "Mrityunjay Pooja",
      price: "500",
      image:
      "/shopping/mritynjaya.png",
    },
    {
      name: "Surya Pooja",
      price: "500",
      image:
      "/shopping/surya.png",
    },
    {
      name: "Saraswati Pooja",
      price: "500",
      image:
      "/shopping/saraswati.png",
    },
    {
      name: "Kaali Pooja",
      price: "500",
      image:
      "/shopping/kaali.png",
    },
    {
      name: "Bhagwat Geeta Pooja",
      price: "500",
      image:
      "/shopping/bhaghwat_geeta.png",
    },
    {
      name: "Navgrah Pooja",
      price: "500",
      image:
      "/shopping/navgrah.png",
    },
    {
      name: "Rahu Pooja",
      price: "500",
      image:
      "/shopping/rahu.png",
    },
    {
      name: "Ketu Pooja",
      price: "500",
      image:
      "/shopping/ketu.png",
    },
    {
      name: "Mangal Pooja",
      price: "500",
      image:
      "/shopping/mangal.png",
    },
    {
      name: "Rudrabhishek Pooja",
      price: "500",
      image:
      "/shopping/rudra_abhishek.png",
    },
    {
      name: "Gath Bandhan Pooja",
      price: "500",
      image:
      "/shopping/gath_bandhan.png",
    },
    {
      name: "Satya Narayan Pooja",
      price: "500",
      image:
      "/shopping/satya_narayan.png",
    },
    {
      name: "Brihaspati Pooja",
      price: "500",
      image:
      "/shopping/brihaspati.png",
    },
    {
      name: "Nakshatra Pooja",
      price: "500",
      image:
      "/shopping/nakshatra.png",
    },
    {
      name: "Pitra Dosh Pooja",
      price: "500",
      image:
      "/shopping/pitra_dosh.png",
    },
    {
      name: "Manglik Pooja",
      price: "500",
      image:
      "/shopping/mangal_dosh.png",
    },
  ];

  const handleClick = (poojaName) => {
    // Redirect to PoojaDetail with the selected pooja name
    window.location.href = `/pooja/${poojaName}`;
  };

  return (
    <div className="Cards-pooja">
      {Data.map((items, i) => {
        return (
          <div className="Subcard-pooja" key={i}>
            
            <div className="imagebox-pooja">
              <img src={items.image} alt="" />
            </div>
            <hr className="hr-pooja-list"/>
            <div className="texfield-pooja">
              <h4>{items.name}</h4>
              <h4>Rs. {items.price}</h4>
              {/* Use Link to navigate to PoojaDetail */}
              <Link to={`/pooja/${items.name}`}>
                <button className="book-now-pooja">Book Now</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PoojaList;