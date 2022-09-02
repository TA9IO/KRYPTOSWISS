import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function ProfileTopSec() {
  const [avatar, setAvatar] = useState(
    "https://nypost.com/wp-content/uploads/sites/2/2022/05/better-call-saul-season-6-3.jpg"
  );
  const [cover, setCover] = useState(
    "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80"
  );

  const [name, setName] = useState("saul goodman");
  return (
    <div className="main-container">
      <div className="profile">
        <img src={cover} alt="" className="profile-cover" />

        <div className="profile-avatar">
          <img src={avatar} alt="" className="profile-img" />
          <div className="profile-name">{name}</div>
        </div>

        <nav className="profile-menu">
          {/* i will generate the linkes dynamically later :-) */}
          {/* same thing for the nested routes
           i need to know how the final product will be like
           i dont want to repeat my self.
        */}

          <NavLink to="/profile" className="profile-menu-link">
            Created
          </NavLink>
          <NavLink to="/" className="profile-menu-link">
            Favorited
          </NavLink>
          <NavLink to="/" className="profile-menu-link">
            Activity
          </NavLink>
          <NavLink to="/" className="profile-menu-link">
            More
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default ProfileTopSec;
