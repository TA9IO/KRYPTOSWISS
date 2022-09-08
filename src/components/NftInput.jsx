import React from "react";

function NftInput({
  inputType,
  title,
  placeholder,
  handleClick,
  req,
  handleKeyUp,
}) {
  return (
    <div className="nft-input-title-container">
      <p className="nft-input-title">
        {title}
        {req && "*"}
      </p>

      {inputType === "number" ? (
        <div className="nft-input-number-container">
          <input
            step={0.01}
            type={"number"}
            min="0"
            onChange={handleClick}
            placeholder={placeholder}
          />
          <p>ETH</p>
        </div>
      ) : inputType === "textarea" ? (
        <textarea
          res
          className="nft-input"
          rows={15}
          onChange={handleClick}
          placeholder={placeholder}
          style={{ resize: "vertical", minHeight: "100px" }}
        />
      ) : (
        <input
          className="nft-input"
          placeholder={placeholder}
          onChange={handleClick}
          onKeyUp={handleKeyUp}
          type={inputType}
        />
      )}
    </div>
  );
}

export default NftInput;
