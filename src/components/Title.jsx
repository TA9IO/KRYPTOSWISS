import React, { Children } from "react";

function Title({ title, style, children, req }) {
  //**
  // 'req' prop is for required
  // add a * at the end of the title
  // so if you want to change it later
  // no need to add '*' manually, that disgusting XD
  // just add req as pro trading is samply bro matihch "alina chikor"

  return (
    <h1 style={{ color: "white", ...style }}>
      {title ? title : children} {req ? "*" : null}
    </h1>
  );
}

export default Title;
