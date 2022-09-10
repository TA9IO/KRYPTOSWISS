import React, { useCallback, useState, useMemo } from "react";
import { Title, NftInput, Button, TagInput, Btn } from "../../components/";
import { useDropzone } from "react-dropzone";
import { BsImageFill } from "react-icons/bs";

function CreateNFT() {
  const [fileUrl, setFileUrl] = useState(null);
  const [nftData, setNftData] = useState({
    name: "",
    price: "",
    description: "",
    tags: [],
  });
  const onDrop = useCallback(() => {
    // Upload Image To IPFS or whatever
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 100_000_000, // 100mo in byte
  });
  const fileStyle = React.useMemo(() => `file-style`, []);
  console.log(nftData);
  
  const updateTags = useCallback((t) => setNftData({...nftData, tags: t}), []);
  return (
    <div className="create-nft">
      <div className="nft-file">
        <Title req>Image, Video, Audio or 3D Model</Title>
        <div className="nft-file-upload">
          <div {...getRootProps()} className={fileStyle}>
            <input {...getInputProps()} />
            <div className="nft-file-info">
              <p>JPG, PNG, GIF, MP4, GLB, GLTF. Max: 100 MB</p>
              <BsImageFill size={150} />
              <p>Drag and Drop Files</p>
              <p>Or Browser Media On Your Device</p>
            </div>
          </div>
          {fileUrl && (
            <aside>
              <div>
                <img src={fileUrl} alt="asset" />
              </div>
            </aside>
          )}
        </div>
      </div>
      <div className="nft-name">
        <NftInput
          title={"Name"}
          placeholder={"NFT Name"}
          handleClick={(e) => setNftData({ ...nftData, name: e.target.value })}
        />
      </div>
      <div className="nft-description">
        <NftInput
          inputType="textarea"
          title={"Description"}
          placeholder={"NFT Description"}
          handleClick={(e) =>
            setNftData({ ...nftData, description: e.target.value })
          }
        />
      </div>
      <div className="nft-price">
        <NftInput
          title={"Price"}
          placeholder={"NFT Price"}
          inputType="number"
          handleClick={(e) => setNftData({ ...nftData, price: e.target.value })}
        />
      </div>
      <div className="tag-input">
        <TagInput
          tags={nftData.tags}
          updateTags={updateTags}
          // **
        />
      </div>
      <div className="nft-create-button">
        <Button
          value="Create"
          style={{ borderRadius: "5px", padding: "1rem 2.5rem" }}
        ></Button>
      </div>
    </div>
  );
}

export default CreateNFT;
