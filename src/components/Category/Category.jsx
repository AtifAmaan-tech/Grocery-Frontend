import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import meatCat from "../../assets/meat-and-seafood.webp";
import vegCat from "../../assets/fruits-and-veggies.webp";
import dairyCat from "../../assets/dairy-and-eggs.webp";
import { Link } from "react-router-dom";

const Category = () => {
  const catList = [
    {
      id: 1,

      title: "Fruit & Veggies",

      description:
        "Fresh organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegitables",

      image: meatCat,

      link: "/fruits"
    },
    {
      id: 2,
      title: "Dairy & Eggs",

      description:
        "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheese at your finger tips.",

      image: vegCat,

      link: "/dairy"
    },
    {
      id: 3,
      title: "Meat & SeaFood",
      description:
        "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
      image: dairyCat,

      link: "/meat-and-seafood"
    },
  ];

  const renderCard = catList.map((card) => {
    return (
      <div className="flex-1 md:mt-8 mt-1 basis-[300px]" key={card.id}>
        {/* Image */}
        <div className="w-full min-h-[30vh] relative">
          <img src={card.image} className="absolute bottom-0"></img>
        </div>
        <div className="bg-zinc-100 pt-15 p-8 rounded-xl -mt-10">
          <h3 className="text-2xl text-zinc-800 font-bold">{card.title}</h3>
          <p className="mt-2 mb-3 flex-grow">{card.description}</p>
          <Link
            to={card.link}
            className="inline-block bg-gradient-to-b from-green-400 to-green-600 text-white text-s mt-2 px-5 py-2 rounded-lg font-semibold hover:scale-105 hover:to-green-700 transition-all duration-100 cursor-pointer"
          >
            Show More
          </Link>
        </div>
      </div>
    );
  });
  return (
    <section id="category" className="max-w-[1400px] mx-auto px-10">
      <Heading highlight="Shop" content="by Category" />
      <div className="flex flex-wrap gap-10">{renderCard}</div>
    </section>
  );
};

export default Category;
