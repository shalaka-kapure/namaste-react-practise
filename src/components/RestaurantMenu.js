import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import ShimmerMenu from "./ShimmerMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [resInfo, menu] = useRestaurant(id);
  const isOnline = useOnline();

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  if (!isOnline) {
    return (
      <h1>
        It looks like you're offline, please check your internet connection
      </h1>
    );
  }

  return menu?.length > 0 ? (
    <>
      <div className="flex flex-col bg-gray-200">
        <div className="flex flex-col w-[80%] md:w-2/3 p-4 border m-auto">
          <div className="flex flex-col justify-between pb-4 border-b md:flex-row gap-3">
            <div className="flex flex-col text-xs text-[#535665] font-medium gap-1">
              <span className="text-xl font-bold text-black">
                <h2>{resInfo.name}</h2>
              </span>
              <img
                className="w-56 h-36 rounded"
                src={IMG_CDN_URL + resInfo.cloudinaryImageId}
                alt=""
              />
              <span className="">
                Address: {resInfo?.labels[1].message}
                <i className="text-blue-600 fa-solid fa-location-dot"></i>
              </span>
              <span className="">
                {resInfo.avgRating}★{" "}
                <i className="text-green-600 fa-solid fa-star"></i> |{" "}
                {resInfo.totalRatingsString}
              </span>
              <span className="">
                <h3>
                  Cuisine:{" "}
                  {resInfo?.cuisines ? resInfo?.cuisines.join(", ") : ""}
                </h3>
              </span>
            </div>
            <div className="flex gap-8 items-center border-b py-3 text-sm md:text-base"></div>
            <div className="flex items-center gap-2 font-semibold">
              <svg
                className="RestaurantTimeCost_icon__8UdT4"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="8.25"
                  stroke="#3E4152"
                  strokeWidth="1.5"
                ></circle>
                <path
                  d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <span className="">
                <h3>Cost for Two: {resInfo.costForTwoMessage}</h3>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between border-b pb-6 mb-4 gap-6">
            {menu.map((card, index) => (
              <div className="flex flex-col" key={index}>
                {card?.card?.card["@type"] ===
                  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && (
                  <div>
                    <h2>{card?.card?.card?.title}</h2>
                    {card?.card?.card?.itemCards?.map((item, itemIndex) => (
                      <div className="flex flex-row h-auto mb-1">
                        <div
                          className="flex flex-col gap-2 w-full md:w-3/4"
                          key={itemIndex}
                        >
                          <span className="font-semibold text-base">
                            {item?.card?.info?.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">
                              &#8377;{" "}
                              {item?.card?.info?.price
                                ? item.card.info.price / 100
                                : item.card.info.defaultPrice / 100}
                            </span>
                          </div>
                          <p className="text-xs text-[#535665]">
                            Category: {item?.card?.info?.category}
                          </p>
                          <p className="text-xs text-[#535665] ">
                            Description: {item?.card?.info?.description}
                          </p>
                        </div>
                        <div className=" flex flex-col gap-1 relative w-auto h-[5.5rem]">
                          <img
                            src={
                              item?.card?.info?.imageId
                                ? IMG_CDN_URL + item?.card?.info?.imageId
                                : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
                            }
                            alt=""
                            className="w-[10rem] h-[6rem] rounded self-center object-cover"
                          />
                          <button
                            className="absolute bottom-[-8px] bg-white shadow-md border self-center text-[10px] py-1 px-4 font-medium rounded  active:scale-90 hover:bg-orange-200 transition-all duration-300 ease-in-out"
                            onClick={() => handleAddItem(item)}
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  ) : (
    <ShimmerMenu />
  );
};

export default RestaurantMenu;
