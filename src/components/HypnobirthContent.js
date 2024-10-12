import React, { useRef, useEffect } from "react";
import Bullet from "../components/Bullet";
import Fade from 'react-reveal/Fade';

const HypnobirthContent = (props) => {
  const wrapperRef = useRef();
  useEffect(() => {}, [props]);

  const indexContent = `Unit ${props.index+1}`;

  return (
    <Fade bottom>
    <div className="hypnobirthContent-border" ref={wrapperRef}>
      <div className="hypnobirthContent-index">{indexContent}</div>
      <p className="hypnobirthContent-title">{props.title}</p>
      {props.bullets.map((x,index) => (<Bullet key={index} text={x}/>))}
    </div>
    </Fade>
  );
};

export default HypnobirthContent;
