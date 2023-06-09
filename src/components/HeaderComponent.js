import { useContext, useState } from "react";
import useRes from "../utils/useRes.js";
import { filterData } from "../utils/utils.js";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Cart from "./Cart.js";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//Composing Components
const HeaderComponent = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [searchText, setsearchText] = useState("");

  const loggedInUser = () => {
    //API call to check if the user is logged in
    setisLoggedIn(!isLoggedIn);
  };

  const [restaurants, filteredRes, setfilteredRes] = useRes();

  const location = useLocation();

  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: item.href === location.pathname,
  }));

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[100rem] px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://icon-library.com/images/food-app-icon/food-app-icon-12.jpg"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://icon-library.com/images/food-app-icon/food-app-icon-12.jpg"
                      alt="Your Company"
                    />
                    <span className="text-white ml-[5px] hidden md:hidden lg:block">
                      DevEats.
                    </span>
                  </div>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {updatedNavigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        exact
                        activeClassName="bg-gray-900 text-white"
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <div className="relative">
                    <Cart />
                    <span
                      className="absolute top-[-20%] right-[-32%] inline-flex items-center justify-center w-3 h-3.5 bg-red-500 text-white rounded-full text-xs"
                      data-testid="cart"
                    >
                      {cartItems.length}
                    </span>
                  </div>
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://th.bing.com/th/id/OIP.eiWzGhhOUjleiWnRtADa9QHaHa?pid=ImgDet&rs=1"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-200 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default HeaderComponent;

// const Title = () => {
// return (
//   <h1 id="title">
//     Food Villa
//   </h1>
//     <a href="/">
//       <img
//         className="w-20"
//         src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
//         alt="logo"
//       />
//     </a>
//   );
// };

// <div className="flex justify-between m-5 mb-3 border border-black p-1">
//   <Title />
//   <div className="flex flex-row">
//     <ul className="flex flex-row p-3">
//       <Link to="/">
//         <li className="p-2">Home</li>
//       </Link>
//       <Link to="/about">
//         <li className="p-2">About</li>
//       </Link>
//       <Link to="/contact">
//         <li className="p-2">Contact</li>
//       </Link>
//       {/* <Link to="/instamart">
//         <li className="p-2">Instamart</li>
//       </Link> */}
//       <li className="p-2">Cart</li>
//     </ul>
//   </div>
//   {isLoggedIn ? (
//     <button className="logBtn" onClick={loggedInUser}>
//       Logout
//     </button>
//   ) : (
//     <button className="logBtn" onClick={loggedInUser}>
//       Log In
//     </button>
//   )}
// </div>
