import React from "react";
import { Title } from "../../components/";
import { BsEye } from "react-icons/bs";
import Tags from "./Tags";
function Details() {
  return (
    <div className="details-main-container">
      <Title
        style={{
          color: "black",
          borderBottom: "1px solid #ececec",
          paddingBottom: "20px",
          width: "80%",
        }}
      >
        Details
      </Title>
      <div className="details-container">
        <BsEye color="#666" size={30}></BsEye>
        <div>View on IPFS</div>
      </div>
      <Tags></Tags>
    </div>
  );
}

export default Details;
