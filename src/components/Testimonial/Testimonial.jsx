import Heading from "../Heading/Heading";
import pic1 from "../../assets/testimonial/profile-1.png";
import pic2 from "../../assets/testimonial/profile-2.png";
import pic3 from "../../assets/testimonial/profile-3.png";
import { RiDoubleQuotesL } from "react-icons/ri";

const feedbacks = [
  {
    id: 1,
    name: "Sarah Johnson",
    para: "The vegetables are incredibly fresh! It feels like they were just picked from the garden this morning. I've tried many local markets, but the quality here is consistently the best in town. Their commitment to organic produce really shows in the flavor.",
    rating: 5,
    profile_image: pic1,
  },
  {
    id: 2,
    name: "Michael Chen",
    para: "Super fast delivery and everything was packed perfectly. Their organic section is quite impressive and reasonably priced. I especially love how they handle delicate items like berries and leafy greens—they always arrive in pristine condition.",
    rating: 4,
    profile_image: pic2,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    para: "I've been a regular for months now. The customer service is outstanding and the dairy products are always fresh. The app is so easy to use, and I love the personalized recommendations based on my previous purchases. Highly recommended!",
    rating: 5,
    profile_image: pic3,
  },
];

const Testimonial = () => {

  const renderFeedbacks = feedbacks.map((fb) => {

    return (
      <div
        key={fb.id}
        className="flex flex-col border border-zinc-300 gap-5 rounded-2xl h-[370px] w-[320px] md:w-[390px] px-5 bg-green-100/20"
      >
        <div className="mt-4 text-4xl md:text-6xl text-green-700">
          <RiDoubleQuotesL  />
        </div>
        <div className="text-md m:text-xl text-zinc-600 ">{fb.para}</div>
        <div className="flex flex-row mt-auto mb-6 pt-2 border-t-1 border-zinc-300">
          <img src={fb.profile_image} alt={fb.name} className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full" />

          <div className="px-5">
            <div className="text-xl md:text-2xl font-semibold">{fb.name}</div>
            <div className="text-green">{"⭐".repeat(fb.rating)}</div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section>
      <Heading highlight="Customer's" content="Feedback" />
      <div className="flex flex-col  md:flex-row justify-between items-center md:gap-5 gap-10 px-20 py-10">
        {renderFeedbacks}
      </div>
    </section>
  );
};

export default Testimonial;
