import Heading from "../Heading/Heading";
import pic1 from "../../assets/testimonial/profile-1.webp";
import pic2 from "../../assets/testimonial/profile-2.webp";
import pic3 from "../../assets/testimonial/profile-3.webp";
import pic4 from "../../assets/testimonial/profile-4.webp";
import pic5 from "../../assets/testimonial/profile-5.webp";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

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
  {
    id: 4,
    name: "David Wilson",
    para: "The quality of the organic poultry and meat is second to none. I appreciate the transparency about their sourcing and the freshness is always guaranteed. It's transformed my home cooking entirely.",
    rating: 5,
    profile_image: pic4,
  },
  {
    id: 5,
    name: "Sophia Martinez",
    para: "Fast, reliable, and the best artisan bread selection in the area. I love the eco-friendly packaging they use—it shows they really care about the environment as much as they do about food quality.",
    rating: 4,
    profile_image: pic5,
  },
];

const Testimonial = () => {
  // Testimonial cards
  const renderFeedbacks = feedbacks.map((fb) => {
    return (
      <SwiperSlide key={fb.id}>
        <div className="flex flex-col border border-zinc-300 gap-5 rounded-2xl h-[350px] w-full md:w-[390px] px-5 bg-green-100/20">
          <div className="mt-4 text-4xl md:text-6xl text-green-700">
            <RiDoubleQuotesL />
          </div>
          <div className="text-md m:text-xl text-zinc-600 ">{fb.para}</div>
          <div className="flex flex-row mt-auto mb-6 pt-2 border-t-1 border-zinc-300">
            <img
              src={fb.profile_image}
              alt={fb.name}
              className="h-[50px] w-[50px] md:h-[54px] md:w-[54px] rounded-full border border-yellow-400 border-2 p-1"
            />

            <div className="px-5">
              <div className="text-xl md:text-2xl font-semibold">{fb.name}</div>
              <div className="text-green">{"⭐".repeat(fb.rating)}</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section>
      <Heading highlight="Customer's" content="Feedback" />

      <div className="flex flex-col md:flex-row justify-between items-center md:gap-5 gap-10 px-5 md:px-20 py-10">
        {/* Desktop Left Button */}
        <div className="hidden md:block">
          <button className="custom-prev">
            <FaChevronCircleLeft className="hover:text-green-500 hover:bg-none hover:bg-white text-white  text-xl md:text-3xl bg-gradient-to-b from-green-400 to-green-600 bg-zinc-500 rounded-full transition-transform durationo-300 hover:scale-[1.1]" />
          </button>
        </div>

        {/* Swiping cards */}
        <Swiper
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          modules={[Navigation]}
          className="h-[350px] mt-auto flex-1 w-full"
        >
          {renderFeedbacks}
        </Swiper>

        {/* Desktop Right Button */}
        <div className="hidden md:block">
          <button className="custom-next">
            <FaChevronCircleRight className="hover:text-green-500 hover:bg-none hover:bg-white text-white  text-xl md:text-3xl bg-gradient-to-b from-green-400 to-green-600 bg-zinc-500 rounded-full transition-transform durationo-300 hover:scale-[1.1]" />
          </button>
        </div>

        {/* Mobile left and right button */}
        <div className="flex md:hidden gap-8 mt-2">
          <button className="custom-prev">
            <FaChevronCircleLeft className="hover:text-green-500 hover:bg-none hover:bg-white text-white  text-xl md:text-3xl bg-gradient-to-b from-green-400 to-green-600 bg-zinc-500 rounded-full transition-transform durationo-300 hover:scale-[1.1]" />
          </button>

          <button className="custom-next">
            <FaChevronCircleRight className="hover:text-green-500 hover:bg-none hover:bg-white text-white  text-xl md:text-3xl bg-gradient-to-b from-green-400 to-green-600 bg-zinc-500 rounded-full transition-transform durationo-300 hover:scale-[1.1]" />
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonial;
