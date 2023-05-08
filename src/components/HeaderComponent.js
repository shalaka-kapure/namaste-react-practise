import { useState } from "react";

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
        <h1>FoodVilla</h1>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn ? <button onClick={loggedInUser}>Logout</button> : <button onClick={loggedInUser}>Log In</button> }
      </div>
    );
  };
  export default HeaderComponent;