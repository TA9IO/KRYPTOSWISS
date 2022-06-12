import React from "react";
import { limited } from "../../assets/dummyData/limited.js";
import { Btn, Title, ButtonNoBg } from "../../components";
function Limited() {
  return (
    <div className="limited-section-container">
      <Title>Limited Auction</Title>
      <div className="items-container">
      
          {limited.map((item) => {
            const { name, image, owner, price, currency, id, link, icon } = item;
            return (
              <div className="item-container" key={id}>
                <div className="item-image-container">
                  <img src={image} alt="nft1" />
                </div>
                <div className="item-info-container">
                  <div className="item-name">{name}</div>
                  <div className="item-owner">By <span>{owner}</span></div>
                  <div className="current-bid">Current Bid</div>
                  <div className="item-price">{price} <span>{currency.toUpperCase()} {icon}</span></div>
                  {/**<div className="item-currency"></div>**/}
                  <div className="item-link">
                    <Btn buttonStyle='btn--primary--outline' className='btn-with'>Buy</Btn>
                  </div>
                </div>
              </div>
            );
          })}
        
      </div>
    </div>
  );
}

export default Limited;
