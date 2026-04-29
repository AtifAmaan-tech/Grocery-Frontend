import Grocery from "../../assets/grocery.webp";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <section className="py-8 md:py-0">
      <div className="max-w-[1400px] min-h-screen mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-20">
        {/* Hero Content */}
        <div className="flex-1">
          <span className="bg-green-100 text-green-500 px-3 py-1 text rounded-full mb-4">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/20 text-4xl/10 font-semibold mt-2">
            Tasty Organic <span className="text-orange-500">Fruites</span> & <span className="text-green-500">Veggies</span> in Your
            City
          </h1>
          <p className="text-zinc-600 text-lg max-w-[530px] mt-5 mb-7">Bread for a high content of beneficial substance. Our products are all fresh and healthy. </p>
          <Button content="Shop Now" />
        </div>
        {/* Hero Image */}
        <div className="flex-1 mt-5 md:mt-0">
          <img src={Grocery} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
