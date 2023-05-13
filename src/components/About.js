import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeaderComponent from "./HeaderComponent";
import Profile from "./Profile";

const About = () => {
return (
    <div>
        {/* <HeaderComponent/> */}
        <h1>About Us</h1>
        {/* <Outlet/> */}
         {/* or */}
        <Profile name={"Shalaka"}/>
        {/* <Footer/> */}
    </div>
)
}

export default About;