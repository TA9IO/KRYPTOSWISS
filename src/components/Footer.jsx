import React from "react";
import { useLocation } from "react-router-dom";
const marketplace = [
  {
    name: "all NFTs",
    link: "https://www.kryptoswiss.com/marketplace", //:-)
    id: 1,
  },
  {
    name: "My Acconst",
    link: "https://www.kryptoswiss.com/Acconst", //:-)
    id: 2,
  },
  {
    name: "Career",
    link: "https://www.kryptoswiss.com/Career", //:-)
    id: 3,
  },
  {
    name: "Virtual Worlds",
    link: "https://www.kryptoswiss.com/vrw", //:-)
    id: 4,
  },
];
const aboutus = [
  {
    name: "About NFTs",
    link: "https://www.kryptoswiss.com/what-is-nft", //:-)
    id: 1,
  },
  {
    name: "Live Auctions",
    link: "https://www.kryptoswiss.com/Auctions", //:-)
    id: 2,
  },
  {
    name: "NFT blog",
    link: "https://www.kryptoswiss.com/blog", //:-)
    id: 3,
  },
  {
    name: "Activity",
    link: "https://www.kryptoswiss.com/Activity", //:-)
    id: 4,
  },
];
const support = [
  {
    name: "Help & support",
    link: "https://www.kryptoswiss.com/hrlp", //:-)
    id: 1,
  },
  {
    name: "item Details",
    link: "https://www.kryptoswiss.com/itemdetails", //:-)
    id: 2,
  },
  {
    name: "Author Profile",
    link: "https://www.kryptoswiss.com/profile", //:-)
    id: 3,
  },
  {
    name: "privacy policy",
    link: "https://www.kryptoswiss.com/privacy", //:-)
    id: 4,
  },
];

function FooterItem({ cName, title, info }){
  return (
    <div className={cName}>
      <h3>{title}</h3>
      <ul>
        {info.map((item) => {
          const { name, id } = item;
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};


function Footer({path}) {
  const { pathname } = useLocation();
  if (pathname === "/Explore") return null;
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-left">
          <h3>KRYPTOSWISS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing  Aspernatur
            accusantium, earum  provident saepe veniam reprehenderit porro
            odit! Maiores, culpa corporis! 
          </p>
        </div>
        <div className="footer-container-right">
            <FooterItem
              cName="right-info"
              title="marketplace"
              info={marketplace}
            ></FooterItem>
            <FooterItem
              cName="right-info"
              title="About us"
              info={aboutus}
            ></FooterItem>
            <FooterItem
              cName="right-info"
              title="Support"
              info={support}
            ></FooterItem>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
