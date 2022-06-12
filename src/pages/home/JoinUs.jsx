import React from "react";
import { Title } from "../../components";
import { art0, art1, art2 } from "../../assets/images/joinus";
const howTo = [
  {
    info: "Create & validate your accont",
    id: 1,
  },
  {
    info: "Create your NFT",
    id: 2,
  },
  {
    info: "Publish your NFT",
    id: 3,
  },
];
function JoinUs() {
  return (
    <div className="join-us-section-container">
      <Title>JoinUs</Title>
      <div className="join-us-section">
        <div className="images-secrion">
          <div className="grid-v-s">
            <img src={art1} alt="" />
          </div>
          <div>
            <img src={art0} alt="" />
          </div>
          <div>
            <img src={art2} alt="" />
          </div>
        </div>
        <div className="text-section">
         <div className="text-section-title">

         <h3>List Your Creative NFTs with Us!</h3>
         
         </div>
          <div className="join-us-how-to-section">
            {howTo.map((item, i) => {
              const {info, id} = item
              return(
              
                <p className="join-us-how-to-section-item" key={id}>
                  <span style={{marginRight: '6px'}}>{i + 1})</span>
                  <span> {info}</span>
                </p>
              )

            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
