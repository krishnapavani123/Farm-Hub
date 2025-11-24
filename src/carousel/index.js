import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,        // slower scroll for smooth ticker effect
      slidesToShow: 5,    // number of images visible at once
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,   // continuous scroll
      cssEase: "linear",
      arrows: false,      // hide arrows for compact carousel
    };

    const images = [
      "https://i.pinimg.com/736x/f1/2c/c1/f12cc1fda020fd580aa5ca2abfb4046d.jpg",
      "https://i.pinimg.com/1200x/7a/2d/3f/7a2d3f42272a7953eb0dc078b0ce0d9b.jpg",
      "https://i.pinimg.com/1200x/0d/a9/7d/0da97d46db5074d095d560cce347e8b8.jpg",
      "https://i.pinimg.com/1200x/2b/39/a3/2b39a367156d1a57ff11f9137ff92991.jpg",
      "https://i.pinimg.com/1200x/50/4c/09/504c099b49263a985b8451536997a08b.jpg",
      "https://i.pinimg.com/736x/9d/d7/8d/9dd78d66ccc3cf73c9ebf6f703ce2517.jpg",
      "https://i.pinimg.com/1200x/c2/ad/e6/c2ade6a02633034e18501c69cc5e05c3.jpg",
      "https://i.pinimg.com/1200x/24/3b/fc/243bfc9a4c83fb56eff67b85f71cc66c.jpg",
      "https://i.pinimg.com/1200x/39/61/ce/3961ceff4d40f2b9a46eed36c27b4753.jpg"
    ];

    return (
      <div className="farm-carousel-small">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="carousel-slide-small">
              <img src={img} alt={`Farm Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
