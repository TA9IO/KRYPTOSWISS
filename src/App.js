import React from 'react'
import "./SCSS/index.scss";
import { Navbar, Footer, Input, ScrollToTop } from "./components";
import Home from "./routes/Home";
import Explore from "./routes/Explore";
import Consult from "./routes/Consult";
import CreateNFTRoute from "./routes/CreateNFTRoute";
import Profile from "./routes/Profile";
import Page404 from "./pages/Page404";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
function App() {





  return (
    <div className="app">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/Consult" element={<Consult />} />
          <Route path="/CreateNFT" element={<CreateNFTRoute />} />
          <Route path="/Profile" element={<Profile />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
