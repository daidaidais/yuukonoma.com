import React, { useRef, useEffect } from "react";
import Bullet from "../components/Bullet";

const HypnobirthContent = (props) => {
  const wrapperRef = useRef();
  useEffect(() => {}, [props]);

  const indexContent = `Unit ${props.index+1}`;

  return (
    <div className="hypnobirthContent-border" ref={wrapperRef}>
      <div className="hypnobirthContent-index">{indexContent}</div>
      <p className="hypnobirthContent-title">{props.title}</p>
      {props.bullets.map(x => (<Bullet text={x}/>))}
    </div>
  );
};

export default HypnobirthContent;
