import React from "react";
import { Link } from "react-router-dom";

function PoojaList() {
    let Data = [
    {
      name: "Durga Pooja",
      price: "5,100",
      image:
        "../../../public/shopping/durga.png",
    },
    {
      name: "Gopal Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/gopal.jpg",
    },
    {
      name: "Vastu Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/vastu.jpeg",
    },
    {
      name: "Chandra Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/chandra.png",
    },
    {
      name: "Mahalakshmi Pooja",
      price: "5,100",
      image:
        "../../../public/shopping/mahalakshmi.png",
    },
    {
      name: "Mrityunjay Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/mritynjaya.png",
    },
    {
      name: "Surya Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/surya.png",
    },
    {
      name: "Saraswati Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/saraswati.png",
    },
    {
      name: "Kaali Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/kaali.png",
    },
    {
      name: "Bhagwat Geeta Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/bhaghwat_geeta.png",
    },
    {
      name: "Navgrah Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/navgrah.png",
    },
    {
      name: "Rahu Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/rahu.png",
    },
    {
      name: "Ketu Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/ketu.png",
    },
    {
      name: "Mangal Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/mangal.png",
    },
    {
      name: "Rudrabhishek Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/rudra_abhishek.png",
    },
    {
      name: "Gath Bandhan Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/gath_bandhan.png",
    },
    {
      name: "Satya Narayan Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/satya_narayan.png",
    },
    {
      name: "Brihaspati Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/brihaspati.png",
    },
    {
      name: "Nakshatra Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/nakshatra.png",
    },
    {
      name: "Pitra Dosh Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/pitra_dosh.png",
    },
    {
      name: "Manglik Pooja",
      price: "5,100",
      image:
      "../../../public/shopping/mangal_dosh.png",
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