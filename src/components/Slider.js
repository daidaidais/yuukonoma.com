import React from "react";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";

const SlickSlider = (props) => {
  const settings = {
    fade: false,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    mobileFirst: true,
    className: "class-image",
    dotClass: "my-slick-dots",
  };

  return (
    <Slider {...settings}>
      {props.image.map((item, index) => (
        <div key={index}>
          <GatsbyImage image={item.gatsbyImageData} alt={item.file.fileName} />
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
