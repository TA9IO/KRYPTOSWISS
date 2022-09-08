import React from "react";
import Btn from "./Btn";
function Card({ data }) {
  const { name, image, owner, price, currency, id, link, icon } = data;

  return (
  
      <article className="item-container" key={id}>
        <div className="item-image-container">
          <img src={image} alt="nft1" />
        </div>
        <div className="item-info-container">
          <div>
            <div className="item-name">{name}</div>
            <div className="item-owner">{owner}</div>
          </div>
          <div className="item-price">
            <div className="item-price-text">Price</div>
            <div className="item-price-number">
              <div>{icon}</div>
              <div className="int-price">{price}</div>
            </div>
          </div>
          <div className="end-in">Ends in one day</div>
        </div>
        <div className="buy-now">
        
          <Btn>Buy now</Btn>
        
        </div>
      </article>
  
  );
}

export default Card;
