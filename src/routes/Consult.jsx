import React from "react";
import {
  ItemImage,
  UserInfo,
  Price,
  Description,
  History,
  Details,
  Auction,
  Tags,
} from "../pages/Consult/";
function Consult() {
  return (
    <main
      className="consult-main-page-container"
      style={{ paddingTop: "150px" }}
    >
      <div className="consult-container">
        <ItemImage></ItemImage>
        <div className="top-section">
          <UserInfo></UserInfo>
          <Price></Price>
        </div>

        <div className="bottom-section">
          <Description></Description>
          {/***/}
          <History></History> 
        </div>
      </div>
    </main>
  );
}

export default Consult;
