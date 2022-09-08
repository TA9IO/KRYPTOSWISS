import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Title, Btn } from "../../components";
import { AiFillFilter, AiFillCloseCircle } from "react-icons/ai";
// import { SideBarData } from "./SideBarData";
const SideBarData = [
  {
    name: "Clusters",
    path: `/Clusters`,
  },

  {
    name: "Edge",
    path: `/Edge`,
  },
  {
    name: "Devices",
    path: `/Devices`,
  },
];
function SideBar({ data, children }) {
  const [toggleSidebar, setToggleSidebar] = React.useState(false);
  return (
    <React.Fragment>
      <aside className={toggleSidebar ? "sidebar-menu .show-side-bar" : 'sidebar-menu hide-side-bar'}>
        <div className="price-range-container">
          <Title color={'black'} style={{ fontSize: "1rem", fontWeight: "500" }}>
            Price Range
          </Title>
          {/********* */}
          <div className="filter-container">
            <div className="select-containe">
              <div className="input-container">
                <input
                  placeholder="MIN"
                  className="currency-input"
                  type="text"
                  name=""
                  id=""
                />
                <input
                  placeholder="MAX"
                  className="currency-input"
                  type="text"
                  name=""
                  id=""
                />
                <select className="selectmenu-element" id="my-selectmenu">
                  <option>USD </option>
                  <option>BNB</option>
                  <option>ETH</option>
                  <option>SOl</option>
                </select>
              </div>
            </div>
            <Btn>SET Price</Btn>
          </div>

          {/********* */}
        </div>
        {/********* */}
        <div className="availability-container">
          <Title color={'black'} style={{ fontSize: "25px", fontWeight: "bold" }}>
            Availability
          </Title>

          <div className="wrapper">
            <input type="radio" name="select" id="option-1" defaultChecked="" />
            <input type="radio" name="select" id="option-2" />
            <input type="radio" name="select" id="option-3" />
            <label htmlFor="option-1" className="option option-1">
              <div className="dot" />
              <span>All</span>
            </label>
            <label htmlFor="option-2" className="option option-2">
              <div className="dot" />
              <span>Avalibale</span>
            </label>
            <label htmlFor="option-3" className="option option-3">
              <div className="dot" />
              <span>Sold</span>
            </label>
          </div>

          {/********* */}
        </div>
        <div className="market-container">
          <Title color={'black'} style={{ fontSize: "25px", fontWeight: "500" }}>Market</Title>

          <div className="wrapper">
            <input type="checkbox" name="select" id="check-1" />
            <input type="checkbox" name="select" id="check-2" />
            <label htmlFor="check-1" className="option option-1">
              <div className="square" />
              <span>Primary Market</span>
            </label>
            <label htmlFor="check-2" className="option option-2">
              <div className="square" />
              <span>Secondary Market</span>
            </label>
          </div>
        </div>
        <div className="type-container">
          <Title color={'black'} style={{ fontSize: "25px", fontWeight: "500" }}>Type</Title>
          <div className="wrapper">
            <input type="checkbox" name="select" id="check-type-1" />
            <input type="checkbox" name="select" id="check-type-2" />
            <label htmlFor="check-type-1" className="option option-1">
              <div className="square" />
              <span>Primary Market</span>
            </label>
            <label htmlFor="check-type-2" className="option option-2">
              <div className="square" />
              <span>Secondary Market</span>
            </label>
          </div>
        </div>
        <div
        className="show-hide-sidebar"
        onClick={() => {
          setToggleSidebar((prev) => {
            return !prev;
          });
          console.log(toggleSidebar);
        }}
      >
        {
          toggleSidebar ? <AiFillCloseCircle size={25} color="white"/> : <AiFillFilter size={25} color="white"></AiFillFilter>

        }
      </div>
      </aside>

    </React.Fragment>
  );
}

export default SideBar;
