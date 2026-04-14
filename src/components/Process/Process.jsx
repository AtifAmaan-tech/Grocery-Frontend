import Heading from "../Heading/Heading";
import { GiThreeLeaves } from "react-icons/gi";
import { PiFactoryBold } from "react-icons/pi";
import { FaMedal } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Process = () => {
  const renderSteps = step.map((item) => {
    const Icon = item.icon;
    return (
      <div key={item.id} className="relative flex flex-col items-left justify-center pl-6 gap-5 border border-1 border-zinc-200 w-[300px] rounded-3xl md:min-h-[400px] min-h-[300px]">
        <span className="text-md font-bold text-green-600 -mt-10 mb-5">
          {item.number}
        </span>
        <div>
          <div className="">
            <span >
              <Icon className="text-green-600 text-6xl p-4 rounded-xl bg-green-100 mb-5" />
            </span>
          </div>
          <div>
            <h4 className="font-bold text-3xl">{item.title}</h4>
            <p className="text-zinc-600 mt-4 pr-6">{item.paragraph}</p>
          </div>
        </div>
        {item.id !== step.length && (<div className="absolute hidden md:block  top-1/2 -translate-y-1/2 -right-5 bg-white border border-zinc-200 rounded-full p-3 shadow-md hover:scale-[1.1]">
          <FaArrowRight className="text-zinc-400 text-sm" />
        </div>)}
      </div>
    );
  });

  return (
    <section className="max-w-[1400px] mx-auto py-10">
      <Heading highlight="Our" content="Process" />
      <div className="flex md:flex-row flex-col gap-10 justify-between px-8 mt-10">{renderSteps}</div>
    </section>
  );
};

export default Process;

const step = [
  {
    id: 1,
    number: "01",
    title: "Sourcing",
    paragraph: "Products sourced directly from trusted farms.",
    icon: GiThreeLeaves,
  },
  {
    id: 2,
    number: "02",
    title: "Quality",
    paragraph: "Best-in-market standards, rigorously checked.",
    icon: PiFactoryBold,
  },
  {
    id: 3,
    number: "03",
    title: "Manufacturing",
    paragraph: "Every product made with the utmost care.",
    icon: FaMedal,
  },
  {
    id: 4,
    number: "04",
    title: "Logistics",
    paragraph: "Reliable, on-time delivery every time",
    icon: FaTruck,
  },
];
