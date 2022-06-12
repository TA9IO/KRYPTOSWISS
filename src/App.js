import "./SCSS/index.scss";
import { Navbar, Footer, Input} from "./components";
import Home from "./routes/Home";
import Explore from "./routes/Explore";
import Consult from "./routes/Consult";
import Page404 from './pages/Page404'

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
      
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/Consult' element={<Consult />}/>

        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer></Footer>
  </Router>
    </div>
  );
}

export default App;
