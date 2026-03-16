import { FaHeart, FaShieldAlt, FaLeaf } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import Heading from "../Heading/Heading";
import basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  //Left Values
  const leftValues = values.slice(0, 2).map((item) => {
    return (
      <div className="flex md:flex-row-reverse gap-6 items-center">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-green-400 to-green-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-3xl font-bold">{item.title}</h3>
          <p className= 'text-zinc-600 py-2'>{item.description}</p>
        </div>
      </div>
    );
  });

  //Right Values
  const rightValues = values.slice(2).map((item) => {
    return (
      <div className="flex flex-row-reverse gap-6 items-center">
        <div className="">
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className= 'text-zinc-600 py-2'>{item.description}</p>
        </div>
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-green-400 to-green-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-10">
        <Heading highlight="Our" content="Values" />
        <div className="flex flex-col md:flex-row mt-13 md:gap-5 gap-6">
          {/* Left section */}
          <div className = 'md:min-h-100 flex flex-col md:justify-between gap-6'>{leftValues}</div>
          {/* Image section  */}
          <div className="md:flex w-1/2 hidden">
            <img src={basket} className='w-100 h-100 object-cover mx-auto'></img>
          </div>
          {/* Right Section */}
          <div className = 'md:min-h-100 flex flex-col md:justify-between gap-6' >{rightValues}</div>
        </div>
      </div>
      ;
    </section>
  );
};

export default Values;

const values = [
  {
    id: 1,
    title: "Trust",
    description:
      "Trust it the most valuable thing a person can earn in the life",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    description: "From our store you will get always fresh items",
    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    title: "Food Safety",
    description: "We deliver your groceries with highest level of safety",
    icon: <FaLeaf />,
  },
  {
    id: 4,
    title: "100% Organic",
    description: "Our groceries are 100% Organic and stored directly from farm",
    icon: <SiCodefresh />,
  },
];
