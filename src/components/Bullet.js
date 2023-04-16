import React, { useRef, useEffect } from "react";

const Bullet = (props) => {
  const wrapperRef = useRef();
  useEffect(() => {}, [props]);

  let pointClass = "bullet-point";
  if(props.color==="yellow") pointClass = "bullet-point yellow";

  return (
    <div className="bullet-wrapper" ref={wrapperRef}>
      <div className={pointClass}></div>
      <p className="bullet-text">{props.text}</p>
    </div>
  );
};

export default Bullet;