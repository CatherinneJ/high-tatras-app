import React from "react";

function About() {
  return (
    <section className="flex flex-col md:flex-row md:items-start items-center gap-8 px-4 sm:px-6 lg:px-16 py-6 sm:py-8 md:py-12 animate__backInLeft" style={{animationDuration: "2s"}}>
      {/* Text on the left */}
      <div className="md:w-1/2 md:flex-shrink-0 xl:px-12">
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-px pt-24 w-12 sm:w-20"></div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            About
          </p>
        </div>
        <p className="text-gray-200 [text-align:justify] text-sm sm:text-base">
          The High Tatras are perfect for active holidays all year round, offering numerous skiing, hiking, and mountaineering opportunities. 
          Slovakia's karst areas feature many caves, including the famous Dobšinská Ice Cave, Demänovská Dripstone Cave, and Ochtinská Aragonite Cave. 
          Often called the "miniature Alps," the Tatras provide alpine experiences on a compact area of 341 km². Popular peaks include Kriváň, Rysy, and Gerlachovský štít. 
          In winter, the best ski tracks are at Štrbské Pleso and Skalnaté Pleso, with the season lasting until mid-May. 
          The region also offers several climatic spas for relaxation.
        </p>
      </div>
      
      {/* Picture on the right */}
      <div className="md:flex-1 md:flex-shrink-0 flex flex-col gap-4 relative">
        <img 
          src="/images/spring.jpg" 
          alt="spring" 
          className="w-full h-auto object-cover rounded-lg shadow-sm z-20 -mt-8"
          style={{maxHeight: "180px"}}
        />
        <img 
          src="/images/tatry.jpg" 
          alt="tatry" 
          className="w-full h-auto object-cover rounded-lg shadow-sm z-10"
          style={{maxHeight: "180px"}}
        />
      </div>
    </section>
  );
}

export default About;