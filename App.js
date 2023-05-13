import React from "react";
import ReactDOM from "react-dom/client ";
import HeaderComponent from "./src/components/HeaderComponent";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom/dist";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Profile from "./src/components/Profile";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [{
          path: "profile", //never use /profile 
          element: <Profile />,
        }]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

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
