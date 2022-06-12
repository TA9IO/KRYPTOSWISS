import React from "react";
import { topUsers } from "../../assets/dummyData/topUsers";
import { Title } from "../../components";

console.log(topUsers);

function TopCreators() {
  return (
    <div className="top-section-container">
      <Title>Top Creators</Title>
      <div className="creators-conatiner">
        {topUsers.map((item, i) => {
          const { img, name, eth, sells, currency, id } = item;
          return (
            <div className="creator-container" key={id}>
              <div className="rank">{i + 1}</div>
              <div className="creator-image-container">
                <img src={img} alt={name} />
              </div>
              <div className="creator-info-container">
                <div className="creator-name">{name}</div>
                <div style={{ fontWeight: "bold" }} className="creator-sells">
                  {sells}{" "}
                  <span style={{ fontWeight: "200", opacity: "0.7" }}>
                    {currency.toUpperCase()}
                  </span>
                  <br></br>
                  {/**<img className="etherium-icon" src={eth} alt="ETH"  />
                   */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopCreators;
