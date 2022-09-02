import React from "react";
import { Title } from "../components";
import { CreateNFT } from "../pages/createNFT";
function CreateNFTRoute() {
  return (
    <section className="create-nft-page-container">
      
        <Title>Create New Item</Title>
      <CreateNFT></CreateNFT>
    </section>
  );
}

export default CreateNFTRoute;
