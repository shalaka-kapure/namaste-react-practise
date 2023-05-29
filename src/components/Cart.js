import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export default function Cart() {
  const [open, setOpen] = useState(true);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.card.info.price;
    });
    return total;
  };

  return (
    <>
      <ShoppingBagIcon
        aria-hidden="true"
        className="h-6 w-6 text-white cursor-pointer"
        onClick={() => setOpen(true)}
      />

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-gray-200">
                    <div className="flex h-full flex-col overflow-y-scroll bg-gray-200 shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                  <CartItem
                                    key={item?.card?.info?.id}
                                    {...item?.card?.info}
                                  />
                                ))
                              ) : (
                                <h1 className="flex items-center justify-center">
                                  Your cart is empty
                                </h1>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {cartItems.length > 0 ? (
                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>&#8377;{(calculateTotal() / 100).toFixed(2)}</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            Delivery and Restaurant Charges are calculated at
                            checkout.
                          </p>
                          <div className="mt-6">
                            <a
                              href="#"
                              className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800"
                            >
                              Checkout
                            </a>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or{" "}
                              <button
                                type="button"
                                className="font-medium text-gray-800 hover:text-gray-800"
                                onClick={() => setOpen(false)}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

const CartItem = ({ name, imageId, price, description }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={
            imageId
              ? IMG_CDN_URL + imageId
              : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
          }
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-2">&#8377;{price / 100}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          {/* <p className="text-gray-500">Qty {product.quantity}</p> */}

          <div className="flex">
            <button
              type="button"
              className="font-medium text-gray-800 hover:text-red-800"
              onClick={() => handleRemoveItem()}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
