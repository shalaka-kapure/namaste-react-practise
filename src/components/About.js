import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeaderComponent from "./HeaderComponent";
import Profile from "./Profile";

const About = () => {
  return (
    <div className="bg-gray-200 h-[88vh]">
      {/* <HeaderComponent/> */}
      <h1 className="text-center font-bold text-lg py-5">
        Some Information about DevEats
      </h1>
      {/* <Outlet/> */}
      {/* or */}
      {/* <Profile name={"Shalaka"}/> */}
      {/* <Footer/> */}
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-start justify-center w-[50%]">
          <h2 className="text-center font-bold text-lg py-5">
            Key Features:
          </h2>
          <ul className="text-left">
            <li className="text-lg py-2">
              · Real time data fetching from swiggy API
            </li>
            <li className="text-lg py-2">
              · Shimmer effect to indicate when data is being loaded
            </li>
            <li className="text-lg py-2">
              · Infinite scrolling for seamless loading of new data
            </li>
            <li className="text-lg py-2">
              · Sorting of restaurants based on different criteria
            </li>
            <li className="text-lg py-2">
              · Debouncing effect to prevent unnecessary requests
            </li>
            <li className="text-lg py-2">
              · Lazy loading/bundle chunking for lightning-fast loading
            </li>
            <li className="text-lg py-2">
              · State managementusing React Redux{" "}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-center font-bold text-lg py-5">Tech Stack: </h2>
          <ul className="text-left">
            <li className="text-lg py-2">
              · React for building a robust frontend
            </li>
            <li className="text-lg py-2">
              · TailwindCSS for beautiful and responsive styling{" "}
            </li>
            <li className="text-lg py-2">
              {" "}
              · React-router-dom for routing and navigation
            </li>
            <li className="text-lg py-2">
              · State Management using redux toolkit
            </li>
            <li className="text-lg py-2">
              · Unit testing with React testing library
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
