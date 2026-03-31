import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button.jsx";

const card = ({ name, price, image, id, category }) => {
  return (
    <div className="rounded-2lg bg-zinc-100 p-3 md:p-5">
      {/* Card Icons */}
      <div className="flex justify-between">
        <span className="text-2xl text-zinc-300 hover:text-red-500 transition-colors cursor-pointer">
          <FaHeart />
        </span>
        <button className="text-xl hover:bg-green-700 bg-gradient-to-b from-green-400 to-green-600 text-white p-2 rounded-lg transition-all duration-100 hover:scale-110 hover:from-green-400 hover:to-green-700">
          <FaPlus />
        </button>
      </div>

      {/* Card Image */}
      <div className="h-30 md:h-48 flex items-center justify-center overflow-hidden">
        <img src={image} className="h-full object-contain" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-semibold text-xl">{name}</h3>
        <h4 className="font-bold p-2 text-2xl p-1">${price}</h4>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default card;
