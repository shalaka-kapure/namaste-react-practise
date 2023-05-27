import { IMG_CDN_URL } from "../config";

//1) using props const RestaurantCard = (props) => {
//2) const RestaurantCard = ({restaurant}) => { destructuring props

//3) const RestaurantCard = ({restaurant}) => { destructuring props and its children
//const {name, cuisines,cloudinaryImageId, lastMileTravelString } = restaurant.data;

//4)destructuring children on the fly and 5) using map
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  deliveryTime,
  cuisines,
  slaString,
  costForTwo,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="md:w-60 shadow-md md:shadow-none py-4 px-4 md:py-2  hover:shadow-xl rounded flex flex-col gap-1 text-[0.7rem] text-[#535665] ">
    <img
      src={
        IMG_CDN_URL +
        (cloudinaryImageId === ""
          ? "s6fhwzl0tss0vgrqvcid"
          : cloudinaryImageId)
      }
      alt=""
      className=" rounded object-cover"
    />
    <div className="res-details px-2">
      <h4 className="font-medium text-base text-black">{name}</h4>
      {/* 1) <h2>{props.restaurant.data?.name}</h2> */}
      {/* 2) <h2>{restaurant.data?.name}</h2> */}
      {/* 3), 4), 5) <h2>{name}}</h2> */}{" "}
      {/* If props are further destructured*/}
      <span className="">{cuisines.join(", ")}</span>
        <div className="flex justify-between items-center my-2 font-medium">
          <div className="flex items-center gap-1 px-1 text-white bg-green-500 font-semibold">
            <span className="text-[0.6rem]">&#9733;</span>
            <span className="text-[0.6rem]">
              {avgRating === "--" ? "4.2" : avgRating}
            </span>
          </div>
          <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
          <span className="">{slaString}</span>
          <div className="res-price">
            <span className="text-xs">
             ₹{costForTwo / 100} FOR TWO
            </span>
          </div>
        </div>
        <div className="flex border-t pt-4 gap-2  font-semibold"></div>
        <span className="text-[#a0522d] text-center">
          {!aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
            ? "30% off | Use NEWFUD"
            : aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
