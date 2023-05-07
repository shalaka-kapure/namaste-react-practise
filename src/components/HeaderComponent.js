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
    return (
      <div className="header">
        <Title />
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default HeaderComponent;