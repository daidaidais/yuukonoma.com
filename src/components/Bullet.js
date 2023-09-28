import React, { useRef, useEffect } from "react";

const Bullet = (props) => {
  const wrapperRef = useRef();
  useEffect(() => {}, [props]);

  let pointClass = "bullet-point";
  if(props.color==="yellow") pointClass = "bullet-point yellow";
  else if(props.color==="navy") pointClass = "bullet-point  navy";

  let textClass = "bullet-text";
  if(props.textColor==="white") textClass = "bullet-text text-white";

  return (
    <div className="bullet-wrapper" ref={wrapperRef}>
      <div className={pointClass}></div>
      <p className={textClass}>{props.text}</p>
    </div>
  );
};

export default Bullet;