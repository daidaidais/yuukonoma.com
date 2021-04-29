import React, { useContext } from "react";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";
import { IEContext } from "./Layout";

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

  const isIE = React.useContext(IEContext);

  return (
    <Slider {...settings}>
      {props.image.map((item, index) => (
        <div key={index}>
          {isIE ? (
            <img src={item.file.url} alt={item.file.fileName} />
          ) : (
            <GatsbyImage
              image={item.gatsbyImageData}
              alt={item.file.fileName}
            />
          )}
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
