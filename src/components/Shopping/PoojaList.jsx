import React from "react";
import { Link } from "react-router-dom";

function PoojaList() {
  let Data = [
    {
      name: "Durga Pooja",
      price: "500",
      image: "/assets/shopping/durga.png",
    },
    {
      name: "Gopal Pooja",
      price: "500",
      image: "/assets/shopping/gopal.jpg",
    },
    {
      name: "Vastu Pooja",
      price: "500",
      image: "/assets/shopping/vastu.jpeg",
    },
    {
      name: "Chandra Pooja",
      price: "500",
      image: "/assets/shopping/chandra.png",
    },
    {
      name: "Mahalakshmi Pooja",
      price: "500",
      image: "/assets/shopping/mahalakshmi.png",
    },
    {
      name: "Mrityunjay Pooja",
      price: "500",
      image: "/assets/shopping/mritynjaya.png",
    },
    {
      name: "Surya Pooja",
      price: "500",
      image: "/assets/shopping/surya.png",
    },
    {
      name: "Saraswati Pooja",
      price: "500",
      image: "/assets/shopping/saraswati.png",
    },
    {
      name: "Kaali Pooja",
      price: "500",
      image: "/assets/shopping/kaali.png",
    },
    {
      name: "Bhagwat Geeta Pooja",
      price: "500",
      image: "/assets/shopping/bhaghwat_geeta.png",
    },
    {
      name: "Navgrah Pooja",
      price: "500",
      image: "/assets/shopping/navgrah.png",
    },
    {
      name: "Rahu Pooja",
      price: "500",
      image: "/assets/shopping/rahu.png",
    },
    {
      name: "Ketu Pooja",
      price: "500",
      image: "/assets/shopping/ketu.png",
    },
    {
      name: "Mangal Pooja",
      price: "500",
      image: "/assets/shopping/mangal.png",
    },
    {
      name: "Rudrabhishek Pooja",
      price: "500",
      image: "/assets/shopping/rudra_abhishek.png",
    },
    {
      name: "Gath Bandhan Pooja",
      price: "500",
      image: "/assets/shopping/gath_bandhan.png",
    },
    {
      name: "Satya Narayan Pooja",
      price: "500",
      image: "/assets/shopping/satya_narayan.png",
    },
    {
      name: "Brihaspati Pooja",
      price: "500",
      image: "/assets/shopping/brihaspati.png",
    },
    {
      name: "Nakshatra Pooja",
      price: "500",
      image: "/assets/shopping/nakshatra.png",
    },
    {
      name: "Pitra Dosh Pooja",
      price: "500",
      image: "/assets/shopping/pitra_dosh.png",
    },
    {
      name: "Manglik Pooja",
      price: "500",
      image: "/assets/shopping/mangal_dosh.png",
    },
  ];

  return (
    <div className="Cards-pooja">
      {Data.map((items, i) => (
        <Link to={`/pooja/${items.name}`} key={i} className="Subcard-pooja">
          <div className="imagebox-pooja">
            <img src={items.image} alt={items.name} />
          </div>
          <hr className="hr-pooja-list"/>
          <div className="texfield-pooja">
            <h4>{items.name}</h4>
            <h4>Rs. {items.price}</h4>
            <button className="book-now-pooja">Book Now</button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PoojaList;
