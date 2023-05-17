import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
    return (
      //   <h1 id="title">
      //     Food Villa
      //   </h1>
      <a href="/">
        <img
          src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
          alt="logo"
          className="logo"
        />
      </a>
    );
  };

  //Composing Components
const HeaderComponent = () => {
const [isLoggedIn, setisLoggedIn] = useState(true);

const loggedInUser = () => {
  //API call to check if the user is logged in
  setisLoggedIn(!isLoggedIn);
}
    return (
      <div className="header">
        <Title />
        <div className="navItems">
          <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/contact">
            <li>Contact</li>
            </Link>
            <Link to="/instamart">
            <li>Instamart</li>
            </Link>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn ? <button className="logBtn" onClick={loggedInUser}>Logout</button> : <button className="logBtn" onClick={loggedInUser}>Log In</button> }
      </div>
    );
  };
  export default HeaderComponent;