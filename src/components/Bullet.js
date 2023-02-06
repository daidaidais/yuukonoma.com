import React, { useRef, useEffect } from "react";

const Bullet = (props) => {
  const wrapperRef = useRef();
  useEffect(() => {}, [props]);

  return (
    <div className="bullet-wrapper" ref={wrapperRef}>
      <div className="bullet-point"></div>
      <p className="bullet-text">{props.text}</p>
    </div>
  );
};

export default Bullet;