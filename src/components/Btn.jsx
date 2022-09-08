import React from "react";

const STYLES = [
  'btn-primary',
  "btn--primary--solid--round",
  "btn--primary--solid",
  // "btn--primary--nogradiant--solid",
  "btn--no--outline",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
  "btn--primary--nogradiant--solid--BneiBrakBay"
];

const SIZES = ["btn-medium", "btn-small"];

function Btn({ children, type, onClick, buttonStyle, buttonSize, className, style }) {
  const setButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const setButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${setButtonStyle} ${setButtonSize} ${className}`}
      onClick={onClick}
      style={{style}}
    >
      {children}
    </button>
  );
}

export default Btn;
