import React from "react";
import ReactDOM from "react-dom/client ";
import HeaderComponent from "./src/components/HeaderComponent";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//Older way of writing React before JSX was invented

// import React from "react";
// import ReactDOM from "react-dom/client ";

// const heading1 = React.createElement(
//     "h2",
//     {
//         id: "title",
//     },
//     "Heading 1"
// );

// const heading2 = React.createElement(
//     "h2",
//     {
//         id: "title",
//     },
//     "Heading 2"
// );

// const container = React.createElement(
//     "div",
//     {
//         id: "container",
//     },
//     [heading1, heading2]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
