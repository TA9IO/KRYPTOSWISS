import React from "react";
import { Title } from "../../components/";
import Details from "./Details";
function Description() {
  return (
    <div className="description-main-container">
      <Title
        style={{
          color: "black",
          borderBottom: "1px solid #ececec",
          paddingBottom: "20px",
          width: "80%",
        }}
      >
        Description
      </Title>

      <div className="description-container">
        <div className="info-descreption">
          <p>Kogarashi</p>
          <p>witer wind or wind that sheds leaves</p>
        </div>
        <div className="sizes-descreption">
          <p>1920x1080px</p>
          <p>60 FPS</p>
        </div>
        <Details></Details>
      </div>
    </div>
  );
}

export default Description;
