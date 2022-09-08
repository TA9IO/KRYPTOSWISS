import React from "react";
import { limited } from "../../assets/dummyData/limited.js";
import { Btn, Title, Card } from "../../components";
function Limited() {
  return (
    <div className="limited-section-container">
      <Title>Limited Auction</Title>
      <div className="items-container">
      
      {limited.map(_=><Card data={_}></Card>)}

        
      </div>
    </div>
  );
}

export default Limited;
