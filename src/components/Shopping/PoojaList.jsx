import React from "react";
import { Link } from "react-router-dom";

function PoojaList() {
    let Data = [
    {
      name: "Durga Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kiew3gw0-0/book/p/w/x/the-seven-husbands-of-evelyn-hugo-original-imafy7trzrezgnn3.jpeg?q=70",
    },
    {
      name: "Gopal Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/book/5/p/o/the-girl-with-no-dreams-original-imagxfbxzha4a8gv.jpeg?q=70",
    },
    {
      name: "Vastu Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kufuikw0/book/y/9/f/the-forty-rules-of-love-original-imag7jq38ucsb9wu.jpeg?q=70",
    },
    {
      name: "Chandra Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kvifekw0/book/l/c/2/falling-for-a-korean-original-imag8ekwr72bfcrg.jpeg?q=70",
    },
    {
      name: "Mahalaxmhi Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/l3dcl8w0/book/8/z/r/the-palace-of-illusions-original-imagegh8jk8338xx.jpeg?q=70",
    },
    {
      name: "Mrityunjay Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kkec4280/book/2/b/8/the-girl-in-room-105-original-imafzr6nczgggedw.jpeg?q=70",
    },
    {
      name: "Surya Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/book/q/6/a/-original-imagqtdtfgzbm8xv.jpeg?q=70",
    },
    {
      name: "Saraswati Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/book/k/p/s/the-prophet-original-imagy32bgy6vzpab.jpeg?q=70",
    },
    {
      name: "Kaali Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/book/h/g/p/you-only-live-once-original-imag7cgvggfmsv7h.jpeg?q=70",
    },
    {
      name: "Bhagwat Geeta Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/book/x/r/1/the-perfect-us-original-imag9ffkb9vftamd.jpeg?q=70",
    },
    {
      name: "Navgrah Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/book/h/a/u/i-too-had-a-love-story-original-imagu7s93gqdsmgp.jpeg?q=70",
    },
    {
      name: "Rahu Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/book/z/c/b/underneath-original-imagz9ame7qtngvr.jpeg?q=70",
    },
    {
      name: "Ketu Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/k3ncakw0/book/0/1/4/the-stationery-shop-of-tehran-original-imafhh76upryu3fg.jpeg?q=70",
    },
    {
      name: "Mangal Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kqidx8w0/book/c/s/n/journey-to-the-centre-of-the-earth-original-imag4gh9cz3ygjh9.jpeg?q=70",
    },
    {
      name: "Rudrabhishek Pooja",
      price: "5,100",
      image:
        "https://totalpng.com//public/uploads/preview/photos-mahadev-wallpaper-hd-download-for-android-mobile-12-11649579928cgfk3oowzd.jpg",
    },
    {
      name: "Gath Bandhan Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/book/m/f/8/the-hidden-hindu-original-imagu7s9hp4zmwky.jpeg?q=70",
    },
    {
      name: "Satya Narayan Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/book/m/f/8/the-hidden-hindu-original-imagu7s9hp4zmwky.jpeg?q=70",
    },
    {
      name: "Brihaspati Pooja",
      price: "5,100",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/book/m/f/8/the-hidden-hindu-original-imagu7s9hp4zmwky.jpeg?q=70",
    },
    {
      name: "Nakshatra Pooja",
      price: "5,100",
      image:
        "https://www.brahminji.com/wp-content/uploads/2022/11/MANGLIK-DOSH-PUJA-BRAHMINJI-lite-version.png",
    },
    {
      name: "Pitra Dosh Pooja",
      price: "5,100",
      image:
        "https://rudralife.com/assets/images/products/gallery/thumbs/900_600_px__Mangal_Graha_Shaanti_puja_Images_for_new_website_2021_20082021122231_66013_2__900x600.JPG",
    },
    {
      name: "Manglik Pooja",
      price: "5,100",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/9/SN/NR/NM/30802235/manglik-dosh-puja-500x500.jpg",
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