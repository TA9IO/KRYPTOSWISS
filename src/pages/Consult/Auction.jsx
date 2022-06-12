import React from "react";
import user from "../../assets/images/win-user.png";
import user2 from '../../assets/images/user.png'
import user3 from '../../assets/images/NFTs/11.jpg'
import { BiLinkExternal } from "react-icons/bi";
const listedByInfo = [
  {
    img: user,
    name: "@FWDxyz",
    date: "Mar 2, 2022 at 12:58pm",
    price: 0.31,
    currency: "ETH",
    tobnb: 1.85,
    bnb: 231,
    eth: 2700,
    action: 'Listed by'

  },
];
const bidders = [
  {
    img: user2,
    name: "@FWDxyz",
    date: "Feb 26, 2022 at 12:58pm",
    price: 0.165,
    currency: "ETH",
    tobnb: 1.85,
    bnb: 231,
    eth: 2700,
    action: 'Bid placed by'

  },
  {
    img: user3,
    name: "@DimonJP",
    date: "Feb 25, 2022 at 12:10pm",
    price: 0.15,
    currency: "BNB",
    tobnb: 1.85,
    bnb: 231,
    eth: 2700,
    action: 'Bid placed by'

  },
  {
    img: user,
    name: "@barcin",
    date: "Feb 03, 2022 at 8:47am",
    price: 0.15,
    currency: "ETH",
    tobnb: 1.85,
    bnb: 231,
    eth: 2700,
    action: 'Reserve changed by'
    
  
  },
  {
    img: user,
    name: "@FWDxyz",
    date: "Mar 2, 2022 at 12:58pm",
    price: 0.15,
    currency: "ETH",
    tobnb: 1.85,
    bnb: 231,
    eth: 2700,
    action: 'Changed by'

  },
  {
    img: user,
    name: "@FWDxyz",
    date: "Mar 2, 2022 at 12:58pm",
    currency: "ETH",
    tobnb: 1.85,
    bnb: 231,
    eth: 2700,
    action: 'Minted by'

  },
];

function Auction() {
  return (
    <div className="auction-container">
      <AuctionItemComponent loopData={listedByInfo}></AuctionItemComponent>
      {listedByInfo.map((item, i) => {
        const bnbPrice = (item.price / item.tobnb).toFixed(3);
        return (
          <div className="winner-info-container">
            <div className="img-container">
              <img
                className="user-img"
                src={item.img}
                alt="user img"
                srcset=""
              />
            </div>

            <div className="auction-winner">Auction won by {item.name}</div>
            <div className="auction-price">
              sold for {bnbPrice} BNB{" "}
              <span className="euro-price">
                &#8364;{(item.bnb * bnbPrice).toFixed(2)}
              </span>
            </div>
            <div className="auction-date"> {item.date} </div>
            <div className="auction-owner">
              {" "}
              auction settled by{" "}
              <span>
                {item.name} <BiLinkExternal size={20}></BiLinkExternal>{" "}
              </span>
            </div>
          </div>
        );
      })}
      <AuctionItemComponent loopData={bidders}></AuctionItemComponent>

    </div>
  );
}

const AuctionItemComponent = ({ loopData }) => {
  return (
    <>
      {loopData.map((item, i) => {
        const { img, name, date, price, currency, action } = item;

        return (
          <div className="auction-item-container">
            <div className="listed-by-info-container">
              <div className="info-section">
                <div className="img-container">
                  <img src={img} alt="" />
                </div>
                <div className="user-info">
                  <p>
                    <span style={{ fontWeight: "bolder" }}>{action}</span>{" "}
                    <span className="title">{name}</span>
                  </p>
                  <p className="date">{date}</p>
                </div>
              </div>
            </div>
            <div className="price-containe">
              <h2>
                {price ? `${price} ${currency}`  : ""}
              </h2>
              <BiLinkExternal size={25} color="#666"></BiLinkExternal>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Auction;
