import React from 'react';

const ButtonForm = ({ text }) => {
  return (
    <button
      type="submit"
      className="relative group md:w-72 md:h-14 w-52 h-12 flex
      justify-center items-center rounded-lg bg-gold hover:bg-cyan-500/90 overflow-hidden shadow-md hover:shadow-lg
      transition-shadow duration-300"
    >
    <span className="relative z-10 uppercase md:text-lg text-black group-hover:text-white transation-colors duration-500">   
        {text}
    </span>
     <div className="absolute right-4 w-10 h-10 -translate-y-1/2 top-1/2 flex justify-center items-center">

     <div className="absolute w-full h-full rounded-full bg-white origin-center scale-75 group-hover:scale-110 transition-transform duration-500" />
      <img 
       src="/images/arrow.svg"
       alt="arrow"
       className="relative z-10 w-5 h-5 animate-bounce"
      />
     </div>  
    </button>
  );
};

export default ButtonForm;
