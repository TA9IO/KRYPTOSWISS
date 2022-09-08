import React, { Children } from "react";

function Title({ title, style, children, req, color}) {
  //**
  // 'req' prop is for required
  // add a * at the end of the title
  // so if you want to change it later
  // no need to add '*' manually, that disgusting XD
  // just add req as pro trading is samply bro matihch "alina chikor"
  if (color === 'black') {
    
    return (
      
      <h1 style={{ color: "black", ...style }}>
      {title ? title : children} {req ? "*" : null}
      </h1>
      );
    }
    return (
      
      <h1 style={{ color: "white", ...style }}>
      {title ? title : children} {req ? "*" : null}
      </h1>
      );

}

export default Title;
