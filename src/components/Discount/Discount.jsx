import fruitBg from "../../assets/fresh-fruits.webp";
import Button from "../Button/Button"

const Discount = () => {
  return (
    <section className="bg-contain bg-no-repeat bg-zinc-100 mt-10 md:mt-20 py-4 md:py-10 bg-right md:bg-[image:var(--bg-image)] " style={{"--bg-image":`url(${fruitBg})`}}>
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row ml-5">
        <span className="text-4xl md:text-8xl text-green-500 md:-rotate-90  font-bold md:ml-20 md:-mr-15">20%</span>
        <div className="">
          <h2 className="text-3xl md:text-7xl font-bold text-zinc-700">
            First Order Discount!
          </h2>

          <p className="text-semibold text-zinc-600 py-2 md:py-5 max-w-xl">
            Unlock exclusive savings on your first haul! Join Freshcart
            today and enjoy special discounts on our entire range of
            farm-fresh produce, organic snacks, and daily essentials.
          </p>
          <Button content="Get a Discount"/>
        </div>
      </div>
    </section>
  );
};

export default Discount;
