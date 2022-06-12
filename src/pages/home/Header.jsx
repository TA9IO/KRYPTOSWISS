import React from "react";
import { Btn } from "../../components/";
import donkey from "../../assets/images/donkey.jpg";

function Header() {
  const [time, setTime] = React.useState("loading...");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds()
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="header-container">
      <div className="header-left-section">
        <h2>NFT MarketPlace</h2>
        <h1>
          Discover Rare &<br></br> Unique Digital Art
        </h1>
        <p>
          Dicover, Collect, And Sell Extreaordinary NFTs On The<br></br> World's
          First & Largest NFT Marketplace
        </p>
        <div className="buttons-section">
          <Btn
            className="margin-right button-primary"
            buttonStyle={"btn--primary--solid"}
          >
            Explore More
          </Btn>
          <Btn buttonStyle="btn--no--outline">connect wallet</Btn>
        </div>

        <div className="summeray">
          <TextualSummeray number={125} title="Artwork"></TextualSummeray>
          <TextualSummeray number={17} title="Auction"></TextualSummeray>
          <TextualSummeray number={10} title="Creators"></TextualSummeray>
        </div>
      </div>
      {/***** */}
      <div className="header-right-section">
        <div className="img-container">
          <img src={donkey} alt="donkey" />
          <div className="item-info-container">
            <div className="item-info">
              {/*/***** */}
              <h3>
                <span style={{ fontWeight: "400" }}>Flight to Egypt By:</span>{" "}
                ChernayRichka
              </h3>

              <div className="item-info-plus">
                <div className="auction-data">
                  <div className="item-bid">
                    <p>Current bid</p>
                    <p className="bold">
                      20 <span className="bold currency">BNB</span>
                    </p>
                  </div>
                  <div className="item-time">
                    <p>Remaning Time</p>
                    <p className="bold">{time}</p>
                  </div>
                </div>
                <div className="button-container">
                  <Btn
                    buttonStyle="btn--primary--solid"
                    className="radius-5px size-10px"
                  >
                    Plcae bid
                  </Btn>
                </div>
              </div>
              {/*/***** */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function TextualSummeray({ children, number, title }) {
    return (
      <div style={{ marginBottom: "30px", width: "33%" }}>
        <div className="num" style={{ fontWeight: "bolder", fontSize: "30px" }}>
          {number ? `${number}K+` : "--"}
        </div>
        <div className="title" style={{ fontWeight: "600", color: "white" }}>
          {title ? title : "--------------"}
        </div>
        {children}
      </div>
    );
  }
}

export default Header;
