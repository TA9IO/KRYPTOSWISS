import React from "react";
import user from "../../assets/images/user.png";
function UserInfo() {
  return (
    <div className="user-info-container">
      <div className="flex-container">
        <div className="created-by-contaier single-item-container">
          <p className="title">Created by</p>
          <div className="info">
            <div className="img-container">
              <img src={user} alt="user" />
            </div>
            <p>
              <span>@</span>barcin
            </p>
          </div>
        </div>
        <div className="collection-contaier single-item-container">
          <p className="title">Collection</p>
          <div className="info">
            <p>SWISS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
