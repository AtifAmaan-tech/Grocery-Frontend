import React from "react";

const Heading = (props) => {
  return (
    <div className='w-fit pt-20 mx-auto'>
      <h2 className="md:text-5xl text-[2.5rem] font-bold">
        <span className="text-green-500">{props.highlight}</span> {props.content}
      </h2>
      <div className="md:mt-4 md:w-35 w-29 h-1 bg-green-500 ml-auto"></div>
    </div>
  );
};

export default Heading;
