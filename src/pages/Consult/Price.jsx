import React from "react";
import Btn from "../../components/Btn";
import winuser from "../../assets/images/win-user.png";

function Price() {
  return (
    <div className="main-price-container">
      <div className="left-text">
        <p className="title">Reserve price</p>
        <h1>0.30 BNB</h1>
        <div className= 'user'>
          <span className="title">Listed by</span>
          <div className="img-container">
            <img src={winuser} alt="winuser" />
          </div>
          <span className="title owner-name">&#64;FWDxyz</span>
        </div>
      </div>
      <div className="button-container">
        <Btn buttonStyle='btn--primary--solid' className='price-button' >Place Bid</Btn>
      </div>
    </div>
  );
}

export default Price;
