import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full text-white">
      <div className="absolute top-0 left-0 z-20">
             <img 
             src="/images/bg.png" 
             alt="background" 
             className="absolute inset-0 w-full h-full object-cover z-0"/>
      </div>
      {/* Contest behind banner */}
      <div className="px-4 md:px-20 py-10 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif leading-tight text-white">
          Experience breathtaking mountains, crystal-clear lakes, and unforgettable adventures in the heart of Slovakia.
        </h3>
        <h3 className="text-sm md:text-base font-medium text-white mt-4">
          A perfect destination for hiking, skiing, and relaxing in pristine nature all year round.
        </h3>
      </div>
      {/* Banner picture */}
      <div className=" hero-banner z-10 md:h-[420px] lg:h-[500px] mb-10">
        <img
          src="/images/mountains-4.jpg"
          alt="Mountains"
          className="hero-banner"
        />

        {/* Overlay for contrast*/}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text over banner */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <h1 className="text-cyan-400 text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Enjoy mountains of experience
          </h1>
        </div>
      </div>

    </section>
  );
};

export default Hero;
