import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <section className="bg-zinc-200 mt-20">
      {/* Footer for desktop view */}
      <div className="hidden md:block max-w-[1400px] mx-auto md:px-5 pt-4 pb-10 md:flex justify-between">
        <ul className="space-y-4">
          <li className="text-3xl font-semibold">
            {" "}
            ℱresh<span className="font-bold text-green-500 uppercase">𝓒</span>
            art
          </li>
          <li className="text-zinc-600">
            Get high quality groceries at your finger tips. Fresh and Fast
          </li>
          <li className="text-zinc-600">2026 @ All Rights Reserved</li>
        </ul>

        <ul className="space-y-4 text-zinc-600">
          <li className="text-xl font-bold">Company</li>
          <li>About</li>
          <li>FAQ's</li>
        </ul>

        <ul className="space-y-4 text-zinc-600">
          <li className="text-xl font-bold">Support</li>
          <li>Support Center</li>
          <li>Feedback</li>
          <li>Contact Us</li>
        </ul>

        <ul className="space-y-4 text-zinc-600">
          <li className="text-xl font-bold">Stay Connected</li>
          <li className="flex flex-col">
            Question or Feedback?<span>We would love to hart from you</span>
          </li>
          <li className="flex border border-1 border-green-600 rounded-2xl">
            <input
              placeholder="Enter your email"
              className="outline-none bg-transparent px-2 py-1"
            ></input>
            <IoMdSend className="text-white mt-1 mr-1 p-1 text-2xl bg-green-600 rounded-full" />
          </li>
        </ul>
      </div>

      {/* Footer for mobile view */}
      <div className="md:hidden bg-zinc-200">
        <div className="flex justify-center items-center px-4 text-2xl font-semibold pt-6">
          ℱresh<span className="font-bold text-green-500 uppercase">𝓒</span>
          art
        </div>

        <div className="flex justify-between px-8 pt-10">
          <ul className="space-y-4 text-zinc-600">
            <li className="text-xl font-bold">Company</li>
            <li>About</li>
            <li>FAQ's</li>
          </ul>

          <ul className="space-y-4 text-zinc-600">
            <li className="text-xl font-bold">Support</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="flex items-center">
          <ul className="space-y-4 text-zinc-600 px-8 pt-10">
            <li className="text-xl font-bold">Stay Connected</li>
            <li className="flex flex-col">
              Question or Feedback?<span>We would love to hart from you</span>
            </li>
            <li className="flex border border-1 border-green-600 rounded-2xl">
              <input
                placeholder="Enter your email"
                className="outline-none bg-transparent px-2 py-1 -ml-1"
              ></input>
              <IoMdSend className="text-white mt-1 mr-1 p-1 text-2xl bg-green-600 rounded-full" />
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center text-zinc-600 font-semibold mt-10">
          @2026 FreshCart. All Rights Reseved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
