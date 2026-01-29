import React from "react";

const Button = (props) => {
  return <button className="bg-gradient-to-b from-green-400 to-green-600 text-white text-s, px-5 py-3 rounded-lg font-semibold hover:scale-105 hover:to-green-700 transition-all duration-100 cursor-pointer" >
    {props.content}
  </button>;
};

export default Button;
