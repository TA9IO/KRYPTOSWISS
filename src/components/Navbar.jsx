import React from "react";
import logo from "../assets/images/logo.png";
import { dummyNavData } from "../assets/dummyData/navLinks";
import { Input, Btn } from "../components";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { BiSearch }from "react-icons/bi";
import logo1 from '../assets/images/logo1.svg'

function Navbar() {
  // console.log(logo1)
  const [toggleOverlay, setToggleOverlay] = React.useState(false);
 

  // const body = document.body;
  // let lastScroll = 0;

  //   window.addEventListener("scroll", () => {
  //     let currentScroll = window.pageYOffset;
  //     if (currentScroll > 200) {
  //       // if (currentScroll <= 0) {
  //       //   body.classList.remove("scroll-up");
  //       //   return;
  //       // }

  //       if (
  //         currentScroll > lastScroll &&
  //         !body.classList.contains("scroll-down")
  //       ) {
  //         // body.classList.remove("scroll-up");
  //         body.classList.add("scroll-down");
  //       } else if (
  //         currentScroll < lastScroll &&
  //         body.classList.contains("scroll-down")
  //       ) {
  //         body.classList.remove("scroll-down");
  //         // body.classList.add("scroll-up");
  //       }
  //       lastScroll = currentScroll;
  //     }
  //   });
  

  return (
    // <nav className={pathname === "/Explore" ? 'navbar nav-bg' : 'navbar'}>
    <nav className="navbar nav-bg">
      <div className="inner-flex">
        <div className="logo-container">
          <img src={logo1} alt="logo" />
          {/* <span className="logo-header">KRYPTOSWISS</span> */}
        </div>
        {/**** */}
        <div className="search-bar-container">
          <Input></Input>
        </div>
        <div className="links-container">
          <ul>
            {dummyNavData.map((ele) => {
              return (
                <li key={ele.id}>
                  <NavLink className="link" to={ele.path}>
                    {ele.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {/**** */}
        <div className="wallet-container lgscreen-btn ">
            <Btn className="btn-primary">connect Wallet</Btn>
        </div>
        {/***********-_ SMALL SCREEN _-****************/}
        <div className="navbar-smallscreen">
          <BiSearch className="search-icon" color="white" size={30}></BiSearch>

          <GiHamburgerMenu
            className="hamburgermenu"
            onClick={() => setToggleOverlay(true)}
            size={27}
            color="#fff"
          ></GiHamburgerMenu>

          {toggleOverlay && (
            <div className="links-container-smallscreen-overlay">
              <CgClose
                onClick={() => setToggleOverlay(false)}
                size={27}
                color="white"
                className="overlay-close"
              ></CgClose>
              <ul>
                {dummyNavData.map((ele) => {
                  return (
                    <li key={ele.id} onClick={() => setToggleOverlay(false)}>
                      <NavLink className="link link-smallscreen" to={ele.path}>
                        {ele.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <Btn className={'connect-wallet-btn'}>connect Wallet</Btn>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
